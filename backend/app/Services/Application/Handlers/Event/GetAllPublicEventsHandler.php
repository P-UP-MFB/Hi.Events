<?php

namespace HiEvents\Services\Application\Handlers\Event;

use HiEvents\DomainObjects\EventSettingDomainObject;
use HiEvents\DomainObjects\Generated\PromoCodeDomainObjectAbstract;
use HiEvents\DomainObjects\ImageDomainObject;
use HiEvents\DomainObjects\OrganizerDomainObject;
use HiEvents\DomainObjects\OrganizerSettingDomainObject;
use HiEvents\DomainObjects\ProductCategoryDomainObject;
use HiEvents\DomainObjects\ProductDomainObject;
use HiEvents\DomainObjects\ProductPriceDomainObject;
use HiEvents\DomainObjects\Status\EventStatus;
use HiEvents\DomainObjects\TaxAndFeesDomainObject;
use HiEvents\Repository\Eloquent\Value\OrderAndDirection;
use HiEvents\Repository\Eloquent\Value\Relationship;
use HiEvents\Repository\Interfaces\EventRepositoryInterface;
use HiEvents\Repository\Interfaces\PromoCodeRepositoryInterface;
use HiEvents\Services\Application\Handlers\Event\DTO\GetAllPublicEventsDTO;
use HiEvents\Services\Domain\Product\ProductFilterService;
use Illuminate\Support\Collection;  // ✅ Added import

class GetAllPublicEventsHandler
{
    public function __construct(
        private readonly EventRepositoryInterface     $eventRepository,
        private readonly PromoCodeRepositoryInterface $promoCodeRepository,
        private readonly ProductFilterService         $productFilterService,
    )
    {
    }

    public function handle(GetAllPublicEventsDTO $data): Collection  // ✅ Changed return type to Collection
    {
        // ✅ Use the new findPublicEvents method
        $events = $this->eventRepository
            ->loadRelation(
                new Relationship(ProductCategoryDomainObject::class, [
                    new Relationship(ProductDomainObject::class,
                        nested: [
                            new Relationship(ProductPriceDomainObject::class),
                            new Relationship(TaxAndFeesDomainObject::class),
                        ],
                        orderAndDirections: [
                            new OrderAndDirection('order', 'asc'),
                        ]
                    ),
                ])
            )
            ->loadRelation(new Relationship(EventSettingDomainObject::class))
            ->loadRelation(new Relationship(ImageDomainObject::class))
            ->loadRelation(new Relationship(OrganizerDomainObject::class, nested: [
                new Relationship(ImageDomainObject::class),
                new Relationship(OrganizerSettingDomainObject::class),
            ], name: 'organizer'))
            ->findPublicEvents($data->limit);  // ✅ Call the new method

        // ✅ Apply promo code filtering if provided
        if (!empty($data->promoCode)) {
            $events = $events->map(function ($event) use ($data) {
                $promoCodeDomainObject = $this->promoCodeRepository->findFirstWhere([
                    PromoCodeDomainObjectAbstract::EVENT_ID => $event->getId(),
                    PromoCodeDomainObjectAbstract::CODE => $data->promoCode,
                ]);

                if (!$promoCodeDomainObject?->isValid()) {
                    $promoCodeDomainObject = null;
                }

                return $event->setProductCategories($this->productFilterService->filter(
                    productsCategories: $event->getProductCategories(),
                    promoCode: $promoCodeDomainObject
                ));
            });
        }

        return $events;
    }
}
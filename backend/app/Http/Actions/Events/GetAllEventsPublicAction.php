<?php

namespace HiEvents\Http\Actions\Events;

use HiEvents\DomainObjects\Status\EventStatus;
use HiEvents\Http\Actions\BaseAction;
use HiEvents\Resources\Event\EventResourcePublic;
use HiEvents\Services\Application\Handlers\Event\DTO\GetAllPublicEventsDTO;
use HiEvents\Services\Application\Handlers\Event\GetAllPublicEventsHandler;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Psr\Log\LoggerInterface;

class GetAllEventsPublicAction extends BaseAction
{
    public function __construct(
        private readonly GetAllPublicEventsHandler $getAllPublicEventsHandler,
        private readonly LoggerInterface           $logger,
    )
    {
    }

    public function __invoke(Request $request): JsonResponse  // ✅ Removed $eventId parameter
    {
        $events = $this->getAllPublicEventsHandler->handle(GetAllPublicEventsDTO::fromArray([
            'limit' => 9,  // ✅ Changed from eventId to limit
            'ipAddress' => $this->getClientIp($request),
            'promoCode' => $request->string('promo_code')->lower()->toString(),  // ✅ Fixed Stringable issue
            'isAuthenticated' => $this->isUserAuthenticated(),
        ]));

        // ✅ Filter collection instead of checking single event
        $visibleEvents = $events->filter(function ($event) {
            return $this->canUserViewEvent($event);
        });

        $this->logger->debug(__('Fetched :count public events', [
            'count' => $visibleEvents->count(),
        ]));

        return $this->resourceResponse(EventResourcePublic::class, $visibleEvents);  // ✅ Return collection
    }

    private function canUserViewEvent($event): bool  // ✅ Removed type hint for flexibility
    {
        if ($event->getStatus() === EventStatus::LIVE->name) {
            return true;
        }

        if ($this->isUserAuthenticated() && $event->getAccountId() === $this->getAuthenticatedAccountId()) {
            return true;
        }

        return false;
    }
}
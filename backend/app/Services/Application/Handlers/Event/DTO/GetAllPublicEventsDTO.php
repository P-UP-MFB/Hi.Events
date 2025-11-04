<?php

namespace HiEvents\Services\Application\Handlers\Event\DTO;

use HiEvents\DataTransferObjects\BaseDTO;

class GetAllPublicEventsDTO extends BaseDTO
{
    public function __construct(
        public int     $limit,  // ✅ Changed from eventId to limit
        public bool    $isAuthenticated,
        public ?string $ipAddress = null,
        public ?string $promoCode = null,
    )
    {
    }
}
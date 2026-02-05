<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UsedFeatureResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'feature' => [
                'name' => $this->feature->name,
                'description' => $this->feature->description,
                'required_credits' => $this->feature->required_credits,
            ],
            'credits_used' => $this->credits_used,
            'created_at' => $this->created_at->format('M j, Y H:i'),
        ];
    }
}

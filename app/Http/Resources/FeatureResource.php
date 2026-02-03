<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FeatureResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    public static $wrap = false ; 
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'image' => $this->image,
            'route_name' => $this->route_name,
            'name' => $this->name,
            'description' => $this->description,
            'required_credits' => $this->required_credits,
            'active' => $this->active,
        ];
    }
}

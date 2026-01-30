<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UsedFeature extends Model
{
    
    protected $guarded = ['id'];



    protected function casts():array{
        return [
            'data' => 'array'
        ];
    }
    
    public function feature()
    {
        return $this->belongsTo(Feature::class);
    }
    
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    
}



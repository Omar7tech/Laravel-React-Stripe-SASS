<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Feature extends Model
{
    /* Schema::create('features', function (Blueprint $table) {
            $table->id();
            $table->string('image');
            $table->string('route_name');
            $table->string('name');
            $table->string('description');
            $table->integer('required_credits');
            $table->boolean('active')->default(true);
            $table->timestamps();
        }); */

    protected $guarded = ['id'];


}

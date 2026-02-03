<?php

namespace Database\Seeders;

use App\Models\Feature;
use App\Models\Package;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Omar',
            'email' => 'omar@gmail.com',
            'password' => bcrypt('password'),
        ]);

        Feature::updateOrCreate([
            'image' => 'https://i.ibb.co/4Zsz0jPn/square-14034302.png' ,
            'route_name' => 'feature1.index',
            'name' => 'Calculate Sum',
            'description' => 'Calculate Sum Of Two Numbers',
            'required_credits' => 1,
            'active' => true
        ]);
        Feature::updateOrCreate([
            'image' => 'https://i.ibb.co/d4Mwm5Fp/minus-1828783.png' ,
            'route_name' => 'feature2.index',
            'name' => 'Calculate Subtraction',
            'description' => 'Calculate Subtraction Of Two Numbers',
            'required_credits' => 3,
            'active' => true
        ]);

        Package::updateOrCreate([
            'name' => 'Basic' ,
            'Price' => 5 ,
            'credits' => 20,
        ]);
        Package::updateOrCreate([
            'name' => 'Silver' ,
            'Price' => 20 ,
            'credits' => 100,
        ]);
        
        Package::updateOrCreate([
            'name' => 'Gold' ,
            'Price' => 50 ,
            'credits' => 500,
        ]);

    }
}

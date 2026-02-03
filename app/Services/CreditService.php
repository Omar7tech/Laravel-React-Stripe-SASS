<?php
namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\DB;
use DomainException;

class CreditService
{
    public function increase(User $user , int $amount){
        $user->increment('available_credits', $amount);
    }

    public function decrease(User $user , int $amount){
        if($user->available_credits < $amount){
            throw new DomainException('Insufficient credits');
        }
        $user->decrement('available_credits', $amount);
    }
}

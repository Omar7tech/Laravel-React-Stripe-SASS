<?php

namespace App\Http\Controllers;

use App\Http\Resources\UsedFeatureResource;
use App\Models\UsedFeature;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $user = $request->user();
        
        $usedFeatures = UsedFeature::with('feature')
            ->where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->take(10)
            ->get();

        return Inertia::render('Dashboard', [
            'usedFeatures' => UsedFeatureResource::collection($usedFeatures),
            'totalCredits' => $user->available_credits,
        ]);
    }
}

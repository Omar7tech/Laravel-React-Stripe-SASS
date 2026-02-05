<?php

namespace App\Http\Controllers;

use App\Http\Resources\UsedFeatureResource;
use App\Models\Transaction;
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

        // Get transactions
        $transactions = Transaction::with('package')
            ->where('user_id', $user->id)
            ->orderBy('created_at', 'desc')
            ->take(10)
            ->get();

        // Calculate statistics
        $totalCreditsUsed = UsedFeature::where('user_id', $user->id)->sum('credits');
        $totalFeaturesUsed = UsedFeature::where('user_id', $user->id)->count();
        $totalAmountPaid = Transaction::where('user_id', $user->id)->sum('price');
        
        // Find most used feature
        $mostUsedFeature = UsedFeature::with('feature')
            ->where('user_id', $user->id)
            ->selectRaw('feature_id, COUNT(*) as usage_count, SUM(credits) as total_credits')
            ->groupBy('feature_id')
            ->orderBy('usage_count', 'desc')
            ->first();

        $stats = [
            'totalCredits' => $user->available_credits,
            'creditsUsed' => $totalCreditsUsed,
            'creditsRemaining' => $user->available_credits - $totalCreditsUsed,
            'totalFeaturesUsed' => $totalFeaturesUsed,
            'totalAmountPaid' => $totalAmountPaid,
            'mostUsedFeature' => $mostUsedFeature ? [
                'name' => $mostUsedFeature->feature->name,
                'usageCount' => $mostUsedFeature->usage_count,
                'totalCredits' => $mostUsedFeature->total_credits,
            ] : null,
        ];

        return Inertia::render('Dashboard', [
            'stats' => $stats,
            'usedFeatures' => $usedFeatures->toArray(), // Temporarily bypass resource
            'transactions' => $transactions->toArray(),
        ]);
    }
}

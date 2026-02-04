<?php

namespace App\Http\Controllers;

use App\Http\Resources\FeatureResource;
use App\Http\Resources\PackageResource;
use App\Models\Feature;
use App\Models\Package;
use App\Models\Transaction;
use Auth;
use Illuminate\Http\Request;
use Stripe\Stripe;
use UnexpectedValueException;

class CreditController extends Controller
{
    public function index()
    {
        $packages = Package::all();
        $features = Feature::where('active', true)->get();
        return inertia('Credits/Index', [
            'packages' => PackageResource::collection($packages),
            'features' => FeatureResource::collection($features),
            'success' => session('success'),
            'error' => session('error')
        ]);
    }

    public function buyCredits(Package $package)
    {
        $stripe = new \Stripe\StripeClient(env('STRIPE_SECRET_KEY'));
        $checkout_session = $stripe->checkout->sessions->create([
            'line_items' => [
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                        'name' => $package->name . " " . $package->credits . " Credits",
                    ],
                    'unit_amount' => $package->price * 100,
                ],
                'quantity' => 1
            ],
            'mode' => 'payment',
            'success_url' => route('credits.success', [], true),
            'cancel_url' => route('credits.cancel', [], true)
        ]);

        Transaction::create([
            'status' => 'pending',
            'price' => $package->price,
            'credits' => $package->credits,
            'session_id' => $checkout_session->id,
            'package_id' => $package->id,
            'user_id' => Auth::id(),
        ]);

        return redirect($checkout_session->url);
    }

    public function success()
    {
        return to_route('credits.index')->with('success', 'Transaction completed successfully');
    }

    public function cancel()
    {
        return to_route('credits.index')->with('error', 'Transaction cancelled');
    }

    public function webhook()
    {
        $endpoint_secret = env('STRIPE_WEBHOOK_SECRET');
        $payload = @file_get_contents('php://input');
        $sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'];
        $event = null;

        try {
            $event = \Stripe\Webhook::constructEvent(
                $payload,
                $sig_header,
                $endpoint_secret
            );
        } catch (UnexpectedValueException $e) {
            return response('', 400);
        } catch (\Stripe\Exception\SignatureVerificationException $e) {
            return response('', 400);
        }

        switch ($event->type) {
            case 'checkout.session.completed' :
                $session = $event->data->object;
                $transaction = Transaction::where('session_id' , $session->id)->first();
                if($transaction && $transaction->status == 'pending'){
                    $transaction->status = 'paid';
                    $transaction->save();
                    $transaction->user->available_credits += $transaction->credits;
                    $transaction->user->save();
                }
            default:
                echo ' Recieved Unknown  event type ' . $event->type;
                break;
        }
        return response('', 200);
    }
}

<?php

use App\Http\Controllers\CreditController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

    Route::post('buy-credits/webhook' , [CreditController::class , 'webhook'])->name('credits.webhook');
Route::middleware(['auth'])->group(function () {
    Route::get('/feature1', [App\Http\Controllers\Feature1Controller::class, 'index'])->name('feature1.index');
    Route::post('/feature1/calculate', [App\Http\Controllers\Feature1Controller::class, 'calculate'])->name('feature1.calculate');
    Route::get('/feature2', [App\Http\Controllers\Feature2Controller::class, 'index'])->name('feature2.index');
    Route::post('/feature2/calculate', [App\Http\Controllers\Feature2Controller::class, 'calculate'])->name('feature2.calculate');
    Route::get('/buy-credits', [App\Http\Controllers\CreditController::class, 'index'])->name('credits.index');
    Route::get('/buy-credits/success', [App\Http\Controllers\CreditController::class, 'success'])->name('credits.success');
    Route::get('/buy-credits/cancel', [App\Http\Controllers\CreditController::class, 'cancel'])->name('credits.cancel');
    Route::post('/buy-credits/{package}', [App\Http\Controllers\CreditController::class, 'buyCredits'])->name('credits.buy');
});

require __DIR__ . '/settings.php';
    
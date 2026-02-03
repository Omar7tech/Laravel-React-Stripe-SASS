<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('dashboard', function () {
    return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/feature1' , [App\Http\Controllers\Feature1Controller::class, 'index'])->middleware(['auth'])->name('feature1.index');
Route::post('/feature1/calculate' , [App\Http\Controllers\Feature1Controller::class, 'calculate'])->middleware(['auth'])->name('feature1.calculate');
Route::get('/feature2' , [App\Http\Controllers\Feature2Controller::class, 'index'])->middleware(['auth'])->name('feature2.index');
Route::post('/feature2/calculate' , [App\Http\Controllers\Feature2Controller::class, 'calculate'])->middleware(['auth'])->name('feature2.calculate');
require __DIR__.'/settings.php';

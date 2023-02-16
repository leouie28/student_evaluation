<?php

use App\Http\Controllers\v1\AuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::get('/check-auth', [AuthController::class, 'checkAuth'])->middleware(['auth:web']);

Route::get('/{any?}', function () {
  return view('app');
})->where('any', '.*');

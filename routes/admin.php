<?php

use App\Http\Controllers\v1\AuthController;
use App\Http\Controllers\v1\UserController;
use Illuminate\Support\Facades\Route;

Route::get('check-auth', [AuthController::class, 'checkAuth'])->name('checkAuth');

Route::prefix('user')->group(function () {

  Route::prefix('admin')->group(function () {
    Route::post('', [UserController::class, 'createAdmin']);
  });
  Route::prefix('teacher')->group(function () {
    Route::post('', [UserController::class, 'createTeacher']);
  });
  Route::get('user/test', [UserController::class, 'me']);
});

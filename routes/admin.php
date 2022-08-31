<?php

use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:admin']], function() {

    Route::resources([
        'announcement' => AnnouncementController::class,
    ]);
});
<?php

use App\Http\Controllers\Api\ElectionController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:web']], function() {

    //election
    Route::controller(ElectionController::class)->group(function () {
        Route::post('election-api/{key}/check-code', 'checkCode');
    });

    Route::resources([
        'election-api' => ElectionController::class,
    ]);

});
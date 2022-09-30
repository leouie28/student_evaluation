<?php

use App\Http\Controllers\Api\ElectionController;
use App\Http\Controllers\Api\VoteController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:web']], function() {

    //election
    Route::controller(ElectionController::class)->group(function () {
        Route::post('election-api/{key}/check-code', 'checkCode');
        Route::get('election-api/{key}/election-set', 'getSet');
    });

    Route::resources([
        'election-api' => ElectionController::class,
        'vote-api' => VoteController::class,
    ]);

});
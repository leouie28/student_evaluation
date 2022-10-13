<?php

use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ElectionController;
use App\Http\Controllers\PartylistController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:admin']], function() {

    Route::resources([
        'announcement' => AnnouncementController::class,
        'student' => StudentController::class,
        'partylist' => PartylistController::class,
        'election' => ElectionController::class,
    ]);

    Route::controller(StudentController::class)->group(function() {
        Route::post('student/insert-excel', 'importExcel');
    });

    Route::get('status', [Controller::class, 'stat']);
    Route::controller(ElectionController::class)->group(function() {
        Route::post('election/store-set', 'storeElectionSet');
        Route::get('election/get-set/{id}', 'getElectionSet');
        Route::get('election/{id}/result', 'result');
        Route::get('election/get-votes/{id}', 'getVotes');
    });
});
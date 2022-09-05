<?php

use App\Http\Controllers\AnnouncementController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ElectionController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth:admin']], function() {

    Route::resources([
        'announcement' => AnnouncementController::class,
        'student' => StudentController::class,
    ]);

    Route::controller(StudentController::class)->group(function() {
        Route::post('student/insert-excel', 'importExcel');
    });

    Route::controller(ElectionController::class)->group(function() {
        Route::post('election/store-set', 'storeElectionSet');
    });
});
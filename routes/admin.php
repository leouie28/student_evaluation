<?php

use App\Http\Controllers\v1\AuthController;
use App\Http\Controllers\v1\DepartmentController;
use App\Http\Controllers\v1\GradeLevelController;
use App\Http\Controllers\v1\IndicatorController;
use App\Http\Controllers\v1\SectionController;
use App\Http\Controllers\v1\StudentController;
use App\Http\Controllers\v1\SubjectController;
use App\Http\Controllers\v1\TeacherController;
use App\Http\Controllers\v1\UserController;
use Illuminate\Support\Facades\Route;

Route::get('check-auth', [AuthController::class, 'checkAuth'])->name('checkAdmin');

Route::middleware(['auth:web', 'admin'])->group(function () {

  Route::resource('department', DepartmentController::class);
  Route::resource('student', StudentController::class);
  Route::resource('level', GradeLevelController::class);
  Route::resource('section', SectionController::class);
  Route::resource('subject', SubjectController::class);
  Route::resource('teacher', TeacherController::class);
  Route::resource('indicator', IndicatorController::class);

  Route::prefix('user')->group(function () {

    Route::prefix('admin')->group(function () {
      Route::post('', [UserController::class, 'createAdmin']);
    });
    Route::prefix('teacher')->group(function () {
      Route::post('', [UserController::class, 'createTeacher']);
    });
    Route::get('user/test', [UserController::class, 'me']);
  });
});

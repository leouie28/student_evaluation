<?php

use App\Http\Controllers\v1\Teacher\EvaluationController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:web', 'teacher'])->group(function () {
  Route::get('my-subjects', [EvaluationController::class, 'mySubjects']);
});

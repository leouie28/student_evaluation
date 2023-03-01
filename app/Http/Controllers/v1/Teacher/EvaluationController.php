<?php

namespace App\Http\Controllers\v1\Teacher;

use App\Http\Controllers\Controller;
use App\Models\Subject;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EvaluationController extends Controller
{

  public function mySubjects(Request $request)
  {
    $teacher = Auth::user();
    $model = Subject::query();

    if (!$request->per_page) {
      return $model->MySubjects($teacher->profile->id)->paginate($model->MySubjects($teacher->profile->id)->count());
    }
    return $model->MySubjects($teacher->profile->id)->paginate($request->per_page);
  }
}

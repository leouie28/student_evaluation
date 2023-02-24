<?php

namespace App\Http\Controllers\v1;

use App\Filters\EvaluationFilter;
use App\Http\Controllers\Controller;
use App\Models\Evaluation;
use App\Models\Indicator;
use Illuminate\Http\Request;

class EvaluationController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return (new EvaluationFilter)->searchable('evaluations');
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    $payload = $request->validate([
      'evaluation' => 'required|array'
    ]);

    //need to add error handling
    foreach ($request->evaluation as $eval) {
      foreach ($eval['data'] as $ind) {
        Evaluation::create([
          'subject_id' => $ind['subject_id'],
          'student_id' => $eval['student_id'],
          'indicator_id' => $ind['indicator_id'],
          'remarks' => $ind['remarks']
        ]);
      }
    }

    return response()->json($payload, 200);
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function show($id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function edit($id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $id
   * @return \Illuminate\Http\Response
   */
  public function destroy($id)
  {
    //
  }
}

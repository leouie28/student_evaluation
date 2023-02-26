<?php

namespace App\Http\Controllers\v1;

use App\Filters\EvaluationFilter;
use App\Http\Controllers\Controller;
use App\Models\Evaluation;
use App\Models\Indicator;
use App\Models\Response;
use Carbon\Carbon;
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
      'evaluation' => 'required|array',
      'subject_id' => 'required'
    ]);

    $now = Carbon::now();
    if(Evaluation::where('subject_id', $request->subject_id)->whereMonth('created_at', $now)->exists()) {
      return response()->json($this->returnBasic($payload, 'Evaluation already exist for this month', 'failed'), 200);
    }
    $newEval = Evaluation::create(['subject_id' => $request->subject_id]);
    //need to add error handling
    foreach($request->evaluation as $eval) {
      foreach($eval['response'] as $ind) {
        Response::create([
          'evaluation_id' => $newEval->id,
          'student_id' => $eval['student_id'],
          'indicator_id' => $ind['indicator_id'],
          'value' => $ind['value']
        ]);
      }
    }

    return response()->json($this->returnBasic($payload), 200);
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

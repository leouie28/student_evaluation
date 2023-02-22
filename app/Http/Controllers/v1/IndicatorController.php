<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\Indicator;
use Illuminate\Http\Request;

class IndicatorController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    //
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
      'year' => 'required|string',
      'indicators' => 'array'
    ]);

    if (Indicator::where('year', $request->year)->exists()) {
      return response()->json($this->returnBasic($request, 'The year you enter has already evaluation indicators', 'failed'));
    }

    foreach ($payload['indicators'] as $ind) {
      Indicator::create([
        'year' => $payload['year'],
        'label' => $ind['label'],
        'type' => $ind['type'],
        'order' => $ind['order']
      ]);
    }

    return Indicator::where('year', $request->year)->get();
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

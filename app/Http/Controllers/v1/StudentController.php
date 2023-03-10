<?php

namespace App\Http\Controllers\v1;

use App\Filters\Filter;
use App\Http\Controllers\Controller;
use App\Models\Student;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class StudentController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $model = Student::class;
    return (new Filter($model))->searchable('students');
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
    $request['role_id'] = 4;
    $request['username'] = $request->student_id;
    $request['password'] = Hash::make('123');
    $payload = $request->validate([
      'username' => 'required|unique:users',
      'password' => 'required',
      'role_id' => 'required|integer',
      'student_id' => 'required|unique:students',
      'first_name' => 'required|string',
      'last_name' => 'required|string',
      'gender' => 'required|string',
      'address' => 'required',
      'birthday' => 'required',
      'contact_number' => 'nullable',
      'current_grade_level' => 'required|integer',
      'current_section' => 'required|integer',
      'image' => 'nullable',
    ]);

    $student = User::create($payload);

    $student->student()->save(new Student($payload));

    return response()->json($this->returnBasic($student), 200);
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

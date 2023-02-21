<?php

namespace App\Http\Controllers\v1;

use App\Models\User;
use App\Filters\Filter;
use App\Models\Teacher;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Teacher::class;
        return (new Filter($model))->searchable('teachers');
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
        $request['role_id'] = 3;
        $request['password'] = Hash::make($request->password);
        $payload = $request->validate([
            'username' => 'required|unique:users',
            'password' => 'required',
            'role_id' => 'required|integer',
            'name' => 'required|string',
            'gender' => 'required|string',
            'address' => 'required',
            'birthday' => 'required',
            'contact_number' => 'nullable',
            'image' => 'nullable',
        ]);

        $teacher = User::create($payload);

        $teacher->student()->save(new Teacher($payload));

        return response()->json($this->returnBasic($teacher), 200);
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

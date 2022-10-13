<?php

namespace App\Http\Controllers;

use App\Filters\Filter;
use App\Imports\StudentImport;
use App\Models\Student;
use Exception;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;

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
        return (new Filter($model))->searchable();
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
        try{
            if(Student::where('student_id', $request->student_id)->exists()){
                return [
                    'data' => $request,
                    'type' => 'error',
                    'message' => 'Voter student id is already registered in the system...',
                ];
            }else{
                $student = Student::create($request->toArray());
                $student->status = $request->active;
                $student->password = bcrypt($request->password);
                $student->save();
                return [
                    'data' => $student,
                    'type' => 'success',
                    'message' => 'Voter successfully added...',
                ];
            }
        }catch(Exception $e){
            return [
                'data' => $request,
                'type' => 'error',
                'message' => $e->getMessage(),
            ];
        }
    }

    public function importExcel(Request $request)
    {
        try{
            // return $request;
            // Excel::import(new StudentImport(), $request->file);
            $import = new StudentImport;
            $import->import($request->file);

            return $import->failures();
            
            // if($import->failures()->isNotEmpty()){
            //     return [
            //         'data' => $import->failures(),
            //     ];
            // }

            return 'success';
        }catch(Exception $e){
            return $e->getMessage();
        }
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
        try{
            $voter = Student::find($id);
            $request['status'] = $request->active;
            $voter->update($request->toArray());
            return [
                'data' => $voter,
                'type' => 'success',
                'message' => 'Voter successfully updated....',
            ];
        }catch(Exception $e) {
            return [
                'data' => $request,
                'type' => 'error',
                'message' => $e->getMessage(),
            ];
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            $voter = Student::destroy($id);
            return [
                'data' => $voter,
                'type' => 'success',
                'message' => 'Voter successfully removed....',
            ];
        }catch(Exception $e) {
            return [
                'data' => $voter,
                'type' => 'error',
                'message' => $e->getMessage(),
            ];
        }
    }
}

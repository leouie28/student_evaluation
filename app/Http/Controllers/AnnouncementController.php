<?php

namespace App\Http\Controllers;

use App\Filters\Filter;
use App\Models\Announcement;
use Exception;
use Illuminate\Http\Request;

class AnnouncementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Announcement::class;
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
            $request['maker'] = auth()->guard('admin')->user()->id;
            $announce = Announcement::create($request->toArray());
            return [
                'data' => $announce,
                'type' => 'success',
                'message' => 'Announcement successfully added...',
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
            $announce = Announcement::find($id);
            $announce->update($request->toArray());
            return [
                'data' => $announce,
                'type' => 'success',
                'message' => 'Announcement successfully updated....',
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
            $announce = Announcement::destroy($id);
            return [
                'data' => $announce,
                'type' => 'success',
                'message' => 'Announcement successfully deleted....',
            ];
        }catch(Exception $e) {
            return [
                'data' => $id,
                'type' => 'error',
                'message' => $e->getMessage(),
            ];
        }
    }
}

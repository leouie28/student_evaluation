<?php

namespace App\Http\Controllers;

use App\Filters\Filter;
use App\Models\Image;
use App\Models\Partylist;
use Exception;
use Illuminate\Http\Request;

class PartylistController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $model = Partylist::class;
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
            $partylist = Partylist::create($request->toArray());
            Image::create([
                'imagable_id' => $partylist->id,
                'imagable_type' => Partylist::class,
                'file_name' => uploadImage($request->image, 'images/partylist/'),
                'path' => 'images/partylist/'
            ]);
            return [
                'data' => $partylist,
                'status' => 200,
                'type' => 'success',
                'message' => 'Partylist successfully added...',
            ];
        }catch(Exception $e){
            return [
                'data' => $request,
                'status' => 500,
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

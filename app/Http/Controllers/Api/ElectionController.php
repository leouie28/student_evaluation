<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Election;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;

class ElectionController extends Controller
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            return Election::where('urlkey', $id)->first();
        }catch(Exception $e) {
            return $e->getMessage();
        }
    }

    public function checkCode(Request $request, $key)
    {
        try{
            // Carbon::now()->toDateTimeString();
            $code = key($request->all());
            $elect = Election::where('urlkey', $key)->first();
            $elect->makeVisible('code');

            if($this->isOpen($elect->opening)) {
                if(!$this->isClose($elect->closing)){
                    if($code==$elect->code){
                        return [
                            'type' => 'success',
                            'text' => 'code matched'
                        ];
                    }else {
                        return [
                            'type' => 'error',
                            'text' => 'Invalid passcode'
                        ];
                    }
                }else {
                    return [
                        'type' => 'error',
                        'text' => 'Election is closed.'
                    ];
                }
            }else {
                return [
                    'type' => 'error',
                    'text' => 'Election is not open.'
                ];
            }
            
        }catch(Exception $e) {
            return $e->getMessage();
        }
    }

    public function isOpen($datetime)
    {
        $now = Carbon::now()->toDateTimeString();
        $open = Carbon::make($datetime)->toDateTimeString();

        if($now>=$open) {
            return true;
        }else {
            return false;
        }
    }

    public function isClose($datetime)
    {
        $now = Carbon::now()->toDateTimeString();
        $close = Carbon::make($datetime)->toDateTimeString();

        if($now>=$close) {
            return true;
        }else {
            return false;
        }
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

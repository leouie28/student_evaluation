<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Candidate;
use App\Models\Election;
use App\Models\Vote;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class VoteController extends Controller
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
        try{
            $voted = Vote::where('student_id', Auth::guard('web')->user()->id)->first();
            if(!$voted) {
                $elect = Election::find($request->id);
                if($this->validateElection($elect->id)) {
                    $raw = array();
                    foreach($request->positions as $position) {
                        if(is_array($position['vote'])) {
                            $raw_arr = array();
                            foreach($position['vote'] as $vote) {
                                $raw_arr[] = Candidate::where('id', $vote)->value('name');
                            }
                            $raw[$position['name']] = $raw_arr;
                        }else {
                            $raw[$position['name']] = Candidate::where('id', $position['vote'])->value('name');
                        }
                    }
                    $votes = Vote::create([
                        'data' => json_encode($raw),
                        'election_id' => $request->id,
                        'student_id' => Auth::guard('web')->user()->id,
                    ]);
                    return $votes;
                }else {
                    return [
                        'data' => $elect,
                        'type' => 'error',
                        'message' => 'Election is closed or not open yet...',
                    ];
                }
            }else {
                return [
                    'data' => $request,
                    'type' => 'error',
                    'message' => 'It seems you already voted...',
                ];
            }
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

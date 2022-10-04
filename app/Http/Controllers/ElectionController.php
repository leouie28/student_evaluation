<?php

namespace App\Http\Controllers;

use App\Filters\Filter;
use App\Models\Candidate;
use App\Models\Election;
use App\Models\ExtractedVote;
use App\Models\Image;
use App\Models\Position;
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
        $model = Election::class;
        return (new Filter($model))->searchable();
    }

    public function getElectionSet($id)
    {
        try{
            $elec = Election::find($id);
            $positions = $elec->positions;

            return [
                'election' => $elec,
                'positions' => $positions
            ];
        }catch(Exception $e){
            return $e->getMessage();
        }
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

    public function storeElectionSet(Request $request)
    {
        try{
            $election = $request->election;
            $positions = $request->positions;
            $elec = Election::where('name', $election['name'])->first();
            if($elec){
                return [
                    'data' => $request,
                    'status' => 400,
                    'type' => 'error',
                    'message' => 'Election name already exist...',
                ];
            }else{
                $elec = Election::create([//Create election
                    'name' => $election['name'],
                    'school_year' => $election['school_year'],
                    'description' => $election['description'],
                    'active' => 1,
                    'date_open' => $election['date_open'],
                    'time_open' => $election['time_open'],
                    'date_close' => $election['date_close'],
                    'time_close' => $election['time_close'],
                    'code' => $election['code'],
                    'urlkey' => generateRandomString(),
                    'maker' => auth()->guard('admin')->user()->id,
                ]);

                if(isset($election['image'])){
                    Image::create([
                        'imagable_id' => $elec->id,
                        'imagable_type' => Election::class,
                        'file_name' => uploadImage($election['image'], 'images/election/'),
                        'path' => '/images/election/',
                    ]);
                }

                foreach($positions as $position) {
                    $pos = Position::create([
                        'name' => $position['name'],
                        'max_vote' => $position['max_vote'],
                        'election_id' => $elec->id,
                    ]);
                    foreach($position['candidate'] as $candidate) {
                        $cand = Candidate::create([
                            'name' => $candidate['name'],
                            'position_id' => $pos->id,
                            'partylist_id' => $candidate['partylist'],
                        ]);

                        if(isset($candidate['image'])){
                            Image::create([
                                'imagable_id' => $cand->id,
                                'imagable_type' => Candidate::class,
                                'file_name' => uploadImage($candidate['image'], 'images/candidate/'),
                                'path' => '/images/candidate/',
                            ]);
                        }
                    }
                }

                return [
                    'data' => $request,
                    'status' => 200,
                    'type' => 'success',
                    'message' => 'Election successfully created...',
                ];
            }
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

    public function result($id)
    {
        try{
            return Election::with('positions')->find($id);
        }catch(Exception $e) {
            return $e->getMessage();
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

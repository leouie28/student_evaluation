<?php

namespace App\Http\Controllers;

use App\Models\Election;
use App\Models\ExtractedVote;
use Carbon\Carbon;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function validateElection($id)
    {
        $now = Carbon::now();
        $elect = Election::find($id);
        if($elect->opening<=$now) {
            if($elect->closing>=$now) {
                return true;
            }else {
                return false;
            }
        }else {
            return false;
        }
    }

    public function extractVote($vote, $position, $candidate, $student)
    {
        $extact = ExtractedVote::create([
            'vote_id' => $vote,
            'position_id' => $position,
            'candidate_id' => $candidate,
            'student_id' => $student
        ]);

        if($extact) return true;

        return false;
    }
}

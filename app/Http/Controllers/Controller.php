<?php

namespace App\Http\Controllers;

use App\Models\Announcement;
use App\Models\Election;
use App\Models\ExtractedVote;
use App\Models\Partylist;
use App\Models\Student;
use Carbon\Carbon;
use Exception;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class Controller extends BaseController
{
  use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

  public function returnBasic($data, $msgType = 'saved', $status = 'success')
  {

    if ($status == 'failed') {
      return [
        'data' => $data,
        'type' => $status,
        'message' => $msgType,
      ];
    }

    return [
      'data' => $data,
      'type' => $status,
      'message' => 'Record successfully ' . $msgType,
    ];
  }

  public function validateElection($id)
  {
    $now = Carbon::now();
    $elect = Election::find($id);
    if ($elect->opening <= $now) {
      if ($elect->closing >= $now) {
        return true;
      } else {
        return false;
      }
    } else {
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

    if ($extact) return true;

    return false;
  }

  public function stat()
  {
    try {
      return [
        'announcements' => Announcement::count(),
        'elections' => Election::count(),
        'voters' => Student::count(),
        'partygroups' => Partylist::count(),
      ];
    } catch (Exception $e) {
      return $e->getMessage();
    }
  }
}

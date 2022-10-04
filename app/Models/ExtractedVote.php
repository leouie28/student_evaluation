<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExtractedVote extends Model
{
    use HasFactory;

    protected $fillable = [
        'vote_id',
        'position_id',
        'candidate_id',
        'student_id',
    ];

    // protected $appends = [
    //     'tally',
    // ];

    // public function getTallyAttribute()
    // {
        
    // }

    // public function tally()
    // {
    //     return $this->position;
    // }

    public function vote()
    {
        return $this->belongsTo(Vote::class);
    }

    public function position()
    {
        return $this->belongsTo(Position::class);
    }

    public function candidate()
    {
        return $this->belongsTo(Candidate::class);
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}

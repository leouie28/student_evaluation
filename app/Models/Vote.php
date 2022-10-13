<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    use HasFactory;

    protected $fillable = [
        'data',
        'election_id',
        'student_id',
    ];

    protected $appends = [
        'voter',
        'voter_id',
        'voter_name',
    ];

    public function getVoterAttribute()
    {
        return $this->student->name;
    }

    public function getVoterNameAttribute()
    {
        return $this->student->name;
    }

    public function getVoterIdAttribute()
    {
        return $this->student->student_id;
    }

    public function election()
    {
        return $this->belongsTo(Election::class);
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function extractedVotes()
    {
        return $this->hasMany(ExtractedVote::class);
    }
}

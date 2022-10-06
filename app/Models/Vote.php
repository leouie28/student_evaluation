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
    ];

    public function getVoterAttribute()
    {
        return $this->student->name;
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

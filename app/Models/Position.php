<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Position extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'max_vote',
        'election_id',
        'sort',
    ];

    protected $with = [
        'candidate'
    ];

    public function election()
    {
        return $this->belongsTo(Election::class);
    }

    public function candidate() {
        return $this->hasMany(Candidate::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Candidate extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'short_description',
        'description',
        'active',
        'position_id',
        'partylist_id',
    ];

    public function position()
    {
        return $this->belongsTo(Position::class);
    }

    public function partylist()
    {
        return $this->belongsTo(Partylist::class);
    }
}

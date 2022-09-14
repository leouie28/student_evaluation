<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Election extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'school_year',
        'description',
        'active',
        'date_open',
        'time_open',
        'date_close',
        'time_close',
        'maker',
    ];

    protected $with = [
        'images'
    ];

    public function images()
    {
        return $this->morphMany(Image::class, 'imagable');
    }

    public function maker()
    {
        return $this->belongsTo(Admin::class, 'maker');
    }

    public function positions()
    {
        return $this->hasMany(Position::class);
    }

    public function candidates()
    {
        return $this->hasMany(Candidate::class);
    }

    public function votes()
    {
        return $this->hasMany(Vote::class);
    }
}

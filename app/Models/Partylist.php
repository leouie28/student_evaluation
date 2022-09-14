<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partylist extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'short_name',
        'description',
        'color_theme',
    ];

    protected $with = [
        'images'
    ];

    public function images()
    {
        return $this->morphMany(Image::class, 'imagable');
    }

    public function candidates()
    {
        return $this->hasMany(Candidate::class);
    }
}

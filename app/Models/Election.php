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
        'code',
        'urlkey',
        'maker',
    ];

    protected $hidden = [
        'code'
    ];

    protected $appends = [
        'image',
        'security',
        'opening',
        'closing',
        'voters_count',
    ];

    public function getVotersCountAttribute() {
        return Student::count();
    }

    public function getSecurityAttribute()
    {
        if($this->code != null) {
            return true;
        }else {
            return false;
        }
    }

    public function getImageAttribute()
    {
        $image = $this->images()->first();
        if($image){
            return $image->path . $image->file_name;
        }else{
            return '/images/system/noimage.png';
        }
    }

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

    public function getOpeningAttribute()
    {
        return $this->date_open . ' ' . $this->time_open;
    }

    public function getClosingAttribute()
    {
        return $this->date_close . ' ' . $this->time_close;
    }
}

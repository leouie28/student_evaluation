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
        'position_id',
        'partylist_id',
    ];

    protected $appends = [
        'image',
        'partylist'
    ];

    public function getImageAttribute()
    {
        $image = $this->images()->first();
        if($image){
            return $image->path . $image->file_name;
        }else{
            return '/images/system/noimage.png';
        }
    }

    public function getPartylistAttribute()
    {
        return $this->partylist_id;
    }

    public function images()
    {
        return $this->morphMany(Image::class, 'imagable');
    }

    public function position()
    {
        return $this->belongsTo(Position::class);
    }

    public function party()
    {
        return $this->belongsTo(Partylist::class);
    }
}

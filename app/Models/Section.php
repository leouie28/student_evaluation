<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
  use HasFactory;

  protected $fillable = [
    'level_id',
    'name',
    'info',
  ];

  protected $appends = [
    'level_name'
  ];

  public function level()
  {
    return $this->belongsTo(Level::class);
  }

  public function subjects()
  {
    return $this->hasMany(Subject::class);
  }

  public function getLevelNameAttribute()
  {
    return $this->level->name;
  }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
  use HasFactory;

  protected $fillable = [
    'grade_id',
    'name',
    'info',
  ];

  public function grade()
  {
    return $this->belongsTo(Grade::class);
  }

  public function subjects()
  {
    return $this->hasMany(Subject::class);
  }
}

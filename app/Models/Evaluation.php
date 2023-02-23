<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluation extends Model
{
  use HasFactory;

  protected $fillable = [
    'subject_id',
    'student_id',
    'indicator_id',
    'remarks',
  ];

  public function subject()
  {
    return $this->belongsTo(Subject::class);
  }

  public function teacher()
  {
    return $this->belongsTo(Teacher::class);
  }

  public function indicator()
  {
    return $this->hasMany(Indicator::class);
  }
}

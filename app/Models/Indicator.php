<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Indicator extends Model
{
  use HasFactory;

  protected $fillable = [
    'evaluation_id',
    'order',
    'type',
  ];

  public function evaluation()
  {
    return $this->belongsTo(Evaluation::class);
  }

  public function students()
  {
    return $this->hasMany(Student::class);
  }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Indicator extends Model
{
  use HasFactory;

  protected $fillable = [
    'year',
    'label',
    'type',
    'order',
  ];

  public function evaluation()
  {
    return $this->hasMany(Evaluation::class);
  }

  public function students()
  {
    return $this->hasMany(Student::class);
  }
}

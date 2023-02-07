<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
  use HasFactory;

  protected $fillable = [
    'section_id',
    'name',
    'info',
  ];

  public function section()
  {
    return $this->belongsTo(Section::class);
  }

  public function evaluations()
  {
    return $this->hasMany(Evaluation::class);
  }
}

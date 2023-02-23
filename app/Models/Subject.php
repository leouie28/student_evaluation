<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
  use HasFactory;

  protected $fillable = [
    'section_id',
    'teacher_id',
    'name',
    'info',
  ];

  protected $appends = [
    'section_name',
    'teacher_name',
  ];

  public function section()
  {
    return $this->belongsTo(Section::class);
  }

  public function teacher()
  {
    return $this->belongsTo(Teacher::class);
  }

  public function evaluations()
  {
    return $this->hasMany(Evaluation::class);
  }

  public function getSectionNameAttribute()
  {
    if ($this->section()->first()) {
      return $this->section()->first()->name;
    }
  }

  public function getTeacherNameAttribute()
  {
    if ($this->teacher()->first()) {
      return $this->teacher()->first()->name;
    }
  }
}

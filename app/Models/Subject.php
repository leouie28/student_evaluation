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
    return $this->section->name;
  }

  public function getTeacherNameAttribute()
  {
    return $this->teacher->name;
  }
}

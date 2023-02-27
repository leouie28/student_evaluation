<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluation extends Model
{
  use HasFactory;

  protected $fillable = [
    'subject_id'
  ];

  protected $with = [
    'section'
  ];

  protected $appends = [
    // 'department_name',
    // 'level_level',
    // 'section_name',
    'subject_name',
  ];

  public function subject()
  {
    return $this->belongsTo(Subject::class);
  }

  public function section()
  {
    return $this->hasOneThrough(Section::class, Subject::class, 'evaluation_id', 'section_id', 'id', 'id');
  }

  public function teacher()
  {
    return $this->belongsTo(Teacher::class);
  }

  public function student()
  {
    return $this->belongsTo(student::class);
  }

  public function indicator()
  {
    return $this->hasMany(Indicator::class);
  }

  public function getSubjectNameAttribute()
  {
    if ($this->subject()->first()) {
      return $this->subject()->first()->name;
    }
  }
}

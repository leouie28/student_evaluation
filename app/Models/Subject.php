<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Subject extends Model
{
  use HasFactory;

  protected $fillable = [
    'level_id',
    'teacher_id',
    'name',
    'info',
  ];

  protected $appends = [
    'level_name',
    'teacher_name',
    'department_name',
    'students_count'
  ];

  public function students()
  {
    return $this->belongsToMany(Student::class);
  }

  public function level()
  {
    return $this->belongsTo(Level::class);
  }

  public function teacher()
  {
    return $this->belongsTo(Teacher::class);
  }

  public function evaluations()
  {
    return $this->hasMany(Evaluation::class);
  }

  public function scopeMySubjects($query, $id)
  {
    return $query->where('teacher_id', $id);
  }

  public function getLevelNameAttribute()
  {
    if ($this->level()->first()) {
      return $this->level()->first()->name;
    }
  }

  public function getTeacherNameAttribute()
  {
    if ($this->teacher()->first()) {
      return $this->teacher()->first()->name;
    }
  }

  public function getDepartmentNameAttribute()
  {
    return $this->level()->first()->department_name;
  }

  public function getStudentsCountAttribute()
  {
    return $this->students()->count();
  }
}

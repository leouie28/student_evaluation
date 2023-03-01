<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
  use HasFactory;

  protected $fillable = [
    'student_id',
    'user_id',
    'first_name',
    'last_name',
    'address',
    'birthday',
    'contact_number',
    'current_grade_level',
    'current_section',
    'image',
  ];

  protected $appends = [
    'gender',
    'level_name',
    'section_name',
  ];

  public function user()
  {
    return $this->belongsTo(User::class);
  }

  public function subjects()
  {
    return $this->belongsToMany(Subject::class);
  }

  public function level()
  {
    return $this->belongsTo(Level::class, 'current_grade_level');
  }

  public function section()
  {
    return $this->belongsTo(Section::class, 'current_section');
  }

  public function indicators()
  {
    return $this->hasMany(Indicator::class);
  }

  public function getGenderAttribute()
  {
    return $this->user()->first()->gender;
  }

  public function getLevelNameAttribute()
  {
    return $this->level()->first()->name;
  }

  public function getSectionNameAttribute()
  {
    return $this->section()->first()->name;
  }
}

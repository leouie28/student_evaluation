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
  ];

  public function user()
  {
    return $this->belongsTo(User::class);
  }

  public function indicators()
  {
    return $this->hasMany(Indicator::class);
  }

  public function getGenderAttribute()
  {
    return $this->user->gender;
  }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teacher extends Model
{
  use HasFactory;

  protected $fillable = [
    'user_id',
    'name',
    'contact_number',
    'address',
    'birthday',
    'image',
  ];

  protected $appends = [
    'gender'
  ];

  public function user()
  {
    return $this->belongsTo(User::class);
  }

  public function subjects()
  {
    return $this->hasMany(Subject::class);
  }

  public function getGenderAttribute()
  {
    return $this->user()->first()->gender;
  }
}

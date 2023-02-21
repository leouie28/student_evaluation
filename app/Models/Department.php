<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
  use HasFactory;

  protected $fillable = [
    'name',
    'info'
  ];

  public function teachers()
  {
    return $this->hasMany(Teacher::class);
  }

  public function level()
  {
    return $this->hasMany(Level::class);
  }
}

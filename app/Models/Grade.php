<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Grade extends Model
{
  use HasFactory;

  protected $fillable = [
    'department_id',
    'name',
    'info'
  ];

  public function department()
  {
    return $this->belongsTo(Department::class);
  }

  public function sections()
  {
    return $this->hasMany(Section::class);
  }
}

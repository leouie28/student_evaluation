<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use function PHPUnit\Framework\returnSelf;

class Level extends Model
{
  use HasFactory;

  protected $fillable = [
    'department_id',
    'name',
    'info'
  ];

  protected $appends = [
    'department_name'
  ];

  public function department()
  {
    return $this->belongsTo(Department::class);
  }

  public function subjects()
  {
    return $this->hasMany(Subject::class);
  }

  public function sections()
  {
    return $this->hasMany(Section::class);
  }

  public function getDepartmentNameAttribute()
  {
    if ($this->department()->first()) {
      return $this->department()->first()->name;
    }
  }
}

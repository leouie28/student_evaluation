<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
// use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Notifications\Notifiable;
// use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
  use HasFactory, Notifiable;

  /**
   * The attributes that are mass assignable.
   *
   * @var array<int, string>
   */
  protected $fillable = [
    'username',
    'password',
    'gender',
    'role_id',
  ];

  protected $with = [
    // 'profile'
  ];

  protected $appends = [
    // 'hashed'
    'profile'
  ];

  /**
   * The attributes that should be hidden for serialization.
   *
   * @var array<int, string>
   */
  protected $hidden = [
    'password',
    'remember_token',
  ];

  /**
   * The attributes that should be cast.
   *
   * @var array<string, string>
   */
  protected $casts = [
    'email_verified_at' => 'datetime',
  ];

  // public function profile()
  // {
  //   return $this->teacher();
  //   // if ($this->role_id === 3) {
  //   // }
  // }

  public function role()
  {
    return $this->belongsTo(Role::class);
  }

  public function student()
  {
    return $this->hasOne(Student::class);
  }

  public function teacher()
  {
    return $this->hasOne(Teacher::class);
  }

  public function isAdmin(): bool
  {
    if ($this->role_id == 1) return true;
    return false;
  }

  public function isTeacher(): bool
  {
    if ($this->role_id == 3) return true;
    return false;
  }

  public function scopeStudents($query)
  {
    return $query->whereRoleId(4);
  }

  public function getProfileAttribute()
  {
    if ($this->teacher()) {
      return $this->teacher()->first();
    }
  }
}

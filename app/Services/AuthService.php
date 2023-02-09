<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthService
{
  public function loginUser($creds)
  {
    if (Auth::guard('web')->attempt($creds->toArray())) {
      $auth = User::with('role')->whereId(Auth::user()->id)->first();

      return $auth;
    }

    return false;
  }
}

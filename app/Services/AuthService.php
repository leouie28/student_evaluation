<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthService
{
  public function loginUser($creds)
  {

    if ($user = User::where('username', $creds->username)->first()) {
      if (Hash::check($creds->password, $user->password)) {
        return $user;
      }
      return false;
    }

    return false;
  }
}

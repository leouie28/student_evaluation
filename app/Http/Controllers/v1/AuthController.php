<?php

namespace App\Http\Controllers\v1;

use App\Exceptions\AuthException;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Services\AuthService;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
  private AuthService $authService;

  public function __construct(AuthService $authService)
  {
    $this->authService = $authService;
  }

  public function checkAuth() {

    if($user = Auth::user()) {
      return $user;
    }
     
    throw new AuthenticationException;

  }

  public function login(LoginRequest $request)
  {

    if (!$user = $this->authService->loginUser($request)) {
      throw new AuthenticationException;
    }

    return response($user);
  }
}

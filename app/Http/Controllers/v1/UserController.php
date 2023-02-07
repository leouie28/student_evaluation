<?php

namespace App\Http\Controllers\v1;

use App\Http\Controllers\Controller;
use App\Models\Teacher;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
  public function index()
  {
    return response(User::with('role')->get());
  }

  public function me()
  {
    return response(Auth::user());
  }

  public function createAdmin(Request $request)
  {
    $payload = $request->validate([
      'username' => ['required', 'unique:users'],
      'password' => ['required'],
      'gender' => ['nullable'],
      'role_id' => ['required', 'integer']
    ]);

    $payload['password'] = Hash::make($request->password);
    $user = User::create($payload);

    return response($user);
  }

  public function createTeacher(Request $request)
  {
    $payload = $request->validate([
      'username' => ['required', 'unique:users'],
      'password' => ['required'],
      'gender' => ['nullable'],
      'role_id' => ['required', 'integer'],
      'name' => ['required'],
      'birthday' => ['nullable']
    ]);

    $payload = $payload;

    $payload['password'] = Hash::make($request->password);
    $user = User::create($payload);

    $user->teacher()->save(new Teacher(Arr::only($payload, ['name', 'birthday'])));

    return response($user);
  }

  public function createStudent(Request $request)
  {
    
  }

  public function createManyStudent(Request $request)
  {
    
  }
}

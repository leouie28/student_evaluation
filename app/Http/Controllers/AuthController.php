<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try{

            // return auth()->guard('admin')->user();
            // return $request;
            
            $credentials = $request->validate([
                'school_id' => ['required'],
                'password' => ['required'],
            ]);

            if(Auth::guard('web')->attempt($credentials)){
                $request->session()->regenerate();

                return [
                    'user' => auth()->guard('web')->user(),
                    'role' => 'student'
                ];
            }elseif(Auth::guard('admin')->attempt($credentials)){
                $request->session()->regenerate();

                return [
                    'user' => auth()->guard('admin')->user(),
                    'role' => 'admin'
                ];
            }else{
                return [
                    'message' => 'Incorrect credentials'
                ];
            }

            // $admin = auth()->guard('admin')->user();
            
            // $request->session()->regenerate();

            // return [
            //     'user' => auth()->guard('admin')->user(),
            //     'role' => 'admin'
            // ];
            // return response(['user' => auth()->guard('admin')->user(), 'role' => 'admin']);

        }catch(Exception $e){
            return [
                'message' => $e->getMessage()
            ];
        }
    }

    public function checkAuth()
    {
        $auth = Auth::guard('web')->check();
        if($auth){
            $check = 2;
        }else{
            $auth = Auth::guard('admin')->check();
            if($auth){
                $check = 1;
            }else{
                $check = 0;
            }
        }

        return $check;
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();

        return "success";
    }
}

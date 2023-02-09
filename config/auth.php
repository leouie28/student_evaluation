<?php

return [

  'defaults' => [
    'guard' => 'web',
    'password' => 'users'
  ],


  'guards' => [
    'web' => [
      'driver' => 'session',
      'provider' => 'users'
    ]
  ],


  'providers' => [
    'users' => [
      'driver' => 'eloquent',
      'model' => App\Models\User::class
    ]
  ],


  'passwords' => [
    'users' => [
      'providers' => 'users',
      'table' => 'password_resets',
      'expire' => 60,
      'throttle' => 60
    ]
  ],

  'password_timeout' => 10800,

];

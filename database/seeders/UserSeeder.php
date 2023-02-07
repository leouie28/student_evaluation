<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    User::create([
      'username' => 'admin',
      'password' => Hash::make('123'),
      'role_id' => 1,
    ]);
    User::create([
      'username' => 'coordinator',
      'password' => Hash::make('123'),
      'role_id' => 2,
    ]);
    User::create([
      'username' => 'teacher',
      'password' => Hash::make('123'),
      'role_id' => 3,
    ]);
    User::create([
      'username' => 'student',
      'password' => Hash::make('123'),
      'role_id' => 4,
    ]);
  }
}

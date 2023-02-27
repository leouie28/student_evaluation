<?php

namespace Database\Seeders;

use App\Models\Student;
use App\Models\Teacher;
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
    $admin = User::create([
      'username' => 'admin',
      'password' => Hash::make('123'),
      'role_id' => 1,
    ]);
    $coordinator = User::create([
      'username' => 'coordinator',
      'password' => Hash::make('123'),
      'role_id' => 2,
    ]);

    $teacher = User::create([
      'username' => 'teacher',
      'password' => Hash::make('123'),
      'role_id' => 3,
    ]);
    $teacher->teacher()->save(new Teacher([
      'name' => 'Mark Leouie',
      'contact_number' => '09776994752',
      'address' => 'Test Address',
      'birthday' => '1998-02-10'
    ]));

    $student = User::create([
      'username' => 'student',
      'password' => Hash::make('123'),
      'role_id' => 4,
    ]);
    $student->student()->save(new Student([
      'student_id' => $student->username,
      'first_name' => 'First',
      'last_name' => 'Last',
      'address' => 'Test Address',
      'birthday' => '1998-02-10',
      'contact_number' => '09776994752',
      'current_grade_level' => 1,
      'current_section' => 1
    ]));
  }
}

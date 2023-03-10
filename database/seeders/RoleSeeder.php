<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $roles = ['admin', 'coordinator', 'teacher', 'student'];

    foreach ($roles as $role) {
      Role::create([
        'name' => $role,
        'hashed' => Str::random(20)
      ]);
    }
  }
}

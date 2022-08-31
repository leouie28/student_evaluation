<?php

namespace Database\Seeders;

use App\Models\Student;
use Illuminate\Database\Seeder;

class Studentseeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Student::create([
            'name' => 'Mark Leouie Tabique',
            'school_id' => '123456789',
            'password' => bcrypt('123'),
        ]);
    }
}

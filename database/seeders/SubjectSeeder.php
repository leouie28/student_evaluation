<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\Level;
use App\Models\Section;
use App\Models\Subject;
use Illuminate\Database\Seeder;

class SubjectSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $dept = Department::create([
      'name' => 'Preschool'
    ]);

    $level = Level::create([
      'department_id' => $dept->id,
      'name' => 'Kender',
    ]);

    $section = Section::create([
      'level_id' => $level->id,
      'name' => 'Kender',
    ]);

    $subject1 = Subject::create([
      'section_id' => $section->id,
      'teacher_id' => 1,
      'name' => 'Math'
    ]);

    $subject2 = Subject::create([
      'section_id' => $section->id,
      'teacher_id' => 1,
      'name' => 'English'
    ]);
  }
}

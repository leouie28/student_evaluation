<?php

namespace Database\Seeders;

use App\Models\Indicator;
use Illuminate\Database\Seeder;

class IndicatorSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run()
  {
    $counter = 1;
    $questionaire = ['Student able to read', 'Student able to write', 'Student able to count', 'Student able to answer', 'Remarks'];
    foreach ($questionaire as $question) {
      Indicator::create([
        'year' => '2023',
        'label' => $question,
        'type' => $question == 'remarks' ? 'text_field' : 'radio_button',
        'order' => $counter++,
      ]);
    }
  }
}

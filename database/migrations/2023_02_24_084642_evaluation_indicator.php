<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class EvaluationIndicator extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('evaluation_indicator', function (Blueprint $table) {
      $table->id();
      $table->foreignId('evaluation_id')->constrained();
      $table->foreignId('indicator_id')->constrained();
      $table->string('remarks')->nullable();
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    //
  }
}

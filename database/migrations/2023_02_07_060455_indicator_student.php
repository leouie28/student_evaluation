<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class IndicatorStudent extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('indicator_student', function (Blueprint $table) {
      $table->id();
      $table->foreignId('indicator_id')->constrained();
      $table->foreignId('student_id')->constrained();
      $table->integer('score')->nullable();
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

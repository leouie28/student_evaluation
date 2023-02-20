<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('students', function (Blueprint $table) {
      $table->id();
      $table->string('student_id')->unique();
      $table->foreignId('user_id')->constrained();
      $table->string('first_name');
      $table->string('last_name');
      $table->string('address');
      $table->date('birthday');
      $table->string('contact_number')->nullable();
      $table->integer('current_grade_level')->nullable();
      $table->integer('current_section')->nullable();
      $table->text('image')->nullable();
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
    Schema::dropIfExists('students');
  }
}

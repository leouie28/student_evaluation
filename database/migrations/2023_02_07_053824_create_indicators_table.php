<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateIndicatorsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('indicators', function (Blueprint $table) {
      $table->id();
      $table->string('year');
      $table->string('label');
      $table->string('type')->default('radio_button'); // radio_button or text_field
      $table->integer('order')->nullable();
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
    Schema::dropIfExists('indicators');
  }
}

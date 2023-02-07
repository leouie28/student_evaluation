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
      $table->foreignId('evaluation_id')->constrained();
      $table->integer('order')->nullable();
      $table->string('type')->default('score'); // score or remarks
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

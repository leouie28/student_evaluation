<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'imagable_id',
        'imagable_type',
        'file_name',
        'path',
    ];

    public function imagable()
    {
        return $this->morphTo();
    }
}

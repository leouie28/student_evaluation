<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Response extends Model
{
    use HasFactory;

    protected $fillable = [
        'evaluation_id',
        'student_id',
        'indicator_id',
        'value'
    ];

    public function evaluation()
    {
        return $this->belongsTo(Evaluation::class);
    }

    public function indicator()
    {
        return $this->belongsTo(Indicator::class);
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}

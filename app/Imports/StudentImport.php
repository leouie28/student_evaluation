<?php

namespace App\Imports;

use App\Models\Student;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\SkipsErrors;
use Maatwebsite\Excel\Concerns\SkipsFailures;
use Maatwebsite\Excel\Concerns\SkipsOnError;
use Maatwebsite\Excel\Concerns\SkipsOnFailure;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithValidation;

class StudentImport implements 
ToModel, 
SkipsOnError, 
WithValidation, 
SkipsOnFailure,
WithBatchInserts
{
    use Importable, SkipsErrors, SkipsFailures;
    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {
        return new Student([
            'student_id' => $row[0],
            'name' => $row[1],
            'password' => bcrypt(123)
        ]);
    }

    public function rules(): array
    {
        return [
            '0' => ['unique:students,student_id'],
        ];
    }

    public function batchSize(): int
    {
        return 1000;
    }
}

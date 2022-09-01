<?php

namespace App\Filters;

use App\Models\Student;

class Filter
{

    public function __construct($model)
    {
        $this->model = $model::query();
    }

    public function searchable()
    {
        // $this->searchColumns();
        // $this->sortBy();
        // $this->orderCount();
        $per_page = Request()->per_page;
        if ($per_page == '-1' || !isset(Request()->per_page)) return $this->model->paginate($this->model->count());
        return $this->model->paginate($per_page);
    }

    public function searchColumns()
    {
        $searchable = ['name'];
        if (Request()->keyword && Request()->keyword != "null") {
        $keyword = Request()->keyword;
        foreach ($searchable as $column) {
            if ($column == 'name') {
            $this->model->orWhere($column, 'like', "%" . $keyword . "%");
            }
        }
        }
    }
}
<?php

namespace App\Filters;

use Illuminate\Support\Facades\Schema;

class Filter
{

    public $model;

    public function __construct($model)
    {
        $this->model = $model::query();
    }

    public function searchable($table)
    {
        $this->searchColumns($table);
        $this->sortBy();
        // $this->filter();
        // $this->orderCount();
        $per_page = Request()->per_page;
        if ($per_page == '-1' || !isset(Request()->per_page)) return $this->model->paginate($this->model->count());
        return $this->model->paginate($per_page);
    }

    public function searchColumns($table)
    {
        $searchable = Schema::getColumnListing($table);
        if (Request()->keyword) {
            $keyword = Request()->keyword;
            foreach ($searchable as $column) {
                $this->model->orWhere($column, 'like', "%" . $keyword . "%");
                // if ($column == 'id') {
                //     $this->model->orWhere($column, 'like', "%" . $keyword . "%");
                // }else {
                //     $this->model->orWhere($column, 'like', "%" . $keyword . "%");
                // }
            }
        }
    }

    public function filter()
    {
        
    }

    public function sortBy()
    {
        if($sort = Request()->sortBy)
        {
            $keys = explode("/", $sort);
            $this->model->orderBy($keys[0], $keys[1]);
        }else{
            $this->model->orderBy('id', 'desc');
        }
    }
}
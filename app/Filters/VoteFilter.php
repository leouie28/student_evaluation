<?php

namespace App\Filters;

class VoteFilter
{

    public function __construct($model)
    {
        $this->model = $model::query();
    }

    public function searchable($id)
    {
        // $this->searchColumns();
        $this->sortBy();
        // $this->orderCount();
        $per_page = Request()->per_page;
        if ($per_page == '-1' || !isset(Request()->per_page)) return $this->model->paginate($this->model->count());
        return $this->model->where('election_id', $id)->paginate($per_page);
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

    public function sortBy()
    {
        if(Request()->sort && Request()->sort != "null")
        {
            
        }else{
            $this->model->orderBy('id', 'desc');
        }
    }
}
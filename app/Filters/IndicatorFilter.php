<?php

namespace App\Filters;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class IndicatorFilter
{
  public $model;

  public function __construct($model)
  {
    $this->model = $model::query();
  }

  public function searchable($table)
  {
    // $this->searchColumns($table);
    $this->sortBy();
    // // $this->filter();
    // // $this->orderCount();
    $per_page = Request()->per_page;

    if ($per_page == '-1' || !isset(Request()->per_page)) return DB::table($table)->select('year', 'created_at', DB::raw('count(*) as indicator_number'))->groupBy('year')->get();
    // $res = $this->model->paginate(2);

    return DB::table($table)->groupBy('year')->select('year', 'created_at', DB::raw('count(*) as indicator_number'))->paginate($per_page);
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
    if ($sort = Request()->sortBy) {
      $keys = explode("/", $sort);
      $this->model->orderBy($keys[0], $keys[1]);
    } else {
      $this->model->orderBy('id', 'desc');
    }
  }
}

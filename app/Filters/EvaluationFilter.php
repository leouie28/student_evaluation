<?php

namespace App\Filters;

use App\Models\Evaluation;
use App\Models\Indicator;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class EvaluationFilter
{

  public function __construct()
  {
    $this->model = Indicator::query();
  }

  public function searchable($table)
  {

    if ($first = $this->getFirstEnty()) {
      $first = Carbon::parse($first)->month;

      return $first;
    }

    return Carbon::now()->month;

    // $this->searchColumns($table);
    $this->sortBy();
    // // $this->filter();
    // // $this->orderCount();
    $per_page = Request()->per_page;

    if ($per_page == '-1' || !isset(Request()->per_page)) return DB::table($table)->select('year', 'created_at', DB::raw('count(*) as indicator_number'))->groupBy('year')->get();
    // $res = $this->model->paginate(2);

    return DB::table($table)->groupBy('year')->select('year', 'created_at', DB::raw('count(*) as indicator_number'))->paginate($per_page);
  }

  public function getFirstEnty()
  {
    if (Evaluation::exists()) {
      return Evaluation::orderBy('created_at', 'asc')->first()->value('created_at');
    }
    return false;
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

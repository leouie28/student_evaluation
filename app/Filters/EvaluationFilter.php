<?php

namespace App\Filters;

use App\Models\Evaluation;
use App\Models\Indicator;
use App\Models\Subject;
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

    $now = Carbon::now();

    return DB::table($table)->groupBy('year')->select('id', 'created_at', DB::raw('count(id) as evaluation_number'))->paginate(15);

    return Subject::whereHas('evaluations', function ($q) use ($now) {
      $q->whereMonth('created_at', $now);
    })->paginate(15);

    // $this->searchColumns($table);
    // $this->sortBy();
    // // $this->filter();
    // // $this->orderCount();
    $per_page = Request()->per_page;

    if ($per_page == '-1' || !isset(Request()->per_page)) return DB::table($table)->select('id', 'created_at', DB::raw('count(id) as evaluation_number'))->groupBy('subject_id')->get();
    // $res = $this->model->paginate(2);

    return DB::table($table)->groupBy('year')->select('id', 'created_at', DB::raw('count(id) as evaluation_number'))->paginate($per_page);
  }

  public function getFirstEnty()
  {
    if (Evaluation::exists()) { //tochange
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

<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TestController extends Controller
{
    public function test() {
        $data = [
            'results' => 'dati su test controller'
        ];
        return response()->json($data);
    }
}

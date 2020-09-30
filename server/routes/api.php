<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('books', 'App\Http\Controllers\BookController@index');
Route::get('books/{id}', 'App\Http\Controllers\BookController@show');
Route::post('books', 'App\Http\Controllers\BookController@store');
Route::put('books/{id}', 'App\Http\Controllers\BookController@update');
Route::delete('books/{id}', 'App\Http\Controllers\BookController@delete');

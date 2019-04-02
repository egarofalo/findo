<?php

use Illuminate\Http\Request;

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

/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/

Route::get('movies', 'MovieController@index')->name('movies');
Route::get('people', 'PersonController@index')->name('people');
Route::get('movies/{movie}', 'MovieController@show')->name('movie');
Route::get('people/{person}', 'PersonController@show')->name('person');

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');

    Route::middleware('auth:api')->group(function () {
        Route::get('logout', 'AuthController@logout');
        Route::get('user', 'AuthController@user');
    });
});

Route::middleware('auth:api')->group(function () {
    Route::post('movies', 'MovieController@store');
    Route::post('people', 'PersonController@store');
    Route::put('movies/{movie}', 'MovieController@update');
    Route::put('people/{person}', 'PersonController@update');
    Route::delete('movies/{movie}', 'MovieController@destroy');
    Route::delete('people/{person}', 'PersonController@destroy');
});

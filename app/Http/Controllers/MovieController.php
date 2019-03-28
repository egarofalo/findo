<?php

namespace App\Http\Controllers;

use App\Movie;
use Illuminate\Http\Request;
use App\Http\Requests\StoreMovieRequest;
use App\Http\Requests\UpdateMovieRequest;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Movie::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreMovieRequest $request)
    {
        // Get the validated data
        $data = $request->validated();
        // Store the movie
        $movie = Movie::create([
            'release_year' => $data['release_year'],
            'title' => $data['title'],
        ]);
        // Attach casting
        $movie->casting()->sync($data['casting']);
        // Attach directors
        $movie->directors()->sync($data['directors']);
        // Attach producers
        $movie->producers()->sync($data['producers']);
        // Return the response
        return response()->json($movie, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function show(Movie $movie)
    {
        return $movie->load(['casting', 'directors', 'producers']);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateMovieRequest $request, Movie $movie)
    {
        // Get the validated data
        $data = $request->validated();
        // Update the movie
        $movie->update([
            'release_year' => $data['release_year'],
            'title' => $data['title'],
        ]);
        // Attach casting
        $movie->casting()->sync($data['casting']);
        // Attach directors
        $movie->directors()->sync($data['directors']);
        // Attach producers
        $movie->producers()->sync($data['producers']);
        // Return the response
        return response()->json($movie, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Movie  $movie
     * @return \Illuminate\Http\Response
     */
    public function destroy(Movie $movie)
    {
        $movie->casting()->detach();
        $movie->directors()->detach();
        $movie->producers()->detach();
        $movie->delete();

        return response()->json(null, 204);
    }
}

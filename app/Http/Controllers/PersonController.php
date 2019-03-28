<?php

namespace App\Http\Controllers;

use App\Person;
use Illuminate\Http\Request;
use App\Http\Requests\StorePersonRequest;
use App\Http\Requests\UpdatePersonRequest;

class PersonController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Person::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorePersonRequest $request)
    {
        // Get the validated data
        $data = $request->validated();
        // Store the person
        $person = Person::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
        ]);
        // Attach movies_as_actor_actress
        $data['movies_as_actor_actress'] = !empty($data['movies_as_actor_actress']) ? $data['movies_as_actor_actress'] : [];
        $person->moviesAsActorActress()->sync($data['movies_as_actor_actress']);
        // Attach movies_as_director
        $data['movies_as_director'] = !empty($data['movies_as_director']) ? $data['movies_as_director'] : [];
        $person->moviesAsDirector()->sync($data['movies_as_director']);
        // Attach movies_as_producers
        $data['movies_as_producer'] = !empty($data['movies_as_producer']) ? $data['movies_as_producer'] : [];
        $person->moviesAsProducer()->sync($data['movies_as_producer']);
        // Return the response
        return response()->json($person, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function show(Person $person)
    {
        return $person->load(['moviesAsActorActress', 'moviesAsDirector', 'moviesAsProducer']);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatePersonRequest $request, Person $person)
    {
        // Get the validated data
        $data = $request->validated();
        // Update the person
        $person->update([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
        ]);
        // Attach movies_as_actor_actress
        $data['movies_as_actor_actress'] = !empty($data['movies_as_actor_actress']) ? $data['movies_as_actor_actress'] : [];
        $person->moviesAsActorActress()->sync($data['movies_as_actor_actress']);
        // Attach movies_as_director
        $data['movies_as_director'] = !empty($data['movies_as_director']) ? $data['movies_as_director'] : [];
        $person->moviesAsDirector()->sync($data['movies_as_director']);
        // Attach movies_as_producers
        $data['movies_as_producer'] = !empty($data['movies_as_producer']) ? $data['movies_as_producer'] : [];
        $person->moviesAsProducer()->sync($data['movies_as_producer']);
        // Return the response
        return response()->json($person, 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Person  $person
     * @return \Illuminate\Http\Response
     */
    public function destroy(Person $person)
    {
        $person->moviesAsActorActress()->detach();
        $person->moviesAsDirector()->detach();
        $person->moviesAsProducer()->detach();
        $person->delete();

        return response()->json(null, 204);
    }
}

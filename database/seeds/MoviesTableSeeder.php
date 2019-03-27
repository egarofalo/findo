<?php

use Illuminate\Database\Seeder;

class MoviesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = factory(App\Movie::class, 15)->create();
        $persons = App\Person::all();
        // Set casting, directors and producers for each movie
        $movies->each(function (App\Movie $movie) use ($persons) {
            $movie->casting()->sync($persons->random(random_int(4, 8)));
            $movie->directors()->sync($persons->random(random_int(1, 2)));
            $movie->producers()->sync($persons->random(random_int(2, 3)));
        });
    }
}

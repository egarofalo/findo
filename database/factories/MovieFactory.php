<?php

use Faker\Generator as Faker;

$factory->define(App\Movie::class, function (Faker $faker) {
    return [
        'title' => $faker->sentence(random_int(2, 8)),
        'release_year' => $faker->year(),
    ];
});

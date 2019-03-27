<?php

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\User::class, function (Faker $faker) {
    return [
        'name' => 'Edgardo Garofalo',
        'email' => 'egarofalo83@gmail.com',
        'password' => '$2y$10$Qswq7eN5Mh5rXJQO5q3lIeOfvBs9OiZRBxdXdZrwNDq337DEPvwnG', // 123456
        'remember_token' => str_random(10),
    ];
});

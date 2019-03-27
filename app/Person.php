<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    public $timestamps = false;

    protected $fillable = ['fisrt_name', 'last_name', 'aliases'];

    public function moviesAsActorActress()
    {
        return $this->belongsToMany(Movie::class, 'casting');
    }

    public function moviesAsDirector()
    {
        return $this->belongsToMany(Movie::class, 'directors');
    }

    public function moviesAsProducer()
    {
        return $this->belongsToMany(Movie::class, 'producers');
    }
}

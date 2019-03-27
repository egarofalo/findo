<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    public $timestamps = false;

    protected $fillable = ['title', 'release_year'];

    public function casting()
    {
        return $this->belongsToMany(Person::class, 'casting');
    }

    public function directors()
    {
        return $this->belongsToMany(Person::class, 'directors');
    }

    public function producers()
    {
        return $this->belongsToMany(Person::class, 'producers');
    }
}

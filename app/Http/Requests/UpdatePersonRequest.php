<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePersonRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'first_name' => 'required|min:3|max:255',
            'last_name' => 'required|min:3|max:255',
            'movies_as_actor_actress' => 'array',
            'movies_as_actor_actress.*' => 'integer|exists:movies,id',
            'movies_as_director' => 'array',
            'movies_as_director.*' => 'integer|exists:movies,id',
            'movies_as_producer' => 'array',
            'movies_as_producer.*' => 'integer|exists:movies,id',
        ];
    }
}

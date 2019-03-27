<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateMovieRequest extends FormRequest
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
            'title' => 'required|min:3|max:255',
            'release_year' => 'required|date_format:Y|after_or_equal:1900|before_or_equal:' . date('Y'),
            'casting' => 'required|array',
            'casting.*' => 'integer|exists:people,id',
        ];
    }
}

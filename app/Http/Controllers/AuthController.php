<?php

namespace App\Http\Controllers;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Signup into the api.
     */
    public function signup(SignupRequest $request)
    {
        // Get the validated data
        $data = $request->validated();
        // Save the user
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
        // Send response
        return response()->json([
            'message' => "User successfully created user! You must use the email {$user->email} to login into the api.",
        ], 201);
    }

    /**
     * Login into the api.
     * This method generates the access token nedded to login into the api.
     */
    public function login(LoginRequest $request)
    {
        // Get the validated credentials
        $credentials = $request->validated();
        // Authenticate the user
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Invalid credentials'
            ], 401);
        }
        $user = $request->user();
        // Create the token for the given user
        $personalAccessTokenResult = $user->createToken('Personal Access Token');
        $token = $personalAccessTokenResult->token;
        if ($request->remember_me) {
            $token->expires_at = Carbon::now()->addWeeks(4);
        }
        // Store the token into the oauth_access_tokens table
        $token->save();
        // Send response
        return response()->json([
            'access_token' => $personalAccessTokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => Carbon::parse($token->expires_at)->toDateTimeString(),
        ]);
    }

    /**
     * Logout and revoke the access token.
     */
    public function logout(Request $request)
    {
        $request->user()->token()->revoke();

        return response()->json([
            'message' => 'Successfully logged out',
        ]);
    }

    /**
     * Get the user.
     */
    public function user(Request $request)
    {
        return response()->json($request->user());
    }
}

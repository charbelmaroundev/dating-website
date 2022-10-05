<?php

namespace App\Http\Controllers;

// use Illuminate\Support\Facades\Auth;
use Auth;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    public function register(Request $request) {
        $first_name = $request->first_name;
        $last_name = $request->last_name;
        $username = $request->username;
        $gender = $request->gender;
        $intersted_gender = $request->intersted_gender;
        $location = $request->location;
        $password = $request->password;    
        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'username' => $request->username,
            'gender' => $request->gender,
            'intersted_gender' => $request->intersted_gender,
            'location' => $request->location,
            'password' => Hash::make($request->password),
        ]);
        return response()->json([
            'status' => '200',
            'message' => 'Account created',
        ]);
    }

    public function login(){
        $credentials = request(['username', 'password']);
 
        if (! $token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

    public function me()
    {
        return response()->json(auth()->user());
    }

    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }}

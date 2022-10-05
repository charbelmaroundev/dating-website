<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

Route::group(["prefix"=> "v0.1"], function(){
    Route::group(["middleware" => "auth:api"], function(){
        Route::post("/me", [AuthController::class, "me"])->name("me");
    });
    Route::post("/login", [AuthController::class, "login"])->name("login");
});









// auth:api

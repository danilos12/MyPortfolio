<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/




// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');


// Route::get('/', function () {
//     return Inertia::render('Intro');
// })->name('intros');
// Route::get('/who', function () {
//     return Inertia::render('About');
// })->name('whoami');
// Route::get('/contact', function () {
//     return Inertia::render('Contact');
// })->name('contactme');
// Route::get('/tools', function () {
//     return Inertia::render('Tools');
// })->name('toolsused');

// Route::get('/solve', function () {
//     return Inertia::render('Solve');
// })->name('solver');

// routes/web.php
// ... other routes ...

Route::post('/{any}/contact', [SendEmail::class, 'sendMail']);

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');






require __DIR__.'/auth.php';

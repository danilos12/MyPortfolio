<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>


    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
    <link rel="stylesheet" href="{{ mix('css/app.css') }}">
 
    
</head>
<body class="font-sans antialiased">
    <div id="app"></div>


    <script src="{{ mix('js/app.js') }}" defer></script> <!-- Automatically injects the correct JS file -->
</body>
</html>
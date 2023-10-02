<!DOCTYPE html>
<html >
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">


        <title>Laravel 9 vite with react</title>
        <link href="{{ mix('resources/css/app.css') }}" rel="stylesheet">
        <link href="{{ asset('node_modules/toastr/toastr.scss') }}" rel="stylesheet">



        @viteReactRefresh
        @vite('resources/js/app.jsx')

    </head>
    <body>
        <div class="" id="app"></div>
    </body>
</html>
<!DOCTYPE html>
<html >
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">


        <title>DaDevCoder</title>
        <link href="{{ mix('resources/css/app.css') }}" rel="stylesheet">
        <link href="{{ mix('node_modules/toastr/toastr.scss') }}" rel="stylesheet">



        @viteReactRefresh
        @vite('resources/js/app.jsx')

    </head>
    <body>
        <div class="" id="app"></div>
    </body>
</html>

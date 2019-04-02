<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <!-- X-CSRF-TOKEN -->
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <!-- Title -->
        <title>Laravel</title>
        <!-- Styles -->
        <link href="{{ asset(mix('css/app.css')) }}" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div id="root"></div>
        @routes
        <script src="{{ asset(mix('js/app.js')) }}" ></script>
    </body>
</html>

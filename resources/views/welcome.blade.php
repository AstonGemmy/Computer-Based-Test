<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="images/favicon/ms-icon-144x144.png" />
        
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />

        <meta name="description" content="Computer Based Test Portal" />
        <meta property="og:description" name="description" content="Computer Based Test Portal" />
        <meta property="og:author" name="author" content="Aston Gemmy" />
        <meta property="og:keywords" name="keywords" content="Computer Based Test Portal" />
        <meta property="og:image" name="image" content="/images/logo/algrith.png" />
        
        <!-- <link rel="manifest" href="/manifest.json" /> -->

        <title> Home | Career Strive </title>

        <!-- Styles -->
        <link rel="stylesheet" type="text/css" href="/css/app.css"/>
        <link rel="stylesheet" type="text/css" href="/css/animate.css"/>
        <link rel="stylesheet" type="text/css" href="/css/icons.css"/>

        <!-- <link rel="shortcut icon" href="images/favicon/algrith.png" /> -->

    </head>

    <body>        
        <div id="app">
            <loading-overlay :active="isLoading" :is-full-page="fullPage" :loader="loader" />
            <global-alert></global-alert>
            <router-view></router-view>
        </div>        
    </body>

    <script type="text/javascript" src="/js/app.js"></script>
    @if (Auth::check())
        <script> window.AuthUser = {!! json_encode(Auth::user()); !!}; </script>
    @else
        <script> window.authUser = null; </script>
    @endif

</html>

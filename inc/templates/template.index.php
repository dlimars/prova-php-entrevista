<!DOCTYPE html>
<html lang="pt-BR" data-lt-installed="true">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta id="viewport" name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="copyright" content="© 2023 [%author%]" />
    <meta name="robots" content="all" />
    <meta name="robots" content="max-image-preview:standard" />
    <meta name="revisit-after" content="7 days" />
    <meta name="description" content="[%description%]">
    <meta name="author" content="[%author%]">
    <meta name="theme-color" />
    <meta name="msapplication-navbutton-color" />
    <meta name="msapplication-TileColor" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta name="msapplication-TileImage" content="[%icon%]">

    <link href="[%icon%]" rel="[%icon%]">

    <link rel="stylesheet" type="text/css" href="./assets/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="./assets/css/bootstrap-extended.min.css">

    <link rel="stylesheet" type="text/css" href="./assets/css/app.css">


    <link rel="icon" href="[%icon%]" sizes="32x32">
    <link rel="apple-touch-icon" href="[%icon%]">

    <title>[%title%]</title>

    <style>
        .btn-primary{
        background-color: [%cor%];
        border-color: [%cor%];
        }

        .btn-outline-primary:hover{
            background-color: [%cor%];
            border-color: [%cor%];
        }

         .btn-outline-primary{
            color: [%cor%];
            border-color: [%cor%];
        }
    </style>
    [%css%]
</head>

<body class="vertical-layout vertical-menu-modern navbar-floating footer-static" data-open="click" data-menu="vertical-menu-modern" data-col="">

    [%include_topbar%]

    <div class="main-menu menu-fixed menu-light menu-accordion menu-shadow" data-aos="fade-right" data-aos-duration="3000">
        <div class="navbar-header mb-2">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item me-auto d-flex align-items-center">
                    <a class="navbar-brand" href="index.php">
                        <img src="./assets/img/logo.svg" class="card-img-top" alt="Logo [%title%]" title="[%title%]">
                    </a>
                </li>
            </ul>
        </div>
        [%include_sidebar%]
    </div>

    <div class="app-content content ">
        <div class="content-wrapper p-0">
            <div class="content-body">
                [%include_content%]
            </div>
        </div>
    </div>

    <footer class="footer footer-static footer-light">
        <p class="clearfix mb-0">
            <span class="float-md-start d-block d-md-inline-block mt-25">
                COPYRIGHT &copy; 2023
            </span>
        </p>
    </footer>

    <script src="./assets/js/app.js"></script>
    <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

    [%js%]
    [%sweetalert%]
</body>

</html>
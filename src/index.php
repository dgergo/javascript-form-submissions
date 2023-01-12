<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Submit form with JavaScript</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
    </head>
    <body>
        <div class="container">
            <h1>Introduce yourself</h1>
            <form id="dg_form" data-url="process.php">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">First name</label>
                    <input name="first_name" type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputNickname" class="form-label">Nickname</label>
                    <input name="nickname" type="text" class="form-control" id="exampleInputNickname">
                </div>
                <button id="dg_submit_button" class="btn btn-primary">Submit</button>
            </form>
            <div id="form_results" class="mt-3"></div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        <script src="scripts.js"></script>
    </body>
</html>

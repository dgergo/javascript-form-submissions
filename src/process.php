<?php 
if(!$_POST) {
    echo json_encode(array(
        'status' => 400,
        'message' => 'Invalid request',
    ));
    die();
}

if(isset($_POST) && !empty($_POST)) {
    // Do something with the POST data.
    if(!isset($_POST['first_name']) || (isset($_POST['first_name']) && empty($_POST['first_name']))) {
        echo json_encode(array(
            'status' => 400,
            'message' => 'A first name is required.',
        ));
        die();
    }

    if(!isset($_POST['nickname']) || (isset($_POST['nickname']) && empty($_POST['nickname']))) {
        echo json_encode(array(
            'status' => 400,
            'message' => 'A nickname is necessary.',
        ));
        die();
    }

    echo json_encode(array(
        'status' => 200,
        'message' => 'Hello, ' . $_POST['first_name'] . '! Your nickname is ' . $_POST['nickname'] . '.',
    ));
    die();
}
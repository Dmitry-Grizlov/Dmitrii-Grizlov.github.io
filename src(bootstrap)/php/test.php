<?php

    $type = $_POST["type"];
    $design = $_POST["design"];
    $adaptivity = $_POST["adaptivity"];
    $deadline = $_POST["deadline"];
    $budget = $_POST["budget"];
    $name = $_POST["user_name"];
    $email = $_POST["user_email"];
    $message = $_POST["user_msg"];
    echo "SCRIPT WORKS <br>". $name . "<br>". $email . "<br>" . $message . "<br>" . $type . "<br>" . $design . "<br>" . $adaptivity . "<br>" . $deadline . "<br>" . $budget;

?>
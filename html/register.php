<?php
    // CONEXÃO COM O BANCO DE DADOS 
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "podcloud";
    $conn = new mysqli($dbhost, $dbuser, $dbpass, $db);

    // VARIAVEIS
    $email = $_POST['email'];
    $username = $_POST['username'];
    $password = $_POST['password'];

    // CADASTRO NO BANCO DE DADOS
    $sql = "INSERT INTO userdata(username, email, password) VALUES ('$username', '$email', '$password')";

    if (mysqli_query($conn, $sql)) {
        echo "Data Stored";
    } else {
        echo "<script>location.replace('login.html')</script>";
    }
?>
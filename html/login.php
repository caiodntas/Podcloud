<?php
    // CONEXÃO COM O BANCO DE DADOS 
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $db = "podcloud";
    $conn = new mysqli($dbhost, $dbuser, $dbpass, $db);

    // VARIAVEIS
    $username = $_POST['username'];
    $password = $_POST['password'];

    // CONFERÊNCIA COM O BANCO DE DADOS
    $sql = "SELECT * FROM userdata WHERE (username = '$username' or email = '$username') AND password = '$password'";
    $result = mysqli_query($conn, $sql);
    $row = mysqli_fetch_array($result);

    if (($row['username'] == $username or $row['email'] == $username) && $row['password'] == $password) {
        echo "<script>location.replace('podcloud.html')</script>";
    } 

    else {
        echo "<script>location.replace('login.html')</script>";
    }
?>
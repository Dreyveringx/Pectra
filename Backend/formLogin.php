<?php
header('Access-Control-Allow-Origin: *');

$conn = new mysqli("localhost", "root", "", "registro_usuarios");

if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
}
else{
    // Recuperar datos del formulario
    $documentNumber = isset($_POST['documentNumber']) ? $_POST['documentNumber'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    // Verificar si el usuario existe en la base de datos
    $sql = "SELECT * FROM usuarios WHERE documentNumber='$documentNumber' AND password='$password'";
    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) > 0) {
        echo "Success!";
    } else {
        http_response_code(400); // Código de error de solicitud inválida
        echo "Usuario o contraseña incorrectos.";
    }

    $conn->close();
}
?>

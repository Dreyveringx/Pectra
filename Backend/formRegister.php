<?php
header('Access-Control-Allow-Origin: *');

$conn = new mysqli("localhost", "root", "", "registro_usuarios");

if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
}
else{
    // Recuperar datos del formulario
    $firstName = isset($_POST['firstName']) ? $_POST['firstName'] : '';
    $lastName = isset($_POST['lastName']) ? $_POST['lastName'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';
    $age = isset($_POST['age']) ? $_POST['age'] : '';
    $documentType = isset($_POST['documentType']) ? $_POST['documentType'] : '';
    $documentNumber = isset($_POST['documentNumber']) ? $_POST['documentNumber'] : '';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    $role = isset($_POST['role']) ? $_POST['role'] : '';
    $agreeTerms = isset($_POST['agreeTerms']) && $_POST['agreeTerms'] == '1' ? 1 : 0;

     // Verificar si el correo electrónico ya está registrado
     $verificar_email = mysqli_query($conn, "SELECT * FROM usuarios WHERE email='$email'");
     if(mysqli_num_rows($verificar_email) > 0) {
         http_response_code(400); // Código de error de solicitud inválida
         echo "Este correo electrónico ya está registrado, intenta con otro diferente";
         exit();
     }
 
     // Verificar si el número de documento ya está registrado
     $verificar_documentNumber = mysqli_query($conn, "SELECT * FROM usuarios WHERE documentNumber='$documentNumber'");
     if(mysqli_num_rows($verificar_documentNumber) > 0) {
         http_response_code(400); // Código de error de solicitud inválida
         echo "Este número de documento ya está registrado, intenta con otro diferente";
         exit();
     }

    // Insertar datos en la base de datos
    $sql = "INSERT INTO usuarios (firstName, lastName, email, password, age, documentType, documentNumber, phone, role, agreedTerms) 
            VALUES ('$firstName', '$lastName', '$email', '$password', '$age', '$documentType', '$documentNumber', '$phone', '$role', '$agreeTerms')";

    $res = mysqli_query($conn, $sql);

    if($res){
        echo "Success!";
    }
    else{
        echo "Error";
    }
    $conn->close();
}
?>
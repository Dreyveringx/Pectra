<?php
// Incluir archivo de conexión a la base de datos
include('/php/conexion/conexion.php');
$url = "./formulario-servicios.html";


// Verificar si se envió el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recopilar datos del formulario
    $nombre = $_POST['Nombre'];
    $direccion = $_POST['Direccion'];
    $numero = $_POST['Numero'];
    $descripcion = $_POST['Descripcion'];
    $horarios = $_POST['Horarios'];

    // Insertar datos del salón en la base de datos
    $conexion = conn();
    $sql = "INSERT INTO salon (Nombre, Direccion, Numero, Descripcion, Horarios) 
            VALUES ('$nombre', '$direccion', '$numero', '$descripcion', '$horarios')";
    $resultado = mysqli_query($conexion, $sql);

    // Verificar si la inserción fue exitosa
    if ($resultado) {
        // Redirigir al usuario al formulario de servicios
        header("Location: ./formulario-servicios.html");
        exit;
    } else {
        echo "Error al registrar el salón: " . mysqli_error($conexion);
    }

    // Cerrar la conexión a la base de datos
    mysqli_close($conexion);
}

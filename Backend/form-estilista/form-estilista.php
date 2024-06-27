<?php
include('/php/conexion/conexion.php'); //datos de la conexión
print_r($_POST);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recopilar datos del formulario
    $nombre = $_POST['Nombre'];
    $apellido = $_POST['Apellido'];
    $descripcion = $_POST['Descripcion'];

    // Insertar datos del estilista en la base de datos
    $conexion = conn();
    $sql = "INSERT INTO estilistas (Nombre, Apellido, Descripcion) 
            VALUES ('$nombre', '$apellido', '$descripcion')";
    $resultado = mysqli_query($conexion, $sql);

    // Verificar si la inserción fue exitosa
    if ($resultado) {
        echo "Registro del estilista exitoso";
    } else {
        echo "Error al registrar el estilista: " . mysqli_error($conexion);
    }

    // Cerrar la conexión a la base de datos
    mysqli_close($conexion);
}

<?php
include('/php/conexion/conexion.php'); //datos de la conexión

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recopilar datos del formulario
    $calificacion = $_POST['Calificacion'];
    $comentario = $_POST['Comentario'];

    // Insertar datos del estilista en la base de datos
    $conexion = conn();
    $sql = "INSERT INTO resenas (Calificacion, Comentario) 
            VALUES ('$calificacion', '$comentario')";
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
?>

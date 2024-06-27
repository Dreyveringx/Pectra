<?php
include('/php/conexion/conexion.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recopilar datos del formulario
    $fecha_cita = $_POST['fecha_cita'];
    $hora_cita = $_POST['hora_cita'];
    $monto_pagar = $_POST['monto_pagar'];
    $descripcion = $_POST['descripcion'];
    $usuario_id = $_POST['usuario_id'];
    $estilista_id = $_POST['estilista_id'];
    $servicio_id = $_POST['servicio_id'];

    // Insertar datos de la cita en la base de datos
    $conexion = conn();
    $sql = "INSERT INTO citas (FechaCita, HoraCita, MontoPagar, Descripcion, UsuarioID, EstilistaID, ServicioID) 
            VALUES ('$fecha_cita', '$hora_cita', '$monto_pagar', '$descripcion', '$usuario_id', '$estilista_id', '$servicio_id')";
    $resultado = mysqli_query($conexion, $sql);

    // Verificar si la inserción fue exitosa
    if ($resultado) {
        echo "Registro de la cita exitoso";
    } else {
        echo "Error al registrar la cita: " . mysqli_error($conexion);
    }

    // Cerrar la conexión a la base de datos
    mysqli_close($conexion);
}


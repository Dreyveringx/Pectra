<?php
// Habilitar la visualización de errores para depuración
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Conexión a la base de datos
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pectra";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombreservicio = $_POST['nombreServicio'];
    $descripcion = $_POST['descripcion'];
    $precio = $_POST['precio'];
    $duracion = $_POST['duracion'];
    $estilistaID = $_POST['estilistaID'];

    // Verificar los datos recibidos
    echo "Datos recibidos: ";
    echo "Nombre del Servicio: $nombreservicio, descripcion: $descripcion, precio: $precio, duracion: $duracion, EstilistaID: $estilistaID<br>";

    // Insertar el nuevo servicio y asignarlo al estilista
    $sql = "INSERT INTO servicios (nombreServicio, descripcion, precio, duracion, EstilistaID) 
            VALUES ('$nombreservicio', '$descripcion', '$precio', '$duracion', '$estilistaID')";

    if ($conn->query($sql) === TRUE) {
        echo "Servicio asignado correctamente al estilista.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();


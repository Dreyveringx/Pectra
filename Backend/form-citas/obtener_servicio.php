<?php
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

// Consulta para obtener los servicios
$sql = "SELECT ServicioID, NombreServicio, Descripcion, Precio, EstilistaID FROM servicios";
$result = $conn->query($sql);

$servicios = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $servicios[] = $row;
    }
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($servicios);


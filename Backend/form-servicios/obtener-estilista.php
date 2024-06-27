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

// Consulta para obtener los estilistas
$sql = "SELECT EstilistaID, Nombre, Apellido, Descripcion FROM estilistas";
$result = $conn->query($sql);

$estilistas = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $estilistas[] = $row;
    }
} else {
    echo "No se encontraron estilistas.";
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($estilistas);
?>

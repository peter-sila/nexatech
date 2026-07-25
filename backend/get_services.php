<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode([
        "status" => "error",
        "message" => "Only GET requests are allowed."
    ]);
    exit;
}

require_once 'db/db_connect.php';

try {
    $query = "SELECT id, title, description, images_url FROM services ORDER BY id DESC";
    $stmt = $conn->query($query);
    $services = $stmt->fetch_all(MYSQLI_ASSOC);

    http_response_code(200);
    echo json_encode([
        "status" => "success",
        "count" => count($services),
        "data" => $services
    ]);

} catch (\CONNException $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Failed to retrieve services data."
    ]);
}

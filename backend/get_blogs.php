<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: GET");

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Only GET requests allowed."]);
    exit;
}

require_once 'db/db_connect.php';

try {
    $sql = "SELECT id, title, sub_title, category, content, author, is_published, created_at FROM blogs";
            
    $stmt = $conn->query($sql);
    $blogs = $stmt->fetch_all(MYSQLI_ASSOC);

    http_response_code(200);
    echo json_encode([
        "status" => "success",
        "count" => count($blogs),
        "data" => $blogs
    ]);

} catch (\CONNException $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Failed to retrieve blog posts."
    ]);
}

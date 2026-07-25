<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Only GET requests allowed."]);
    exit;
}

require_once 'db/db_connect.php';

$blogId = isset($_GET['id']) ? intval($_GET['id']) : 0;

if ($blogId <= 0) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid or missing Blog ID Parameter."]);
    exit;
}

try {
    $sql = "SELECT id, title, sub_title, category, content, author, is_published, created_at FROM blogs WHERE id = ? LIMIT 1";
            
    $stmt = $conn->prepare($sql);
    
    if (!$stmt) {
        throw new Exception($conn->error);
    }
    
    $stmt->bind_param("i", $blogId);
    $stmt->execute();
    
    $result = $stmt->get_result();
    $blogPost = $result->fetch_assoc();
    
    $stmt->close();
    
    if (!$blogPost) {
        http_response_code(404);
        echo json_encode(["status" => "error", "message" => "Blog post not found."]);
        exit;
    }
    
    http_response_code(200);
    echo json_encode([
        "status" => "success",
        "data" => $blogPost
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Failed to retrieve the blog post record."
    ]);
}

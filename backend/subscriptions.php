<?php

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Only POST requests allowed."]);
    exit;
}

require_once 'db/db_connect.php';

$inputData = json_decode(file_get_contents("php://input"), true);

$email = isset($inputData['email']) ? trim($inputData['email']) : null;

if (empty($email)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Email address field is required."
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Invalid email address format."
    ]);
    exit;
}

try {
    $sql = "INSERT INTO subscriptions (email, is_active, created_at, updated_at) 
        VALUES (?, 1, NOW(), NOW())";
            
    $stmt = $conn->prepare($sql);
    
    $stmt->execute([$email]);

    http_response_code(201);
    echo json_encode([
        "status" => "success",
        "message" => "Successfully subscribed to the newsletter.",
        "subscription_id" => $conn->lastInsertId()
    ]);

} catch (\CONNException $e) {
    if ($e->getCode() == 23000) { 
        http_response_code(409);
        echo json_encode([
            "status" => "error",
            "message" => "This email address is already subscribed."
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            "status" => "error",
            "message" => "Database operation failed. Could not process your subscription."
        ]);
    }
}

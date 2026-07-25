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

require_once 'db/db_connect,php';

$inputData = json_decode(file_get_contents("php://input"), true);

$name        = isset($inputData['name']) ? trim($inputData['name']) : null;
$email       = isset($inputData['email']) ? trim($inputData['email']) : null;
$phonenumber = isset($inputData['phonenumber']) ? trim($inputData['phonenumber']) : null;
$message     = isset($inputData['message']) ? trim($inputData['message']) : null;

if (empty($name) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode([
        "status" => "error",
        "message" => "Required fields missing. Name, email, and message are mandatory."
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
    $sql = "INSERT INTO messages (name, email, phonenumber, message, created_at) 
        VALUES (?, ?, ?, ?, NOW())";
            
    $stmt = $conn->prepare($sql);
    
    $stmt->execute([$name, $email, $phonenumber, $message]);

    http_response_code(201);
    echo json_encode([
        "status" => "success",
        "message" => "Message submitted successfully.",
        "inserted_id" => $conn->lastInsertId()
    ]);

} catch (\CONNException $e) {
    http_response_code(500);
    echo json_encode([
        "status" => "error",
        "message" => "Database operation failed. Could not store your message."
    ]);
}

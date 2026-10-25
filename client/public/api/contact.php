<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    $data = $_POST;
}

$name = htmlspecialchars(trim($data['name'] ?? ''));
$email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(trim($data['phone'] ?? ''));
$company = htmlspecialchars(trim($data['company'] ?? ''));
$message = htmlspecialchars(trim($data['message'] ?? ''));

if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Name and email are required.']);
    exit;
}

// Target email to receive inquiries
$to = 'admin@addymize.com'; // You can change this to your desired Gmail/domain email

$subject = "=?UTF-8?B?".base64_encode("📩 New Contact Form Submission — " . $name)."?=";

$htmlBody = "
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; background: #073e4a; color: #ffffff; padding: 20px; }
    .card { background: #0a2533; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 24px; max-width: 600px; margin: 0 auto; }
    h2 { color: #f59e0b; margin-top: 0; }
    table { width: 100%; border-collapse: collapse; }
    td { padding: 10px 0; border-bottom: 1px solid rgba(255,255,255,0.1); }
    .label { color: #94a3b8; font-weight: bold; width: 120px; }
    .value { color: #f8fafc; }
    .msg-box { margin-top: 15px; padding: 12px; background: rgba(0,0,0,0.2); border-left: 3px solid #f59e0b; border-radius: 4px; }
  </style>
</head>
<body>
  <div class='card'>
    <h2>📩 New Contact Form Submission</h2>
    <table>
      <tr><td class='label'>Name:</td><td class='value'>{$name}</td></tr>
      <tr><td class='label'>Email:</td><td class='value'><a href='mailto:{$email}' style='color:#38bdf8;'>{$email}</a></td></tr>
      <tr><td class='label'>Phone:</td><td class='value'>{$phone}</td></tr>
      <tr><td class='label'>Company:</td><td class='value'>{$company}</td></tr>
    </table>
    <div class='msg-box'>
      <strong>Message:</strong><br>
      " . nl2br($message) . "
    </div>
  </div>
</body>
</html>
";

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=UTF-8';
$headers[] = 'From: Addymize Website <no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'addymize.com') . '>';
$headers[] = 'Reply-To: ' . $email;

$mailSent = @mail($to, $subject, $htmlBody, implode("\r\n", $headers));

// Log to file as backup on cPanel
$logLine = date('Y-m-d H:i:s') . " | {$name} | {$email} | {$phone} | {$company}\n";
@file_put_contents(__DIR__ . '/submissions.log', $logLine, FILE_APPEND);

echo json_encode([
    'success' => true,
    'message' => 'Thank you! Your inquiry has been submitted successfully.',
    'mailSent' => $mailSent
]);

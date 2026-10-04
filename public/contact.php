<?php
// Simple, spam-resistant enquiry handler. Sends to thilo@khulabs.co.za.
header('Content-Type: application/json');
if ($_SERVER['REQUEST_METHOD'] !== 'POST') { http_response_code(405); echo json_encode(['ok'=>false]); exit; }
if (!empty($_POST['website'])) { echo json_encode(['ok'=>true]); exit; } // honeypot
$clean = function($k){ return trim(str_replace(["\r","\n"], ' ', strip_tags($_POST[$k] ?? ''))); };
$name=$clean('name'); $email=$clean('email'); $phone=$clean('phone'); $company=$clean('company'); $service=$clean('service'); $source=$clean('source');
$message = trim(strip_tags($_POST['message'] ?? ''));
if ($name==='' || $phone==='' || !filter_var($email, FILTER_VALIDATE_EMAIL)) { http_response_code(422); echo json_encode(['ok'=>false,'error'=>'invalid']); exit; }
$to = 'thilo@khulabs.co.za';
$subject = "New website enquiry from $name" . ($source ? " [$source]" : '');
$body = "Name: $name\nCompany: $company\nEmail: $email\nPhone: $phone\nService: $service\nSource: $source\n\nMessage:\n$message\n";
$headers = "From: Khula Website <noreply@khulabusinesssolutions.co.za>\r\nReply-To: $name <$email>\r\nContent-Type: text/plain; charset=UTF-8";
$ok = mail($to, $subject, $body, $headers);
echo json_encode(['ok'=>$ok]);

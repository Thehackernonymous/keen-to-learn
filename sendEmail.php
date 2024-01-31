<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data
    $name = isset($_POST["name"]) ? htmlspecialchars($_POST["name"]) : "";
    $email = isset($_POST["email"]) ? filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) : "";
    $message = isset($_POST["message"]) ? htmlspecialchars($_POST["message"]) : "";

    // Check for empty fields
    if (empty($name) || empty($email) || empty($message)) {
        http_response_code(400); // Bad Request
        exit("Please fill in all required fields.");
    }

    // Your email address where you want to receive the messages
    $to = "rj483313@gmail.com";
    $subject = "New Contact Form Submission";

    // Email headers
    $headers = "From: $name <$email>" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-type: text/html; charset=UTF-8" . "\r\n";

    // Email body
    $body = "<p><strong>Name:</strong> $name</p>";
    $body .= "<p><strong>Email:</strong> $email</p>";
    $body .= "<p><strong>Message:</strong> $message</p>";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200); // OK
        exit("Message sent successfully.");
    } else {
        http_response_code(500); // Internal Server Error
        exit("Error sending the message. Please try again later.");
    }
}
$response = [
    'success' => true, // or false based on your logic
    'message' => 'Email sent successfully', // Optional: provide a success message or an error message
];

echo json_encode($response);
?>

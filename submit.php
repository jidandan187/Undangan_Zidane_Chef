<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $attendance = htmlspecialchars($_POST['attendance']);
    $message = htmlspecialchars($_POST['message'] ?? '');

    // Save data (e.g., to a database or file)
    // For simplicity, echo the data
    echo "Thank you, $name. RSVP: $attendance. Message: $message";
}
?>

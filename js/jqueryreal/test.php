<?php 
// Code for loading WordPress environment goes here //

$themeName_optionTree = get_option('option_tree');

$name = trim($_POST['visitorname']);
$email = $_POST['visitoremail'];
$message = $_POST['visitormessage'];


$site_owners_email = $themeName_optionTree['owner_email'];
$site_owners_name = $themeName_optionTree['owner_name'];
$email_subject = $themeName_optionTree['email_subject'];
$success_message = '<p class="success-box">' . $themeName_optionTree['success_message'] . '</p>';

if (strlen($name) < 2) {
    $error['name'] = 1; 
}

if (!preg_match('/^[a-z0-9&\'\.\-_\+]+@[a-z0-9\-]+\.([a-z0-9\-]+\.)*+[a-z]{2}/is', $email)) {
    $error['email'] = 1;    
}

if (strlen($message) < 2) {
    $error['message'] = 1;
}

if (!$error) {

    require_once('PHPMailer_v5.1/class.phpmailer.php');

    $mail = new PHPMailer(true);

    try {
        $mail->From = $email;
        $mail->FromName = $name;
        $mail->Subject = $email_subject;
        $mail->AddAddress($site_owners_email, $site_owners_name);
        $mail->Body = $message;
        $mail->Send();
        header('HTTP/1.1 200 OK');
        echo $success_message;
    } catch (phpmailerException $e) {
        echo '<p class="warning-box">' . $e->errorMessage() . '</p>';
    } catch (Exception $e) {
        echo '<p class="warning-box">' . $e->getMessage() . '</p>';
    }
}
?>
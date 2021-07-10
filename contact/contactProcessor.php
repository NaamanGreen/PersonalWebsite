<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Contact Processor Page</title>
</head>

<body>

<h1>Processed Data</h1>

<?php
	if(isset($_POST['send']))
	{
		
		$name = $_POST['name'];
		$company = $_POST['company'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		
		if(!empty($name) && !empty($email) && !empty($email) && !empty($message))
		{
			$re_email = "/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/";

			if(preg_match($re_email, $email))
			{
				echo "<p>name: $name</p>";
				echo "<p>company: $company</p>";
				echo "<p>email: $email</p>";
				echo "<p>Message: $message</p>";
				
			}
			else { echo "You did not format your email properly"; }
		}
		
		else { echo "You did not fill in the required fields"; }
	
	}
?>

</body>
</html>
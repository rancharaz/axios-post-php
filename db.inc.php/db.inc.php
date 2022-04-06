<?php





if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  // enter your own credentials
 $servername = "localhost";
 $username = "root";
 $pswd = "";
 $db = "form_test";

 /* database connection */
 $conn = new mysqli($servername, $username, $pswd, $db);

 $sname = $conn->real_escape_string($_POST['name']);
 $surname = $conn->real_escape_string($_POST['surname']);
/*  $semail = $conn->real_escape_string($_POST['email']); */
 
/* sql scripts */
$sql = "INSERT INTO form_test(name, surname)VALUES('$sname', '$sphone')";

if ($conn->query($sql) === TRUE) {
    echo "All the fields has been posted!";
  } else {
    echo "Error: " . $sql . "<br>" . $conn->error;
  }
  
  /* connection close */
  $conn->close();
}
  ?>
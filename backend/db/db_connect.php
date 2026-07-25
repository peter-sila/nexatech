<?php
  require 'constants.php';

  $conn = mysqli_connect($db_host, $db_user, $db_password, $db_name);
  if (!$conn) {
    echo "'Connection failed: ' mysqli_connect_error";
  } else {
    echo "Connection successfull";
  }

?>
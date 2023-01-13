<?php
 
     //   $servername = "localhost"
       // $username = "root"
       // $password = ""
       // $dbname = "landing"
        $conn = mysqli_connect("localhost", "root", "", "landing");
         
        // Check connection
        if($conn === false){
            die("ERROR: Could not connect. "
                . mysqli_connect_error());
        }
         
        // Taking all 5 values from the form data(input)
        $name =  $_REQUEST['name'];
        $dob = $_REQUEST['DOB'];
        $address =  $_REQUEST['address'];
        $postcode = $_REQUEST['postcode'];
        $state = $_REQUEST['state'];
        $id = NULL;
         
        // Performing insert query execution
        // here our table name is college
        $sql = "INSERT INTO Customer  VALUES ('$id','$name',
            '$dob','$address','$postcode')";
        $sql2 ="INSERT INTO Postcode  VALUES ('$id','$state',
        '$postcode')";
        
       //  $sql2 = "INSERT INTO Postcode VALUES ('$postcode', '$state')";
        if(mysqli_query($conn, $sql) && mysqli_query($conn,$sql2)){
            echo "<h3>data stored in a database successfully."
                . " Please browse your localhost php my admin"
                . " to view the updated data</h3>";
 
            echo nl2br("\n$name\n $dob\n "
                . "$address\n $postcode\n $state");
        } else{
            echo "ERROR: Hush! Sorry $sql. "
                . mysqli_error($conn);
        }
         
        // Close connection
        mysqli_close($conn);
        ?>
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "databasename";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>
<?php
$sql = "SELECT * FROM products";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "Product name: " . $row["product_name"]. " - Price: " . $row["price"]. "<br>";
    }
} else {
    echo "0 results";
}

mysqli_close($conn);
?>
<?php
$sql = "SELECT * FROM products";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    // output data of each row
    while($row = mysqli_fetch_assoc($result)) {
        echo "Product name: " . $row["product_name"]. " - Price: " . $row["price"]. "<br>";
    }
} else {
    echo "0 results";
}

mysqli_close($conn);
?>

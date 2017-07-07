<?php
header("content-type","text/html;charset=utf-8");
	
	$name=$_GET['userName'];
	$pass=$_GET['userPass'];
	
	$con = mysql_connect("localhost","root","123");
	if (!$con){ 
		die('Could not connect:' .mysql_error());
	}else{
		mysql_select_db("mysqlone",$con);
		
		$str="select * from users where usernicheng='".$name."' and userPass='".$pass."'";
		
		$result = mysql_query($str,$con); 
		
		$rowCount = mysql_num_rows($result);
		
		mysql_close($con);
		
		echo $rowCount;
	}
?>
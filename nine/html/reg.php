<?php
	header("content-type","text/html;charset=utf-8");
	
	$id=$_GET['userName'];
	$pass=$_GET['userPass'];
	$name=$_GET['userPhone'];
	
	$con = mysql_connect("localhost","root","123");
	if (!$con){ 
		die('Could not connect:' .mysql_error());
	}else{
		mysql_select_db("mysqlone",$con);
		$str="insert into users(userId,userPass,usernicheng) values('".$id."','".$pass."','".$name."')";
		
		$count = mysql_query($str,$con);
		mysql_close($con);
		if($count==1){
			sleep(2);
			header('Location: loading.html');
		}else{
			echo "fail";
		}
	}
?>
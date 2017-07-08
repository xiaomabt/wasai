<?php
	header("content-type","text/html;charset=utf-8");
	
	$name=$_GET['useMa'];
	
	$con = mysql_connect("localhost","root","123");
	if (!$con){ 
		die('Could not connect:' .mysql_error());
	}else{
		mysql_select_db("mysqlone",$con);
		$str="insert into yanzhengma(number) values('".$name."')";
		
		$count = mysql_query($str,$con);
		
		mysql_close($con);
		
		echo $count;
		
	}
?>
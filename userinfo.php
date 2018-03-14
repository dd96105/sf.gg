<?php
	$jsonStr=file_get_contents("userinfo.json");
	$phpJson=json_decode($jsonStr);
	$jsonKey=array_rand($phpJson,10);
	$backJson=array( );
	for($i=0;$i<count($jsonKey);$i++){
		$backJson[$i]=$phpJson[$jsonKey[$i]];
	}
	$keyValueArr = array(
		'items' =>$backJson
		 );

	echo json_encode($keyValueArr);
?>
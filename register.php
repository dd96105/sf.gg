<?php
	$nameArr = array("小飞侠","金刚葫芦娃","百变小樱","路飞","柯南","鸣人");
	$postNmae = $_POST["name"];
	$is = in_array($postNmae,$nameArr);
	if($is){
		echo "1";
	}if($postNmae==""){
		echo "3";
	}else{
		echo "2";
	}
?>
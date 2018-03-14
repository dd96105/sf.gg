$(function(){
	document.onclick=function(e){
		var w=$("#searchBox")[0];
		if (e.target == w) {
			$(".search").width("80%");
		} else{
			$(".search").width("30%");
			
		}
		if ($(".email").is(":checked")) {
			$(".modal_email").css("display","block");
			$(".modal_tel").css("display","none");
		}else{
			$(".modal_tel").css("display","block");
			$(".modal_email").css("display","none");
		}
	}
	var i=0;
	var time=setInterval(fn,3000);
	$(".all").on("mouseenter",function(){
		clearInterval(time);
	})
	$(".all").on("mouseleave",function(){
		time=setInterval(fn,3000);
		$(".r_div").children("a").css("transition","all 2s");
	})
	$(".l_spn").on("click",function(){
		$(".r_div").children("a").css("transition","none")
		i--;
		if(i<0){
			i=3;
		}
		$(".r_div").children("a").eq(i).css({"opacity":1,"z-index":10}).siblings("a").css({"opacity":0,"z-index":1});
		$(".l_div").children("a").eq(i).addClass("bck").siblings("a").removeClass("bck");
			
	})
	$(".r_spn").on("click",function(){
		$(".r_div").children("a").css("transition","none")
		fn();
	})
	function fn(){
		$(".r_div").children("a").eq(i).css({"opacity":1,"z-index":10}).siblings("a").css({"opacity":0,"z-index":1});
		$(".l_div").children("a").eq(i).addClass("bck").siblings("a").removeClass("bck");
		i++;
		if(i>3){
			i=0;
		}
	}
	$(".l_div").children("a").on("mouseenter",function(){
		var a=$(this).index();
		$(".r_div").children("a").css("transition","none");
		$(".l_div").children("a").eq(a).addClass("bck").siblings("a").removeClass("bck");
		$(".r_div").children("a").eq(a).css({"opacity":1,"z-index":10}).siblings("a").css({"opacity":0,"z-index":1});
	})
	
	
	$(".upload").on("click",function(){
		$.ajax({
			dataType:'json',
			url:"userinfo.php",
			success:function(date){
				var str=template("template",date);
				$(".items").append(str);
			}
		});
	})
	
	
	$(".name").on("blur",function(){
		var vue = $(this).val();
		$.ajax({
			url:"register.php",
			type:"post",
			data:{name:vue},
			success:function(data){
				if (data=="1") {
					$(".name").css("border-color","red")
				}if(data=="2"){
					$(".name").css("border-color","#72ff56");
				}if (data=="3") {
					$(".name").css("border-color","#ccc");
				}
			}
		})
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})
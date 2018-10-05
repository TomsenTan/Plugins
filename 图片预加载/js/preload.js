$(document).ready(function(){
	var imgs = ["img/pexels-photo-297814.jpeg",
				"img/pexels-photo-465445.jpeg",
				"img/pexels-photo-619948.jpeg",
				"img/pexels-photo-620336.jpeg",
				"img/pexels-photo-885746.jpeg",
				"img/pexels-photo-886109.jpeg",
				"img/pexels-photo-888994.jpeg"];

	var  index = 0,
	     len =imgs.length;
    
    /*方法一*/
 	$(".button").on("click",function(){
 		if("prev" === $(this).data('control')){
 			index = Math.max(0,--index);

 		}else{
 			index = Math.min(len-1,++index);
 		}


 		$("#img").attr("src",imgs[index]);
 	});
   
     /*方法二*/
	/*$(".button").on("click",function(){
		if("prev" === $(this).data('control')){
 			index = Math.max(0,--index);

 		}else{
 			index = Math.min(len-1,++index);
 		}

 		var img=new Image();
 		img.src=imgs[index];
 		$(".showpic").html=img;
 		
 	});*/

});
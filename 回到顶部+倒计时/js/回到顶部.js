window.onload=function(){
	      "use strict";
	      var obtn=document.getElementById('btn');
	      var clientHeight=document.documentElement.clientHeight;
	      var timer=null;
	      var isTop=true;
	     
	     
	      /*滑动暂停*/
	      window.onscroll=function(){
			  var osTop=document.documentElement.scrollTop||document.body.scrollTop;
			  if(osTop>clientHeight){
				  obtn.style.display='block';
				  share.style.display='block';
				  wechat.style.display='block';
			  }
			  else{
				  obtn.style.display='none';
				  share.style.display='none';
				  wechat.style.display='none';
			  }
			  
			  if(!isTop){
				  clearInterval(timer);
			  }
			  
			  isTop=false;
		  };
	
		  
	       /*点击回到顶部*/
	       obtn.onclick=function(){
			     
			      timer=setInterval(function(){
				  var osTop=document.documentElement.scrollTop||document.body.scrollTop;
				  var ispeed=Math.floor(-osTop/3);
			      document.documentElement.scrollTop=document.body.scrollTop=osTop+ispeed;
				  
				  isTop=true;
				  if(osTop===0){
					  clearInterval(timer);
				  }
			  },100);	  			  
              };
	
	  
	       /*显示时间*/
	      showTime();
	      
	      function showTime(){
	      var myDate=new Date();
	      var hour=myDate.getHours();
	      var minute=myDate.getMinutes();
	      var second=myDate.getSeconds();
	      
	      var year=myDate.getFullYear();
	      var month=myDate.getMonth()+1;
	      var date=myDate.getDate();
	      var day=myDate.getDay();
	      var weekday=new Array(7);
	      weekday[0]="星期天";
		  weekday[1]="星期一";
		  weekday[2]="星期二";
		  weekday[3]="星期三";
		  weekday[4]="星期四";
		  weekday[5]="星期五";
		  weekday[6]="星期六";
			  
		if(hour<10){
			  hour='0'+hour;
		  } 
			  
		if(minute<10){
			  minute='0'+minute;
		  }
			  
		if(second<10){
			  second='0'+second;
		  }
			  
		 /*function checkTime(i){
			  if(i<10){
				  i='0'+i;
			  }
		  } 为什么不行？*/
			  
		 
	      document.getElementById("showtime").innerHTML=hour+':'+minute+':'+second;
	      document.getElementById("showday").innerHTML=year+'年'+month+'月'+date+'日'+weekday[day];
			  
		  setTimeout(showTime,500);
		  }
	
	   /*倒计时*/
	   
	   leftTime();
	   function leftTime(){
		var curtime=new Date();
		var endtime=new Date(2018,5,6,12,30,0);
		var lefttime=parseInt((endtime.getTime()-curtime.getTime())/1000);
		   
		var d=parseInt(lefttime/(60*60*24));
		var h=parseInt(lefttime/(60*60)%24);
		var m=parseInt(lefttime/60%60);
		var s=parseInt(lefttime%60);
		   
		if(h<10){
			  h='0'+h;
		  } 
			  
		if(m<10){
			  m='0'+m;
		  }
			  
		if(s<10){
			  s='0'+s;
		  }
		document.getElementById("timeleft").innerHTML=d+'天'+h+'小时'+m+'分钟'+s+'秒';
		 
		setTimeout(leftTime,500);
		   
	   }
	      
	     
	
};
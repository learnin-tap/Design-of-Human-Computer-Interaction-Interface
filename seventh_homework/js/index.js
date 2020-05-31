$(function(){
	//初始化状态
	var size=$(".img li").size();
	for(var i=1;i<=size;i++){
		var li="<li>"+i+"</li>";
		$(".num").append(li);
	}
	$(".num li").first().addClass("active");
	$(".img li").first().show();
	
	//手动轮播
	$(".num li").mouseover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index=$(this).index();
		$(".img li").eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
		i=index;
	})
	
	//使用定时器自动轮播
	var i=0;
	var t=setInterval(move,2000);
	
	function move(){//运动函数
		i++;
		if(i==size)
			i=0;
		$(".num li").eq(i).addClass('active').siblings().removeClass('active');
		$(".img li").eq(i).fadeIn(500).siblings().fadeOut(500);
	}
	
	$(".banner").hover(function(){//鼠标经过时，清除定时器;鼠标离开，恢复定时器
		clearInterval(t);
	},function(){
		t=setInterval(move,2000);
	})
	
	//按钮点击轮播
	$(".btn.left").click(function(){
		i--;
		if(i==-1)
			i=size-1;
		$(".num li").eq(i).addClass('active').siblings().removeClass('active');
		$(".img li").eq(i).fadeIn(500).siblings().fadeOut(500);
	})
	$(".btn.right").click(function(){
		move();
	})
})
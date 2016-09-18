// JavaScript Document
	function format(flag,id) {
		var div=document.getElementById(id);
		if (flag==0)
		{div.className='hide';}
		if (flag==1)
		{div.className='show';}
	}
	function changesize(width,height,id)
	{
		var div=document.getElementById(id);
		div.width=width;
		div.height=height;
		document.getElementById('body').onscroll;
	}
	function sound(id)
	{
		var audio=document.getElementById(id);
		audio.play();
	}
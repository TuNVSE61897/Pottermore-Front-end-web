
function day()
{
	var day= document.getElementById("day");
	var s="";
	for (var i=1;i<=31;i++)
	{	
		s+="<option>"+i+"</option>";	
		{
			day.innerHTML=s;
		}
	}
}

function year()
{
	var year=document.getElementById("year");
	var s="";
	for (var i=2015;i>=1900;i--)
	{	
		s+="<option>"+i+"</option>";	
		{
			year.innerHTML=s;
		}
	}
}

function format(flag)
	{
		tag1=document.getElementById("step1");
		tag2=document.getElementById("step2");
		tag3=document.getElementById("step3");
		tag4=document.getElementById("step4");
		tag5=document.getElementById("step5");//lay the img co id=h
		if(flag==1)
		{
			form1=document.getElementById("apDiv2");
			form2=document.getElementById("apDiv4");
			form3=document.getElementById("apDiv5");
			form4=document.getElementById("apDiv6");
			tag2.src="Photos/reg2b.png";
			tag1.src="Photos/reg1a.png";
			tag2.className="step2b";
			tag1.className="step1c";
			form1.className="forma";
			form2.className="formb";
			form3.className="forma"
			form4.className="formb";
		}
		if(flag==2)
		{
			var year=document.getElementById("year").value;
			form1=document.getElementById("apDiv4");
			form3=document.getElementById("apDiv6");
			form2=document.getElementById("apDiv8");
			form4=document.getElementById("apDiv9");
			tag2.src="Photos/reg2a.png";
			if ((2015-parseInt(year))>=18){tag3.src="Photos/reg3b.png";}
			else {tag3.src="Photos/reg3b2.png";}
			tag2.className="step2c";
			tag3.className="step3b";
			form1.className="forma";
			form3.className="forma";
			form2.className="formb";
			form4.className="formb";
		}
		if(flag==3)
		{
			form1=document.getElementById("apDiv8");
			form3=document.getElementById("apDiv9");
			form2=document.getElementById("apDiv11");
			form4=document.getElementById("apDiv12");
			tag3.src="Photos/reg3a.png";
			tag4.src="Photos/reg4b.png";
			tag3.className="step3c";
			tag4.className="step4b";
			form1.className="forma";
			form3.className="forma";
			form2.className="formb";
			form4.className="formb";
		}
		if(flag==4)
		{
			form1=document.getElementById("apDiv11");
			form3=document.getElementById("apDiv12");
			form2=document.getElementById("apDiv14");
			form4=document.getElementById("apDiv15");
			tag4.src="Photos/reg4a.png";
			tag5.src="Photos/reg5b.png";
			tag4.className="step4c";
			tag5.className="step5b";
			form1.className="forma";
			form3.className="forma";
			form2.className="formb";
			form4.className="formb";
		}
		if (flag==5)
		{
			document.getElementById('body').style.backgroundImage = "url(Photos/table.jpg)";
			form1=document.getElementById("apDiv14");
			form3=document.getElementById("apDiv15");
			agree=document.getElementById("apDiv17");
			ok=document.getElementById("apDiv18");
			tag1.className="forma";
			tag2.className="forma";
			tag3.className="forma";
			tag4.className="forma";
			tag5.className="forma";
			form1.className="forma";
			form3.className="forma";
			agree.className="formb";
			ok.className="formb";	
			var first = document.getElementById('firstname').value;
			var last = document.getElementById('lastname').value;
			document.getElementById("id").innerHTML=first + " " + last;
		}
		if(flag==6)
		{
			document.getElementById('body').style.backgroundImage = "url(Photos/table1.png)";
			agree=document.getElementById("apDiv17");
			ok=document.getElementById("apDiv18");
			agree.className="forma";
			ok.className="forma";
			var username=document.getElementById('username').value;
			var email=document.getElementById('email').value;
			document.getElementById("id").innerHTML="";
			document.getElementById("name").innerHTML=username;
			document.getElementById("mail").innerHTML=email;
			return false;
		}
	}// JavaScript Document
	
	function redirect()
	{
		window.location.replace("Homepage.html");
  		return false;
	}

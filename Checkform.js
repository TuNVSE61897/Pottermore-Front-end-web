// JavaScript Document
function checkformname()
{
	//var mau=/^SE$/;
	var mau3=/^[A-Za-z]{1,50}$/;
	var mau4=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
	var firstname=document.getElementById("firstname").value;
	var check=0;
	if (mau3.test(firstname))
	{
		check++;
	}
	else
	{
		alert("Your First name is invalid.");
		document.f.firstname.focus();
		return false;
	}
	var lastname=document.getElementById("lastname").value;
	if (mau3.test(lastname))
	{
		check++;
	}
	else
	{
		alert("Your Last name is invalid.");
		document.f.lastname.focus();
		return false;
	}
	var email=document.getElementById("email").value;
	if (mau4.test(email))
	{
		check++;
	}
	else
	{
		alert("Your Email is invalid.");
		document.f.email.focus();
		return false;
	}
	var email2=document.getElementById("email2").value;
	if (email==email2)
	{
		check++;
		format(3);
		return true;
	}
	alert("Your Email must match the previous one.");
	document.f.email2.focus();
	return false;
}

function checkformpass()
{
	//var mau=/^SE$/;
	var mau2=/^[A-Za-z0-9!@#$%&'*+-=?^_`{|}~]{7,12}$/;
	var check=0;
	var pass=document.getElementById("password").value;
	if (mau2.test(pass))
	{
		check++;
	}
	else
	{
		alert("Your Password is invalid.");
		document.f.password.focus();
		return false;
	}
	var pass2=document.getElementById("password2").value;
	if (pass==pass2)
	{
		check++;
		format(4);
		return true;
	}
	alert("Your Password must match the previous one.");
	document.f.password2.focus();
	return false;
}
	
function checkformid()
{
	//var mau=/^SE$/;
	var mau1=/^[A-Za-z0-9!@#$%&'*+-=?^_`{|}~]{5,12}$/; 
	var check=0;
	var id=document.getElementById("username").value;
	if (mau1.test(id))
	{
		check++;
		format(5);
		return true;
	}
		alert("Your Username is invalid.");
		return false;
}
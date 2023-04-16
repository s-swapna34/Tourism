function validateForm(){
		var name=document.getElementById("x").value
		var password=document.myform.password.value
		if(name==null||name=="")
			{alert("Name can't be blank");
			return false;}
		else if(password.length<6)
			{alert("Password should contain atleast 6 letters");
			return false;}
			var x=document.myform.email.value
		var atposition=x.indexOf("@")
		var dotposition=x.lastIndexOf(".")
		if(atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length)
		{	alert("enter a valid email \n atposition:"+atposition+"\n dotposition:"+dotposition)
		return false;
		} 
}

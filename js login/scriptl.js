function login() 
{
	var email=document.getElementById('email').value;
	var password=document.getElementById('pwd').value;
	this.validate= function(event)
	{
		event.preventDefault();

		if(email==localStorage.name	 && localStorage.password=="password")
		{
			var myWindow = window.open("./home.html", "_parent");
	   	}
		else
		{
			alert("Incorrect Credentials");
		}	
	}
}
function validate1(event)
{
	obj= new login;
	obj.validate(event);
}
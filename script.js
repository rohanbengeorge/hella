function alertFunction()
{
	event.preventDefault();
	var showalert="";
	
	if(document.getElementById("dob").value=="")
	{
		showalert="\nEnter the date";
	}	
	
	
	if( document.getElementById("name").value.length <=3 )
    {
   		showalert =showalert+"\nEnter the name correctly";
    }
   
  
   if( isNaN(document.getElementById("age").value) || document.getElementById("age").value=="" )
   {
   		showalert =showalert+"\nEnter Age in number ";
   }

   if( document.getElementById("address").value.length <=3 )
   {
   	 showalert =showalert+"\nEnter the address correctly";
   }
   
   var email=document.getElementById("email").value;
   var eformat =/\S+@\S+\.\S+/;
   var eresult=eformat.test(email);
 	//alert(t);
 	if(eresult==false)	
	{
		showalert =showalert+"\nEnter email properly";
    }
	
	if(showalert!="")
    {	
    	alert(showalert);
	}
    else
    {
    	document.getElementById("show").innerHTML="<b>You have been Granted Access</b>";
    }	

    addTable();
}



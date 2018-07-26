var nof_rows=0;
var arrayLength = 100;
var multiArray = new Array(arrayLength);
for (var i = 0; i < multiArray.length; i++)
{
	multiArray[i] = new Array(5);
}
var tableid	 = document.getElementById("Table");
var cur_row=1;
var table_len

function addRow() 
{
	multiArray[nof_rows][0]=document.getElementById("name").value;
	multiArray[nof_rows][1]=document.getElementById("email").value;
	multiArray[nof_rows][2]=document.getElementById("dob").value;
	multiArray[nof_rows][3]=document.getElementById("age").value;
	multiArray[nof_rows][4]=document.getElementById("address").value;
	nof_rows=nof_rows+1;
	table_len=document.getElementsByTagName("tr").length;
	for (var i = 0; (i < table_len-1);i++) 
	{
		tableid.deleteRow(1);
	}
	displayTable();	
}

function displayTable( )
{	
	document.getElementById("tablebody").innerHTML="";
	for (var i = cur_row-1; i<nof_rows && i <(cur_row+2); i++) 
	{
		var table = document.getElementById("Table");
	    var row = table.insertRow(-1);
	    var cell1 = row.insertCell(0);
	    var cell2 = row.insertCell(1);
	    var cell3 = row.insertCell(2);
	    var cell4 = row.insertCell(3);
	    var cell5 = row.insertCell(4);
	       
	    cell1.innerHTML = multiArray[i][0];
	    cell2.innerHTML = multiArray[i][1];
	    cell3.innerHTML = multiArray[i][2];
	    cell4.innerHTML = multiArray[i][3];
	    cell5.innerHTML = multiArray[i][4];
 	}
}

function prev()
{
	if (cur_row>3) 
	{
		cur_row=cur_row-3;
		table_len=document.getElementsByTagName("tr").length;
		for (var i = 0; (i < table_len-1);i++) 
		{
			tableid.deleteRow(1);
		}
		displayTable();
	}
}
function next()
{
	if (cur_row+3<=nof_rows) 
	{
		cur_row=cur_row+3;
		table_len=document.getElementsByTagName("tr").length;
	
		for (var i = 0; (i < table_len-1 );i++) 
		{
			tableid.deleteRow(1);
		}
		displayTable();
	}	
}

function verify()
{
	event.preventDefault();
	var showalert="";
	var name=document.getElementById("name").value;
	var dob=document.getElementById("dob").value;
	var age=document.getElementById("age").value;
	var address=document.getElementById("address").value;

	if(dob=="")
	{
		showalert="\nEnter the date";
	}	
	if( name.length <=3 )
    {
   		showalert =showalert+"\nEnter the name correctly";
    }  
	if( isNaN(age) || age=="" )
   {
   		showalert =showalert+"\nEnter Age in number ";
   }
	if( address.length <=3 )
   {
   	 showalert =showalert+"\nEnter the address correctly";
   }   
   var email=document.getElementById("email").value;
   var email_regexp =/\S+@\S+\.\S+/;
   var email_result=email_regexp.test(email);
 	//alert(t);
 	if(email_result==false)	
	{
		showalert =showalert+"\nEnter email properly";
    }
	
	if(showalert!="")
    {	
    	alert(showalert);
	}
    else
    {
    	addRow();
    }	
}

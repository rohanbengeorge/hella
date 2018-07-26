var nof_rows=0;
var tableid	 = document.getElementById("Table");
var cur_row=1;
var table_len;
var toDel_rowno
obj_Table = new Table();


function Student(formElm) 
{
	var name = formElm['name'].value;
	var email = formElm['email'].value;
	var dob = formElm['DOB'].value;
	var age = formElm['Age'].value;
	var address = formElm['Address'].value;
	this.getDetails = function()
	{
		console.log(name, age);
	}
	this.isvalid = function() 
	{
		var showalert="";
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
			return true;
	    	//addRow();
	    }			
	}
	this.return_values = function(val) 
	{
		switch(val)
		{
			case 1:return name;
			case 2:return email;
			case 3:return dob;
			case 4:return age;
			case 5:return address;
		}
	}
}

function Table() 
{
	var multiArray = [];
	// for (var i = 0; i < multiArray.length; i++)
	// {
	// 	multiArray[i] = new Array(5);
	// }

	this.addDetails= function(temp_Obj)
	{
		// multiArray[nof_rows][0]=temp_Obj.return_values(1);
		// multiArray[nof_rows][1]=temp_Obj.return_values(2);;
		// multiArray[nof_rows][2]=temp_Obj.return_values(3);
		// multiArray[nof_rows][3]=temp_Obj.return_values(4);
		// multiArray[nof_rows][4]=temp_Obj.return_values(5);
		multiArray.push(temp_Obj);
	}
	this.displayTable= function()
	{	

		table_len=document.getElementsByTagName("tr").length;
		for (var i = 0; (i < table_len-1 );i++) 
		{
			tableid.deleteRow(1);
		}
		if (cur_row>nof_rows) 
		{
			obj_Table.prev();
			return;
		}		
		for (var i = cur_row-1; i<nof_rows && i <(cur_row+2); i++) 
		{
			var table = document.getElementById("Table");
		    var row = table.insertRow(-1);
		    var cell1 = row.insertCell(0);
		    var cell2 = row.insertCell(1);
		    var cell3 = row.insertCell(2);
		    var cell4 = row.insertCell(3);
		    var cell5 = row.insertCell(4);
		    var cell6 = row.insertCell(5);

		    cell1.innerHTML = multiArray[i].return_values(1);	
		    cell2.innerHTML = multiArray[i].return_values(2);
		    cell3.innerHTML = multiArray[i].return_values(3);
		    cell4.innerHTML = multiArray[i].return_values(4);
		    cell5.innerHTML = multiArray[i].return_values(5);
		    cell6.innerHTML = '<button type="button" onclick="del('+i+')">Delete</button>';
		    //toDel_rowno=i;
	 	}
	}
	this.prev= function()
	{
		if (cur_row>3) 
		{
			cur_row=cur_row-3;
			obj_Table.displayTable();
		}
	}
	this.next= function()
	{
		if (cur_row+3<=nof_rows) 
		{
			cur_row=cur_row+3;
			obj_Table.displayTable();
		}	
	}	
	this.del= function(row_no)
	{
		multiArray.splice(row_no,1);		
		obj_Table.displayTable();
	}
	this.sort_name= function()
	{
		multiArray.sort(function(a, b)
		{
		 	var nameA = a.return_values(1).toUpperCase(); // ignore upper and lowercase
		 	var nameB = b.return_values(1).toUpperCase(); // ignore upper and lowercase
		 	if (nameA < nameB) 
		 	{
		   		return -1;
		 	}
		 	if (nameA > nameB) 
		 	{
		   		return 1;
		 	}
		 	return 0;  
		});
		obj_Table.displayTable();
	}
	this.sort_dob= function()
	{
		multiArray.sort(function(a, b)
		{
		 	var nameA = a.return_values(3).toUpperCase(); // ignore upper and lowercase
		 	var nameB = b.return_values(3).toUpperCase(); // ignore upper and lowercase
		 	if (nameA < nameB) 
		 	{
		   		return -1;
		 	}
		 	if (nameA > nameB) 
		 	{
		   		return 1;
		 	}
		 	return 0;  
		});
		obj_Table.displayTable();
	}
	this.sort_age= function()
	{
		multiArray.sort(function(a, b){return a.return_values(4) - b.return_values(4)});
		obj_Table.displayTable();
	}			
	
}

function addRow() 
{
	event.preventDefault();
	obj_student = new Student(document.forms[0]);
	if(obj_student.isvalid()) 
	{
		obj_Table.addDetails(obj_student);
		nof_rows=nof_rows+1;
		obj_Table.displayTable();	
	}	
}
function next1() 
{
	obj_Table.next();
}
function prev1() 
{
	obj_Table.prev();
}
function del(row_no)
{
	nof_rows--;
	obj_Table.del(row_no);
}
function sorts_name()
{
	
	obj_Table.sort_name();
}
function sorts_age()
{
	obj_Table.sort_age();
}
function sorts_dob()
{
	obj_Table.sort_dob();
}


			var x = document.getElementById("id22");
		x.addEventListener("mouseover", obj_Table.sort_name);

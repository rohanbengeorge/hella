
var nof_rows=0;
var temp_nof=0;
var tableid	 = document.getElementById("Table");
var formid =document.forms[0];
var listid = document.getElementById("list");
var cur_row=1;
var table_len;
var toDel_rowno
obj_Table = new Table();
var multiArray = [];
formid.style.display='block';
listid.style.display='none';
var obj_locStorage = new local_Storage();

function Student(formElm) 
{
	var name = formElm['name'].value;
	var email = formElm['email'].value;
	var dob = formElm['DOB'].value;
	var age = formElm['Age'].value;
	var address = formElm['Address'].value;
	this.aaa=10;
	// this.getDetails = function()
	// {
	// 	console.log(name, age);
	// }
	this.isvalid = function() 
	{
		var showalert="";
		if(dob=="")
		{
			showalerttemp_stu="\nEnter the date";
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
	this.return_values1 = function(val) 
	{
		switch(val)
		{
			case 1:return this.name;
			case 2:return this.email;
			case 3:return this.dob;
			case 4:return this.age;
			case 5:return this.address;
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
	this.store_item1= function(arr,temp_stu,i)
	{
		typeof(temp_stu);
		temp_stu.name=arr[i].name;
		temp_stu.email=arr[i].email;
		temp_stu.dob=arr[i].dob;
		temp_stu.age=arr[i].age;
		temp_stu.address=arr[i].address;

		return temp_stu;
	}
	
	this.store_item= function(arr,temp_stu,i)
	{
		temp_stu[i].name=arr[i].name;
		temp_stu[i].email=arr[i].email;
		temp_stu[i].dob=arr[i].dob;
		temp_stu[i].age=arr[i].age;
		temp_stu[i].address=arr[i].address;

		//return temp_stu;
	}
}


function local_Storage()
{

	this.intial= function()
	{
		var temp_arr=[];
		var obj_student;
		// if(nof_rows>temp_nof)
		// {	var temp=JSON.parse(localStorage.array);
		// 	var t= nof_rows- temp_nof;
			for (var i = 0; i < nof_rows; i++)
			{
		 		obj_student= new Student(document.forms[0]);
		// 		//adasdasdasasdadadas
				
		// 		obj_student =obj_student.store_item1(temp,obj_student,i);
				obj_Table.intial(obj_student);
				//temp_arr.push(obj_student);

		 	}

		// }	
		
		//	
					
		//return temp_arr;

	}	
	this.getDetails= function(temp_arr)
	{


		//var a=localStorage.array;
		var temp=JSON.parse(localStorage.array);
		for (var i = 0; i < nof_rows; i++)
		{
			temp_arr[i].store_item(temp,temp_arr,i);
		}
		return temp_arr;

	}	
	this.putDetails= function()
	{
		//alert("put");
		var temp_arr = [];var temp= obj_Table.return_values(1);
		for (var i = 0; i < nof_rows;i++) 
		{
			var obj= new Object();
			obj.name = temp[i].return_values1(1);	
		    obj.email = temp[i].return_values1(2);
		    obj.dob = temp[i].return_values1(3);
		    obj.age = temp[i].return_values1(4);
		    obj.address = temp[i].return_values1(5);

			temp_arr.push(obj);			
		}
		//temp_arr = obj_Table.return_values(2);

		//temp_arr=temp_arr.toString();
		// if(nof_rows>0 && temp_nof<nof_rows)
		// {
		// 	var aaa=JSON.parse(localStorage.array);
		// 	aaa[nof_rows+1]=temp_arr;nof_rows++;
		// 	temp_nof=nof_rows;
		// 	localStorage.array=JSON.stringify(aaa);
		// }
		//else
		{
			localStorage.array=(JSON.stringify(temp_arr));
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
	this.intial=function(t_student)
	{
		multiArray.push(t_student);
	}
	this.addDetails= function(temp_Obj)
	{
		// multiArray[nof_rows][0]=temp_Obj.return_values(1);
		// multiArray[nof_rows][1]=temp_Obj.return_values(2);;
		// multiArray[nof_rows][2]=temp_Obj.return_values(3);
		// multiArray[nof_rows][3]=temp_Obj.return_values(4);
		// multiArray[nof_rows][4]=temp_Obj.return_values(5);
		multiArray.push(temp_Obj);
		//multiArray=multiArray.toString();
		//localStorage.array=JSON.stringify(multiArray);
		obj_locStorage.putDetails();
	}
	this.displayTable= function()
	{	
		
		//var a=localStorage.array;
		//multiArray=JSON.parse(localStorage.array);
		// if(temp_nof<nof_rows)
		// {
			//var aaa= new Student(document.forms[0]);
			//obj_locStorage.intial(multiArray);
			//temp_nof++;//multiArray.push(aaa);

		//}	
		if (nof_rows>0)
		{
			obj_locStorage.intial();
			multiArray=obj_locStorage.getDetails(multiArray);
		}
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

		    cell1.innerHTML = multiArray[i].return_values1(1);	
		    cell2.innerHTML = multiArray[i].return_values1(2);
		    cell3.innerHTML = multiArray[i].return_values1(3);
		    cell4.innerHTML = multiArray[i].return_values1(4);
		    cell5.innerHTML = multiArray[i].return_values1(5);
		    cell6.innerHTML = '<button type="button" class="btn btn-light" onclick="del('+i+')">Delete</button>';
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
		obj_locStorage.putDetails();

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
	this.return_values = function(val) 
	{
		return multiArray;
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
	localStorage.nof_rows=nof_rows;
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
function addFormDetails()
{
	event.preventDefault();
	obj_student1 = new Student(document.forms[0]);
	if(obj_student1.isvalid()) 
	{
		nof_rows=nof_rows+1;
		temp_nof++;
		obj_Table.addDetails(obj_student1);
		

		localStorage.nof_rows=nof_rows;
		//obj_Table.displayTable();	
	}	
}







var col1id=document.getElementById("col1");
var col2id=document.getElementById("col2");
function displayTable()
{
	formid.style.display='none';
	listid.style.display='block';

	var n=parseInt(localStorage.nof_rows);
	if(n!=nof_rows)
	{
			nof_rows=n;
			obj_locStorage.intial();
	}	
	
	
	obj_Table.displayTable();
	col1id.style.backgroundColor='white';
	col2id.style.backgroundColor='grey';


}
function displayForm()
{
	formid.style.display='block';
	listid.style.display='none';
	col2id.style.backgroundColor='white';
	col1id.style.backgroundColor='grey';
}

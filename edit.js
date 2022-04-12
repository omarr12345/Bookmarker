var siteName=document.getElementById("sitename");
var siteUrl=document.getElementById("siteurl");
var subButton=document.getElementById("subbutton");
var output=document.getElementById("output");
var bookmarksContainer=[];
var bookmarks;


if(localStorage.getItem("bookmarksContainer")==null){
	bookmarksContainer=[];
}

else{
	
	bookmarksContainer=JSON.parse(localStorage.getItem("bookmarksContainer"));
	display();
}








function add(){
 
	
bookmarks={	
bname:siteName.value,
burl:siteUrl.value	
}

bookmarksContainer.push(bookmarks);
localStorage.setItem("bookmarksContainer",JSON.stringify(bookmarksContainer));	
}	
	
	
	
	


subButton.onclick=function()
{
add(); 
display();

}


function remove(input){
bookmarksContainer.splice(input,1);
localStorage.setItem("bookmarksContainer",JSON.stringify(bookmarksContainer));	
display();
	
	
}



function display(){
	
var trs="";
for(var i=0;i<bookmarksContainer.length;i++){	
trs+="<div style='text-align:center;width:1000px; margin-top:10px; background-color:grey;'><p>"+bookmarksContainer[i].bname+"</p><button class='button btn-primary'><a onclick='visit()' href='https://"+bookmarksContainer[i].burl+" ' style='color:white;'>visit</a></button><button class=' button btn-danger' onclick='remove("+i+")'>Remove</button></div>"



}
output.innerHTML=trs;

}


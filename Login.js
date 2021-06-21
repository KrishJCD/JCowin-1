
let email=document.getElementsByClassName("form-control1A");
let password=document.getElementsByClassName("form-control2A");
let phone=document.getElementsByClassName("form-control3A");

var emailVal="",phoneVal=0,passwordVal="";


window.onload=function(){
    document.getElementsByClassName("button")[0].onclick=function(){
        emailVal=email[0].value;
        passwordVal=password[0].value;
        phoneVal=phone[0].value;
        fetchDetails();
        if(checkUserOrNot())
        {
            alert('You are already an User!!!');
        }
        else   
            alert('You are not an User!!!');
    }
}

var allUsers=[];
var usercount=0;
var database;
function setup()
{
    database=firebase.database();
    database.ref('count').on("value",(data)=>{
        usercount=data.val();
    })

    
}

function draw()
{

}

function fetchDetails(){
    for(var i=0;i<usercount;i++){
        var fetchDetsRef=database.ref('userdet/user'+i);
        fetchDetsRef.on("value",(data)=>{
            allUsers.push(data.val());
        });
    }
}

function checkUserOrNot()
{
    var val;
    for(var i=0;i<allUsers.length;i++)
    {
        if(allUsers[i].email===emailVal && allUsers[i].phone===phoneVal && allUsers[i].password===passwordVal){
            val=true;
            return true;
        }
    }
    if(val===false)
        return false;
}
// function validate()
// {
// var username=document.getElementById("username").value;
// var password=document.getElementById("pass").value;
// alert('username is:'+username+'password is:'+password);
// }
// function checkData()
// {
// var items=document.getElementsByName("cake");
// var i;
// for (i=0;i<items.length;i++){
//     if(items[i].type=="checkbox"){
//         items[i].checked=true;
//     }
// }
// }
// function checkData()
// {
// var items=document.getElementsByName("starters");
// var i;
// for (i=0;i<items.length;i++){
//     if(items[i].type=="radio"){
//         items[i].checked=true;
//     }
// }
// }
// function countdata()
// {
//     var count=document.getElementsByTagName("h1");
//     alert("total"+count.length);
// }
// function getdata()

// {
//    document.getElementById("a1").textContent="WELCOME TO ALL";
//    document.getElementById("a1").style.color="blue";
//    document.getElementById("a1").style.fontWeight="larger";
//    document.getElementById("a1").style.backgroundColor="red";
// //    document.getElementById("a1").style.textShadow="5px 5px orange";
//    setTimeout(() => document.getElementById("a1").style.background = "yellow" ,500);
// }
// const btn = document.createElement("button");
// btn.innerHTML = "DEEPIKA";
// document.body.appendChild(btn);
// const int = document.createElement("input");
// int.value = "enter your name";
// document.body.appendChild(int);
// function setdata(){
//     var newline = document.createElement("br");
//  document.body.appendChild(newline);
//  var x=document.createElement("INPUT");
//      x.setAttribute("type","text");
//      x.setAttribute("value","hello mydear");
//      x.setAttribute("id","welcome");
    
//      x.style.backgroundColor="lightblue";
//      x.style.fontSize="50px";
//      x.style.fontFamily="Arial";
//      document.body.appendChild(x);
//      var newline = document.createElement("br");
//  document.body.appendChild(newline);
//  }
//  function remdata()
//  {
//    var deepi=document.getElementById("welcome");
//    deepi.remove();
//  } 
 function deepika()
 {
   var a=document.getElementById("getdata").getAttribute("id");
   alert(a);
   document.getElementById("puppy").innerHTML=a;
 }
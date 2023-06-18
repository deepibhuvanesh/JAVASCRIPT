function dee()
{
    var div=document.createElement("div");
    var text=document.createTextNode("Login Page");
    var input=document.createElement("input");
    var button=document.createElement("button");
    var buttontext=document.createTextNode("go");
   
   document.body.appendChild(div);
   div.appendChild(text);
   div.appendChild(input);
   div.appendChild(button);
   button.appendChild(buttontext);
}

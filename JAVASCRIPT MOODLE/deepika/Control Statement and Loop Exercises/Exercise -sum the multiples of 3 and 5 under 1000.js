var theValue=0;
for(let multNumber=1;multNumber<=10;multNumber++)
{
    if((multNumber%3==0)||(multNumber%5==0))
    {
        theValue+=multNumber;
    }
}
console.log(theValue);
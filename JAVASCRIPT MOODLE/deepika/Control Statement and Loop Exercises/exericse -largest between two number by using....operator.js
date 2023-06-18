var printValue=0;
for(let multNumber=1;multNumber<=10;multNumber++)
{
    if((multNumber%4==0)||(multNumber%6==0))
    {
        printValue+=multNumber;
    }
}
console.log(printValue);
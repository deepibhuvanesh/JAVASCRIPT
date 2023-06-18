function findDaysInMonth(Month,Year)
{
  if(Month<=12)
  {
    if(Month==2)
    {
    if((Year%4==0)&&(Year%100!=0)||(Year%400==0))
    {
    console.log('The month has 29 Days.');
    }
    else
    {
    console.log('The month has 28 Days.');
    }
    }    
    else if((Month==4)||(Month==6)||(Month==9)||(Month==11))
    {
    console.log('The month has 30 Days');
    }
    else
    {
    console.log('The month has 31 Days');
    }
    }
    else
    {
    console.log('Invalid month');
    }
}
findDaysInMonth(2,2012)
    

function checkLeapYear(getYear)
{
  if(((getYear%4==0)&&(getYear/100!=0))||(getYear%400==0))
  {
   console.log('Leap year');
  }
  else
  {
   console.log('not a leap year');
  } 
}
checkLeapYear(2023);
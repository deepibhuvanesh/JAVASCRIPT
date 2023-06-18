function findGrade(Students,Marks)
{
  if(Marks>=90&&Marks<=100)
  {
  console.log(Students+ ' S grade ');
  }
  else if(Marks>=80&&Marks<=90)
  {
  console.log(Students+ ' A grade ');
  }
  else if(Marks>=70&&Marks<=80)
  {
  console.log(Students+ ' B grade ');
  }
  else if(Marks>=60&&Marks<=70)
  {
  console.log(Students+ ' C grade ');
  }
  else if(Marks>=50&&Marks<=60)
  {
  console.log(Students+ ' D grade ');
  }
  else if(Marks>=40&&Marks<=50)
  {
  console.log(Students+ ' E grade ');
  }
  else if(Marks>=0&&Marks<=40)
  {
  console.log(Students+ 'Students Failed ');
  }
  else
  {
  console.log('Invalid Marks');  
  }
}
findGrade('PRASANTH',65);
findGrade('VIJAY',88);
findGrade('SUMITHRA',32);
findGrade('SUBIKSHA',49);
findGrade('MONICA',95);
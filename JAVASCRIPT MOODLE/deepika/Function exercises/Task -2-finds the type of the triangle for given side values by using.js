function findTriangleType(side1, side2, side3) 
{
    if((side1==side2)&&(side1==side3))
    {
    console.log('Equilateral triangle');
    }
    else if ((side1==side2)||(side2==side3))
    {
    console.log('Isosceles triangle');
    }
    else
    {
    console.log('Scalene triangle');
    }
}  
findTriangleType(100,100,100);
findTriangleType(300,300,500);
findTriangleType(200,400,600); 
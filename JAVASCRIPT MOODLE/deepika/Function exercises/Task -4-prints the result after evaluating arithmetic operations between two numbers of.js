function evalNumbers(num1,num2,symbols) 
  {
    if(symbols=='add')
    {
      console.log(' Addition of given number is '+(num1+num2));
    }
    else if(symbols=='subtract')
    {
      console.log(' Subtraction of given number is '+(num1-num2));
    }
    else if(symbols=='multiply')
    {
      console.log(' Multiplication  of given number is '+(num1*num2));
    }
    else if(symbols=='divide')
    {
      console.log(' Division of given number is '+(num1/num2));
    }
    else if(symbols=='modulus')
    {
      console.log(' Modulus of given number is '+(num1%num2));
    }
    else 
    {
       console.log(symbols+'Invalid operation');    
    }
  }  
  evalNumbers(10,20,'add'); 
  evalNumbers(100,75,'subtract'); 
  evalNumbers(15,15,'multiply');
  evalNumbers(54,6,'divide'); 
  evalNumbers(42,4,'modulus'); 
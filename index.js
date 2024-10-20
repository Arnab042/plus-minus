let number = 0;
let result;

document.getElementById('B1').onclick= function(){
    
    number = Number(number)
    number = number - 1;
    result = String(number);
    console.log(number)
    document.getElementById('myh1').textContent = result;

    
  

}
document.getElementById('B2').onclick= function(){
    
    number = Number(number)
    number = 0 ;
    result = String(number);
    console.log(number)
    document.getElementById('myh1').textContent  = result;

    
  

}
document.getElementById('B3').onclick= function(){
    
    number = Number(number)
    number = number + 1;
    result = String(number);
    console.log(number)
    document.getElementById('myh1').textContent = result;

    
  

}



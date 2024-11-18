
let firstNumber ;

let secondNumber ;



document.getElementById("submitBtn").onclick = function(){
    //getting the  firstNumber by html
    firstNumber = document.getElementById("firstNumber").value;
    //converting to "firstNumber" number
    firstNumber = Number(firstNumber);
      //getting the  secondNumber by html
    secondNumber = document.getElementById("secondNumber").value;
    //converting to "secondNumber" number
    secondNumber = Number(secondNumber);
    //addition of the two numbers
    let oneNumber = firstNumber + secondNumber ;
    //displaying the values
    document.getElementById("heading1").innerHTML = "the answer is" +  " " +  oneNumber ;
}

//subtraction method

document.getElementById("subtractBtn").onclick = function(){
//getting the  firstNumber by html
firstNumber = document.getElementById("firstNumber").value;
//converting to "firstNumber" number
firstNumber = Number(firstNumber);
  //getting the  secondNumber by html
secondNumber = document.getElementById("secondNumber").value;
//converting to "secondNumber" number
secondNumber = Number(secondNumber);
//addition of the two numbers
let oneNumber = firstNumber - secondNumber ;
//displaying the values
document.getElementById("heading1").innerHTML = "the answer is" +  " " +  oneNumber ;


}


//multiplication 
document.getElementById("multi").onclick = function(){
    //getting the  firstNumber by html
firstNumber = document.getElementById("firstNumber").value;
//converting to "firstNumber" number
firstNumber = Number(firstNumber);
  //getting the  secondNumber by html
secondNumber = document.getElementById("secondNumber").value;
//converting to "secondNumber" number
secondNumber = Number(secondNumber);
//addition of the two numbers
let oneNumber = firstNumber * secondNumber ;
//displaying the values
document.getElementById("heading1").innerHTML = "the answer is" +  " " +  oneNumber ;

}

//division

document.getElementById("division").onclick = function(){
        //getting the  firstNumber by html
firstNumber = document.getElementById("firstNumber").value;
//converting to "firstNumber" number
firstNumber = Number(firstNumber);
  //getting the  secondNumber by html
secondNumber = document.getElementById("secondNumber").value;
//converting to "secondNumber" number
secondNumber = Number(secondNumber);
//addition of the two numbers
let oneNumber = firstNumber / secondNumber ;
//displaying the values
document.getElementById("heading1").innerHTML = "the answer is" +  " " +  oneNumber ;

} 

//clear the calculator
document.getElementById("clear").onclick = function(){
    document.getElementById("heading1").textContent = " " ;
}

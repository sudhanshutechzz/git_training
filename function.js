console.log("welcome to javascript");
var x=addNumbers(5,7);
console.log("the addition is"+x);
function addNumbers(num1,num2)
{
    console.log("invoked- function statement");
    var result=num1+num2;
    return result;
}
//function expression
var addNumbers2=function(num1,num2)
{
    console.log("invoked -=Function expression");
    var result=num1+num2;
    return result;
}
var y=addNumbers2(5,7);
console.log("The addition is"+y);


var addNumbers3=(num1,num2)=>
{
    console.log("invoked-Arrow Function");
    var result=num1+num2;
    return result;
};
var z=addNumbers3(7,8);
console.log(z);
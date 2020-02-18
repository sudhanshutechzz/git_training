var country="India";
var myCompany=function()
{
    var compName="Capgemini";
    var myLocation=function(loc)
    {
        console.log(compName+" "+loc+" "+country);
    };
    return myLocation;
};
var myClosure=myCompany();
myClosure("Pune");
myClosure("Mumbai");
console.log("Country"+country);
var x=40;
function fun1()
{
    console.log("before modification"+x);
    var x=20;
    console.log("after modification"+x);

}
console.log("outside function"+x);
fun1();
console.log("outside function but after function call"+x);
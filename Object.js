var currrentDate=new Date();
console.log("current year is"+currrentDate.getFullYear());

//object literal
//singleton
var emp1={
    empid:111,
    empNmae:"Sudhanhsu",
    displayEmpDetails:function(){
        return "empid:"+this.empid+" "+"empNmae"+this.empNmae;
    }
};
console.log(emp1.displayEmpDetails());

//object constructor
//no singleton

var emp2=new Object();
emp2.empid=222;
emp2.empNmae="Sudhsnshus";
emp2.displayEmpDetails=function(){
    return "empid:"+this.empid+" "+"empNmae"+this.empNmae;
};
console.log(emp2.displayEmpDetails())

//constructor function

function Employee(empid,empname)
{
    this.empid=empid;
    this.empName=empname;
    this.displayEmpDetails=function()
    {
        return "empid:"+this.empid+" "+"empName"+this.empName;
    };
}
var emp3=new Employee(333,"Rahul");
console.log("employeeid"+emp3.empid);
console.log(emp3.empName);

var emp4=new Employee(331,"ahul");
console.log("employeeid"+emp4.empid);
console.log(emp4.empName);


function Person(){}

    Person.prototype.walk=function()
    {
        console.log("I am walking");
    };
    Person.prototype.sayHello=function()
    {
        console.log("hi I am Person");
    };

function Customer(){}
    Customer.prototype=new Person();
    Customer.prototype.sayHello=function()
    {
        console.log("hi i am customer");
    };
    Customer.prototype.sayGoodBye=function()
    {
        console.log("Goodbye from customer");
    };

var person=new Person();
person.sayHello();

var cust=new Customer();
cust.sayHello();
cust.walk();
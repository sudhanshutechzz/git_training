console.log("Welcome to type script");
var id1:number=100;
var id1=100;
var loc="Softra,Bangalore";
let noofempls=50000;
const compname="Softra";
if(true)
{
    var loc="Softra,Pune";
    let noofempls=70000;
    const compname="Softra IDC";
}
console.log("location"+loc);
console.log("no. of employees"+noofempls);
console.log(compname);
let var1:any;
var1="string value";
var1=27;
var1=false;
console.log(var1);

enum color{Red,Green,Blue};
var c:color=color.Green;
console.log(c);


function namefunction1(fname:string,lname="bachan"):string{
    if(lname){
        return fname+" "+lname;
    }
    else
    {
        return fname;
    }
    
}
var result2=namefunction1("sudhnahsu","rajpal");
console.log(result2);
var result2=namefunction1("sudhnahsu");
console.log(result2);


//Rest Operator
function nameFunction3(fname:string,...restofnames:string[])
{
    return fname+" "+restofnames.join(" ");
}
var result5=nameFunction3("rahul");
console.log(result5);
var result6=nameFunction3("rajesh","jignesh","nishant");
console.log(result6);
//String template
var si="Never gonna mess\\n never gonna let you down";

console.log(si);



const obj={first:'nagesh',last:'kumar',age:89}
const fi=obj.first;
console.log(fi);

//Object DE structuring
//after es6
const{first:fii,last:laa}=obj;
console.log(fii);
console.log(laa);
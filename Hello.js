console.log("Welcome to type script");
var id1 = 100;
var id1 = 100;
var loc = "Softra,Bangalore";
var noofempls = 50000;
var compname = "Softra";
if (true) {
    var loc = "Softra,Pune";
    var noofempls_1 = 70000;
    var compname_1 = "Softra IDC";
}
console.log("location" + loc);
console.log("no. of employees" + noofempls);
console.log(compname);
var var1;
var1 = "string value";
var1 = 27;
var1 = false;
console.log(var1);
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
    color[color["Blue"] = 2] = "Blue";
})(color || (color = {}));
;
var c = color.Green;
console.log(c);
function namefunction1(fname, lname) {
    if (lname === void 0) { lname = "bachan"; }
    if (lname) {
        return fname + " " + lname;
    }
    else {
        return fname;
    }
}
var result2 = namefunction1("sudhnahsu", "rajpal");
console.log(result2);
var result2 = namefunction1("sudhnahsu");
console.log(result2);
function nameFunction3(fname) {
    var restofnames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restofnames[_i - 1] = arguments[_i];
    }
    return fname + " " + restofnames.join(" ");
}
var result5 = nameFunction3("rahul");
console.log(result5);
var result6 = nameFunction3("rajesh", "jignesh", "nishant");
console.log(result6);
var si = "Never gonna mess\\n never gonna let you down";
console.log(si);
var obj = { first: 'nagesh', last: 'kumar', age: 89 };
var fi = obj.first;
console.log(fi);
//after es6
var fii = obj.first, laa = obj.last;
console.log(fii);
console.log(laa);

var a= Number(prompt("Enter first value "));
var b= Number(prompt("Enter second value "));
var o= prompt("Enter Operation e.g: +,-,*,/,%");
switch (o){
    case "+":
        alert(a+""+o+""+b+" = "+(a+b));
        break;
    case "-":
        alert(a+""+o+""+b+" = "+(a-b));
        break;
    case "*":
        alert(a+""+o+""+b+" = "+(a*b));
        break;
    case "/":
        alert(a+""+o+""+b+" = "+(a/b));
        break;
    case "%":
        alert(a+""+o+""+b+" = "+(a%b));
        break;
}
//assignment 2
var marks=[];
for(i=0; i<5; i++){
    marks[i]=Number(prompt("Enter Marks "));
}
var obtainMarks= marks[0]+marks[1]+marks[2]+marks[3]+marks[4];
var totalMarks= 500;
var percent= obtainMarks*100/totalMarks;
alert("Your Percentage is "+percent+"%");
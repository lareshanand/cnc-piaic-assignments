var name= prompt("Enter Your Name");
var dob= prompt("Enter Date of Birth");
var mob= prompt("Enter Month of Birth");
var yob= prompt("Enter Year of Birth");
var d= new Date();
var hour=d.getHours();
var day=d.getFullYear();
if(hour>=6 && hour<=11){
    var now="Good Morning";
}
else if(hour>=12 && hour<=13){
    var now="Good Afternoon";
}
else if(hour>=14&&hour<=18){
    var now="Good Evening";
}
else{
    var now="Good Night";
}
console.log("Hello "+name+" "+now);
console.log(dob+"/"+mob+"/"+yob);
var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var birth=new Date(dayNames[mob]+""+dob+", "+yob);
console.log(birth);
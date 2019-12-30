var courses=[];
var sno=1;
for(var i=0; i<5; i++){
    courses[i]=prompt("Enter Course "+sno++);
}
alert(courses);
var sno=1;
for(var j=0; j<5; j++){
    courses[j]=prompt("Course "+sno++, courses[j]);
}
alert(courses);
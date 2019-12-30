var input= Number(prompt("Enter the value"));
var ceil= Math.ceil(input);
var text="This is my dummy text";
var sliceText= text.slice(0,ceil);
var index=sliceText.length-1;
var reversed="";
for(var i=0; i<sliceText.length; i++){
    reversed+= sliceText.charAt(index--);
}
alert(reversed);
//second assignment
var str= prompt("Enter any text");
var firstStr= str.slice(0,1);
firstStr=firstStr.toUpperCase();
var otherStr= str.slice(1,str.length);
otherStr=otherStr.toLowerCase();
var sentence= firstStr+otherStr;
for(var j=0; j<str.length; j++){
    if(str.slice(j, j+1) === " "){
        sentence=sentence.slice(0,j+1)+sentence.charAt(j+1).toUpperCase()+sentence.slice(j+2);
    }
}
console.log(sentence);
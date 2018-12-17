var temp = 2; 
var tempstring = "2";

console.log


var _count = 0;
var element = document.getElementById("output")
function increment(){

    _count++;
    element.innerText = _count;
}

function decrement(){
    _count--;
element.innerText = _count;
}

function getVal(){
    var txt = document.getElementById("txt").value;
    alert(txt + "\n are you sure this your name?"); 
}
var newName = document.getElementById("hey")
function outputName(){
    var text1 = document.getElementById("txt").value;
    newName.innerText= text1 + ", hello";
   

}

var bigName = document.getElementById("Big")
function makeBig() {
    var text2 = document.getElementById("txt").value;
    bigName.innerText = text2 + " now your name is big!";
    console.log(text1);
}
var smallName = document.getElementById("Small")
function makeSmall() {
    var text3 = document.getElementById("txt").value;
    smallName.innerText = text3 + " now your name is small";
}

function color(){
    var text4 = document.getElementById("txt").value;
   
    var color = document.getElementById("operators").value;
    
    
    var x = document.getElementById("result").value = text4 + " is " + color;
    
    
}
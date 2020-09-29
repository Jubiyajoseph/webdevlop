var add=document.getElementById("inc");
var remove=document.getElementById("dec");

var count=document.getElementById("count");
var int=0;

function increment(){
    int=int+1;
    count.innerHTML=int;
}
function decrement(){
    int=int-1;
    count.innerHTML=int;
}
function reset(){
    int=0;
    count.innerHTML=int
}
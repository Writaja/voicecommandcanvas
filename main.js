x=0;
y=0;
var drawcircle="";
var drawrect="";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
document.getElementById("status").innerHTML="Systen is listening plese speak";
recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
var content=event.results[0][0].transcript;
console.log(content);
document.getElementById("status").innerHTML="The speech has been recognisied as- "+content;
if(content=="Circle"){
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="Started drawing circle";
    drawcircle="set";
}
if(content=="Rectangle"){
    x=Math.floor(Math.random()*900);
    y=Math.floor(Math.random()*600);
    document.getElementById("status").innerHTML="Started drawing rectangle";
    drawrect="set";
}
}
function setup(){
    canvas =createCanvas(900,600);
    
}
function draw(){
    if(drawcircle=="set"){
        radius=Math.floor(Math.random()*100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML="circle is drawn";
drawcircle="";

    }
    if(drawrect=="set"){
        rect(x,y,70,50);
        document.getElementById("status").innerHTML="rectangel is drawn";
        drawrect="";

    }
}


difference=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(550,400);
    canvas=createCanvas(550,400);
    canvas.position(700,130);
    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Posenet has initialised.");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);

    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;   
    difference=floor(leftWristX-rightWristX);

console.log("Left Wrist x is "+leftWristX+" Right wrist x is "+rightWristX+" Difference is "+difference);
}
}
function draw(){
    document.getElementById("font_size").innerHTML="The size of the font is - " + difference;
    background("purple");
    textSize(difference);
    fill("black");
    text("Hello!" , 50, 400);
}
function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,450);
    canvas.position(700,80);
    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Posenet has initialised.");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results);
}
}
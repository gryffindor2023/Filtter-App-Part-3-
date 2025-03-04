noseX=0;
noseY=0;

function preload(){
    moustash = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(300,300);  
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet Is Initialised");
}

function gotPoses(results){
    if(results.length > 0){
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-18;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
}
}

function draw(){
    image(video, 0, 0, 300, 300);
    image( moustash,noseX,noseY,30,30);
    fill(255,0,0);
    stroke(255,0,0);
}
function take_snapshot(){
    save('myFilterImage.png');
}





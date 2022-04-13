noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#878c88');
    document.getElementById("gapheightwidth").innerHTML = "The Width and Height of square is - " + difference + "px";
    fill('#4287f5');
    stroke('#4287f5');
    square(noseX, noseY, difference);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}
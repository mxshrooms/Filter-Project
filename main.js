function preload() {
    dognose = loadImage("dognose.png");
}

function setup() {
    canvas = createCanvas(450, 300);
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();
    canvas.position(430, 250);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('Model Loaded!');
}

function draw() {
    image(video, 0, 0, 450, 300);
    image(dognose, noseX, noseY, 90, 90);
}

noseX = 0;
noseY = 0;

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-70;
        noseY = results[0].pose.nose.y-155;
    }
}
function takepic() {
    save("myphoto.png");
}
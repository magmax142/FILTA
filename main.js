nosex="";
nosey="";
function preload(){
}


function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',GetResulto);
}

function draw(){
    image(video,0,0,300,300)
    fill("black");
    stroke("blue");
    circle(nosex,nosey,50)
}

function take_snapshot(){
    save('myFilterImage.png')
}

function modelLoaded(){
    console.log('Model loaded successflly')
}

function GetResulto(result){
    if(result.length > 0){
        console.log(result);
        nosex=result[0].pose.nose.x;
        nosey=result[0].pose.nose.y;
    }
}

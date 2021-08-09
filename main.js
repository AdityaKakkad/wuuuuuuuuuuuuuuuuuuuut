status = "";
objects = [];

function preload(){
    video = createVideo('video.mp4');
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.center();
    video.hide();
}

function draw(){
    image(video, 0, 0, 640, 480);

    if(status != ""){
        objectDetector.detect(video, gotResult);

        for(i = 0; i<objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";
            document.getElementById("no_of_objects").innerHTML = "No. of objects detected are" + objects.length;
            fill('indianred');
            percent = floor(objects[i].confidence*100)
            text(objects[i].label + " " + percent + "%" + "🔫🔫pichkari go brrrrrrr", objects[i].x + 15, objects[i].y + 15);
            nofill();
            stroke('indianred');
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
    
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status:Why u here"
}

function modelLoaded(){
    console.log("u are a smort guy you know how to open the console")
    console.log("Here is a gift for you");
    console.log("https://youtu.be/dQw4w9WgXcQ");
    console.log("open it you will be so surprised you will fall asleep");

    status = true;
    video.loop();
    video.speed(1);
    video.volume(0.5);
}

function gotResult(error, results){
    if(error){
        console.log(error + "HI HERE IS A HOT AND FRESH ERROR FOR YOU");
    }
    {
        console.log(results + "HI, BYE")
        objects = results;
    }
}
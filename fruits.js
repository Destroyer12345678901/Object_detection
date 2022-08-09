object = "";
status = "";
function preload(){
    img = loadImage("cap project131.jpeg");
}
function setup(){
    canvas = createCanvas(131,131);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById(status).innerHTML= "Detecting Objects";
}
function modelLoaded(){
    document.getElementById(status).value = true;
    objectDetector.detect(img,gotResults)
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}
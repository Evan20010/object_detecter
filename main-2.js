img = "";
Status = "";
objects = [];

function preload()
{
    img = loadImage('living_room.png');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: detecting objects";
}

function draw()
{
    image(img, 0, 0, 640, 420);
    if (Status !="")
    {
        for(i = 0; i<objects.lenght; i++)
        {
        document.getElementById("status").innerHTML="status: object detected";
        fill("#FF0000");
        percentage = floor(objects[i].confidence*100);
        text(objects[i].label+" "+percentage+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    }
}
}

function modelLoaded()
{
    console.log("model loaded");
    Status =  true;
    objectDetector.detect(img, gotresult);
}

function gotresult(error, result)
{
    if (error)
    {
        console.log(error);
    }
    
    console.log(result);
    objects = result;
}
img = "";

function preload()
{
    img = loadImage('bed.png');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bed", 59, 95);
    noFill();
    stroke("#FF0000");
    rect(50, 60, 570, 350);
}
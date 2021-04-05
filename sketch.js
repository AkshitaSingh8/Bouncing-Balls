var canvas;
var sound;
var surface1, surface2, surface3, surface4;
var box;
function preload(){
    sound = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    surface1 = createSprite(105,570,190,20);
    surface1.shapeColor = rgb(255,20,137);
    surface2 = createSprite(300,570,190,20);
    surface2.shapeColor = "yellow";
    surface3 = createSprite(495,570,190,20);
    surface3.shapeColor = "blue";
    surface4 = createSprite(690,570,190,20);
    surface4.shapeColor = "green";
    box = createSprite(random(20,750),300,30,30);
    box.shapeColor = "white";
    box.velocityX = -5;
    box.velocityY = 5;
    
}

function draw() {
    background(rgb(169,169,169));
    
    if(box.isTouching(surface1)){
        box.bounceOff(surface1);
        box.shapeColor = rgb(255,20,137);
        sound.play();
    }
    if(box.isTouching(surface2)){
        box.bounceOff(surface2);
        box.shapeColor = "yellow";
        box.velocityX = 0;
        box.velocityY = 0;
        //sound.stop();
    }
    if(box.isTouching(surface3)){
        box.bounceOff(surface3);
        box.shapeColor = "blue";
    }
    if(box.isTouching(surface4)){
        box.bounceOff(surface4);
        box.shapeColor = "green";
    }
    
    
    var edges = createEdgeSprites();
    box.bounceOff(edges);
    drawSprites();
}

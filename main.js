function preload(){

}
function setup(){
    canvas = createCanvas(650, 480);
    canvas.position(110, 250);
    Video = createCapture(VIDEO);
    Video.hide();
    
    Tint_Color = "";
}
function draw(){
    image(Video,0,0,650,480);
    tint(Tint_Color);
}
function take_snapshot(){
    save("filter.png");
}
function filter_tint(){
    Tint_Color = document.getElementById("color_name").value;
}
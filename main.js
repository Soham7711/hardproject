canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d")
function uploadBackground (){
    ctx.drawimage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground; 
    background_imgTag.src =concrete-road.jpg;

    greencar_imageTag = new image();
    greencar_imageTag.onload = uploadgreencar;
    greencar_imageTag.src = car2.png;
}
function up() {
    if (greencar_y >= 0) {
        greencar_y -= 10;
        console.log("When up arrow is pressed =" + greencar_x + "-" + greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}
function down() {
    if (greencar_y <= 500) {
        greencar_y += 10;
        console.log("When down arrow is pressed =" + greencar_x + "-" + greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}
function left() {
    if (greencar_x >= 0) {
        greencar_x -= 10;
        console.log("When  left arrow is pressed =" + greencar_x + "-" + greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}
function right() {
    if (greencar_x <= 700) {
        greencar_x += 10;
        console.log("When right arrow is pressed =" + greencar_x + "-" + greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

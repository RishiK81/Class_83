canvas = document.getElementById("Canvas1");
ctx = canvas.getContext("2d");
color = "black";
line_Width = 1

var last_X
var last_Y

var width_Screen = screen.width
var height_Screen = screen.height

newWidth_Screen = width_Screen - 70
newHeight_Screen = height_Screen - 300

if (width_Screen < 992) {
    document.getElementById("Canvas1").width = newWidth_Screen
    document.getElementById("Canvas1").height = newHeight_Screen
    document.body.style.overflow = "hidden"
}

canvas.addEventListener("touchstart", touchstart_Function)
function touchstart_Function(e){
    color = document.getElementById("color").value
    line_Width = document.getElementById("lineWidth_Number").value
    last_X = e.touches[0].clientX - canvas.offsetLeft
    last_Y = e.touches[0].clientY - canvas.offsetTop
}

function colorInput_getText(){
    color = document.getElementById("color").value
}

canvas.addEventListener("touchmove", touchmove_Function)
function touchmove_Function(e){
    current_X = e.touches[0].clientX - canvas.offsetLeft
    current_Y = e.touches[0].clientY - canvas.offsetTop

    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = line_Width

    ctx.moveTo(last_X, last_Y)

    ctx.lineTo(current_X, current_Y)
    ctx.stroke()
    

    last_X = current_X
    last_Y = current_Y
}

function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
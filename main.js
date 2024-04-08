canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "grey".
    Use lineWidth and set the width to 1.
    Use rect() to create a rectangle at 150 and 143
with 430 width and 200 height.
*/

ctx.beginPath()
ctx.strokeStyle()= "grey";
ctx.linewidth() = 1;
ctx.rect()(x = 150, y = 143, width = 430, height = 200);
ctx.stroke();

/*
    Use beginPath() function to begin a path.
    Then, use strokeStyle to set the color to "blue".
    Use lineWidth and set the width to 5.
    Use arc() to create a circle at x = 250 and y = 210
with 40 as radius, 0 startAngle and 2 * Math.PI endAngle.
*/

ctx.beginPath();
ctx.strokeStyle()= "blue";
ctx.linewidth() = 5;
ctx.arc()(x = 250, y = 210, r = 40, startAngle = 0, endAngle = 2 *Math.PI);
ctx.stroke();

// Similarly, create a black circle with position 350 and 210
function draw()
{
    var canvas = document.getElementById("circle")
    if(canvas.getContext)
    {
        var ctx = canvas.getContext("2d")
        
    }
    var X = canvas.width/2;
    var Y = canvas.height/2;
}

// Similarly, create a red circle with position 210 and 40

// Similarly, create an orange circle with position 300 and 250

// Similarly, create a green circle with position 400 and 250
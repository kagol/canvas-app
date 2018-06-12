/**
 * 心形
 * @param {*} context 
 * @param {*} begin_x 
 * @param {*} begin_y 
 * @param {*} size 
 * @param {*} precision 
 */
function drawHeart(context, begin_x, begin_y, size, precision) {
    context.beginPath();
    context.translate(begin_x, begin_y);
    context.rotate(Math.PI);
    for(var i=0; i<precision; i++) {
        var step = i/precision*(Math.PI*2);
        var x = size * (16 * Math.pow(Math.sin(step), 3));
        var y = size * (13 * Math.cos(step) - 5 * Math.cos(2 * step) - 2 * Math.cos(3 * step) - Math.cos(4 * step));
        context.lineTo(x, y);
    }
    context.fillStyle = 'red';
    context.fill();
}

window.onload = function() {
    var canvasMain = document.getElementById('cvs-main');
    var context = canvasMain.getContext('2d');
    drawHeart(context, 400, 400, 10, 1000);

    var begin_x = 200;
    var begin_y = 400;
    var precision = 360;
    var size = 10;
    drawHeart(context, begin_x, begin_y, size, precision);
}
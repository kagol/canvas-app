/**
 * 水滴�
 * @param {*} context 
 * @param {*} begin_x 
 * @param {*} begin_y 
 * @param {*} size 
 * @param {*} precision 
 */
export function drawWaterDrop(context, begin_x, begin_y, size, precision) {
    context.beginPath();
    context.translate(begin_x, begin_y);
    context.rotate(3*Math.PI/2);
    for(var i=0; i<precision; i++) {
        var step = i/precision*(Math.PI*2);
        var x = size * Math.cos(step);
        var y = size * Math.sin(step)*Math.pow(Math.sin(step/2), 2);
        context.lineTo(x, y);
    }
    context.stroke();
}

// window.onload = function() {
//     var canvasMain = document.getElementById('cvs-main');
//     var context = canvasMain.getContext('2d');
//     var begin_x = 200;
//     var begin_y = 400;
//     var precision = 360;
//     var size = 100;
//     drawWaterDrop(context, begin_x, begin_y, size, precision);
// }
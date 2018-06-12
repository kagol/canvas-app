/**
 * 绘制多边形
 * @param {*} context 
 * @param {*} size 
 * @param {*} start_x 
 * @param {*} start_y 
 */
function drawPolygon(context, size, start_x, start_y) {
    // var num = 3;
    // context.moveTo(start_x, Math.sqrt(num) * size + start_y);
    // context.lineTo(size + start_x, start_y);
    // context.lineTo(2 * size + start_x, Math.sqrt(num) * size + start_y);
    // context.lineTo(start_x, Math.sqrt(num) * size + start_y);
    // context.stroke();

    var num = 6;
    context.beginPath();
    context.translate(300, 300);
    for(var i=0; i<num+1; i++) {
        context.lineTo(0, 100);
        context.rotate(2/num*Math.PI);
    }
    context.stroke();
    // context.fillRect(0, 0, 10, 10);
}

window.onload = function() {
    var canvasMain = document.getElementById('cvs-main');
    var context = canvasMain.getContext('2d');
    drawPolygon(context, 50, 200, 200);
}
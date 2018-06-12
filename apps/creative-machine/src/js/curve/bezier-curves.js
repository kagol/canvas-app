/**
 * 二阶贝塞尔曲线
 * @param {*} context 
 * @param {*} precision 
 * @param {*} control 
 */
function drawBezierCurves(context, precision, control) {
    var start_x = control.start_x;
    var start_y = control.start_y;
    var control_x = control.control_x;
    var control_y = control.control_y;
    var end_x = control.end_x;
    var end_y = control.end_y;
    console.log('control:', control);

    context.beginPath();
    context.moveTo(start_x, start_y);
    for(var i=0; i<precision; i++) {
        var t = i * (1/precision);
        console.log('t:', t);
        var x = Math.pow(1-t, 2) * start_x + 2*t*(1-t) * control_x + Math.pow(t, 2) * end_x;
        var y = Math.pow(1-t, 2) * start_y + 2*t*(1-t) * control_y + Math.pow(t, 2) * end_y;
        console.log('x:', x);
        console.log('y:', y);
        context.lineTo(x, y);
    }
    context.strokeStyle = 'red';
    context.stroke();
}

window.onload = function() {
    var canvasMain = document.getElementById('cvs-main');
    var context = canvasMain.getContext('2d');
    drawBezierCurves(context, 500, { 
        start_x: 25, start_y: 175, 
        control_x: 60, control_y: 80, 
        end_x: 170, end_y: 150 
    });
}
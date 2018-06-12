/**
 * 三阶贝塞尔曲线
 * @param {*} context 
 * @param {*} precision 
 * @param {*} control 
 */
function drawCubicBezierCurves(context, precision, control) {
    var start_x = control.start_x;
    var start_y = control.start_y;
    var control_a_x = control.control_a_x;
    var control_a_y = control.control_a_y;
    var control_b_x = control.control_b_x;
    var control_b_y = control.control_b_y;
    var end_x = control.end_x;
    var end_y = control.end_y;
    console.log('control:', control);

    context.beginPath();
    context.moveTo(start_x, start_y);
    for(var i=0; i<precision; i++) {
        var t = i * (1/precision);
        console.log('t:', t);
        var x = Math.pow(1-t, 3) * start_x + 3*t*Math.pow(1-t, 2) * control_a_x + 3*(1-t)*Math.pow(t, 2) * control_b_x + Math.pow(t, 3) * end_x;
        var y = Math.pow(1-t, 3) * start_y + 3*t*Math.pow(1-t, 2) * control_a_y + 3*(1-t)*Math.pow(t, 2) * control_b_y + Math.pow(t, 3) * end_y;
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
    var start_x = 25;
    var start_y = 175;
    var control_a_x = 60;
    var control_a_y = 80;
    var control_b_x = 150;
    var control_b_y = 30;
    var end_x = 170;
    var end_y = 150;
    var step = 200;
    drawCubicBezierCurves(context, 500, { 
        start_x: start_x+step, start_y: start_y+step, 
        control_a_x: control_a_x+step, control_a_y: control_a_y+step, 
        control_b_x: control_b_x+step, control_b_y: control_b_y+step, 
        end_x: end_x+step, end_y: end_y+step 
    });
}
import { drawText } from "./draw-text";
import { drawWaterDrop } from "./curve/water-drop";

window.onload = function() {
    var canvasMain = document.getElementById('cvs-main');
    var context = canvasMain.getContext('2d');

    var begin_x = 200;
    var begin_y = 100;
    var control_a_x = 300;
    var control_a_y = 200;
    var control_b_x = 400;
    var control_b_y = 200;
    var end_x = 500;
    var end_y = 100;

    // Canvas绘制二阶贝塞尔曲线
    context.beginPath();
    context.strokeStyle = '#FF0000';
    context.moveTo(begin_x, begin_y);
    context.bezierCurveTo(control_a_x, control_a_y, control_b_x, control_b_y, end_x, end_y);
    context.stroke();

    // Canvas绘制三阶贝塞尔曲线
    context.beginPath();
    context.strokeStyle = '#000';
    context.moveTo(begin_x, begin_y);
    context.quadraticCurveTo(control_a_x, control_a_y, end_x, end_y);
    context.stroke();

    drawText(context, "余温", { start_x: 130, start_y: 170 }, { color: '#FF0000' });


    var begin_x = 200;
    var begin_y = 400;
    var precision = 360;
    var size = 100;
    drawWaterDrop(context, begin_x, begin_y, size, precision);

}


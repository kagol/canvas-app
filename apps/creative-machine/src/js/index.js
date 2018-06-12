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

}


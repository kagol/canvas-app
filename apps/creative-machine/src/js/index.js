window.onload = function() {
    var canvasMain = document.getElementById('cvs-main');
    var context = canvasMain.getContext('2d');

    // var canvasMainBottom = document.getElementById('cvs-main');
    // var canvasMainTop = document.getElementById('cvs-main');
    // var canvasMainLeft = document.getElementById('cvs-main');
    // var canvasMainRight = document.getElementById('cvs-main');

    // var contextBottom = canvasMainBottom.getContext('2d');
    // var contextTop = canvasMainTop.getContext('2d');
    // var contextLeft = canvasMainLeft.getContext('2d');
    // var contextRight = canvasMainRight.getContext('2d');

    // drawLine(context);
    // drawHeart(context, 400, 400, 10, 1000);

    // drawHeartDescartes(context, 400, 300, 100, 1000, 'bottom');
    // drawHeartDescartes(context, 400, 600, 100, 1000, 'top');
    // drawHeartDescartes(context, 300, 400, 100, 1000, 'left');
    // drawHeartDescartes(context, 600, 400, 100, 1000, 'right');

    // drawBezierCurves(context, 500, { 
    //     start_x: 25, start_y: 175, 
    //     control_x: 60, control_y: 80, 
    //     end_x: 170, end_y: 150 
    // });


    // var start_x = 25;
    // var start_y = 175;
    // var control_a_x = 60;
    // var control_a_y = 80;
    // var control_b_x = 150;
    // var control_b_y = 30;
    // var end_x = 170;
    // var end_y = 150;

    // var step = 200;

    // context.moveTo(start_x, start_y);
    // context.bezierCurveTo(control_a_x, control_a_y, control_b_x, control_b_y, end_x, end_y);
    // context.stroke();

    // drawCubicBezierCurves(context, 500, { 
    //     start_x: start_x+step, start_y: start_y+step, 
    //     control_a_x: control_a_x+step, control_a_y: control_a_y+step, 
    //     control_b_x: control_b_x+step, control_b_y: control_b_y+step, 
    //     end_x: end_x+step, end_y: end_y+step 
    // });



    // drawImage(context, '../images/remaining_heat.jpg', {
    //     start_x: 750, start_y: 100
    // });

    // drawImage(context, '../images/remaining_heat.jpg', {
    //     start_x: 100, start_y: 100, width: 240, height: 240,
    //     source_x: 210, source_y: 70, source_width: 240, source_height: 240
    // });
    // drawImage(context, '../images/remaining_heat.jpg', {
    //     start_x: 400, start_y: 100, width: 280, height: 60,
    //     source_x: 180, source_y: 310, source_width: 280, source_height: 60
    // });
    // drawImage(context, '../images/remaining_heat.jpg', {
    //     start_x: 100, start_y: 400, width: 240, height: 240,
    //     source_x: 210, source_y: 360, source_width: 240, source_height: 240
    // });

    // var canvasText = document.getElementById('cvs-text');
    // var contextText = canvasText.getContext('2d');

    // drawText(context, "I'm stuck in a canvas. Someone let me out!", { start_x: 50, start_y: 150 }, { color: '#FF0000' });
    // drawText(contextText, "余温", { start_x: 130, start_y: 170 }, { color: '#FF0000' });

    // drawImage(context, '../images/girl.jpg', { start_x: 200, start_y: 200 });


    drawStar(context, 50, 20, 20);
}

function drawLine(context) {
    context.moveTo(10, 10);
    context.lineTo(400, 40);
    context.lineTo(200, 200);
    context.lineTo(10, 10);
    context.stroke();
}

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

function drawHeartDescartes(context, begin_x, begin_y, size, precision, position) {
    context.beginPath();
    context.translate(begin_x, begin_y);
    context.rotate(Math.PI);
    var start = 0;
    for(var i=0; i<precision; i++) {
        start += Math.PI*2/precision;
        var end = start + Math.PI*2/precision;

        //top: 1-sinx right: 1-cosx bottom: 1+sinx left: 1+cosx
        // var radius = size * (1 - Math.sin(start)); // top 
        // var radius = size * (1 - Math.cos(start)); // right
        // var radius = size * (1 + Math.sin(start)); // bottom
        // var radius = size * (1 + Math.cos(start)); // left

        var radius = size * (1 - Math.sin(start)); // 默认向上

        switch(position) {
            case 'top':
                radius = size * (1 - Math.sin(start));
                break;
            case 'right':
                radius = size * (1 - Math.cos(start));
                break;
            case 'bottom':
                radius = size * (1 + Math.sin(start));
                break;
            case 'left':
                radius = size * (1 + Math.cos(start));
                break;
        }

        context.arc(0, 0, radius, start, end, false);
    }
    context.fillStyle = 'red';
    context.fill();
}

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

function drawImage(context, image_src, coordinate_obj) {
    var start_x = coordinate_obj.start_x;
    var start_y = coordinate_obj.start_y;
    var width = coordinate_obj.width;
    var height = coordinate_obj.height;
    var source_x = coordinate_obj.source_x;
    var source_y = coordinate_obj.source_y;
    var source_width = coordinate_obj.source_width;
    var source_height = coordinate_obj.source_height;
    
    var img = new Image();
    img.onload = function() {
        if(start_x && start_y){
            if(width && height && source_x && source_y && source_width && source_height){
                context.drawImage(img, source_x, source_y, source_width, source_height, start_x, start_y, width, height);
            } else {
                context.drawImage(img, start_x, start_y);
            }
        }
    }
    img.src = image_src;
}

function drawText(context, text, position, font) {
    context.font = '20px Verdana,sans-serif';
    context.fillStyle = font.color;
    context.fillText(text, position.start_x, position.start_y);
}

function drawStar(context, size, start_x, start_y) {
    context.moveTo(start_x, Math.sqrt(3) * size + start_y);
    context.lineTo(size + start_x, start_y);
    context.lineTo(2 * size + start_x, Math.sqrt(3) * size + start_y);
    context.lineTo(start_x, Math.sqrt(3) * size + start_y);
    context.stroke();
}
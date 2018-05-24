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


    //原始图像
    // drawImage(context, '../images/girl.jpg', {
    //     start_x: 750, start_y: 100
    // });

    // //裁剪后的图像
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

    // //绘制文字
    // var canvasText = document.getElementById('cvs-text');
    // var contextText = canvasText.getContext('2d');
    // drawText(contextText, "余温", { start_x: 130, start_y: 170 }, { color: '#FF0000' });


    // // drawText(context, "I'm stuck in a canvas. Someone let me out!", { start_x: 50, start_y: 150 }, { color: '#FF0000' });

    drawImage(context, '../images/girl.jpg', { start_x: 1, start_y: 1, width: 600, height: 600, 
        source_x: 10, source_y: 300, source_width: 600, source_height: 600 });

    // handleImage(context);


    // drawStar(context, 50, 200, 200);


    // drawImage(context, '../images/remaining_heat.jpg', {
    //     start_x: 750, start_y: 100
    // });

    // var image_src = '../images/girl.jpg';
    // var img = new Image();
    // img.onload = function() {
    //     context.drawImage(img, 30, 300, 600, 600, 1, 1, 600, 600);

    //     // var imageData = context.getImageData(1, 1, 600, 600);
    //     // console.log('imageData:', imageData);

    //     // // context.putImageData(gaussBlur(imageData), 1, 1);
    //     // // context.putImageData(reliefProcess(imageData), 1, 1);
    //     // context.putImageData(grayProcess(imageData), 1, 1);grayProcess

    // }
    // img.src = image_src;


    var begin_x = 200;
    var begin_y = 400;
    var precision = 360;
    var size = 10;
    // drawWaterDrop(context, begin_x, begin_y, size, precision);

    // context.beginPath();
    // context.translate(begin_x, begin_y);
    // context.rotate(Math.PI);
    // for(var i=0; i<precision; i++) {
    //     var step = i/precision*(Math.PI*2);
    //     var x = size * (16 * Math.pow(Math.sin(step), 3));
    //     var y = size * (13 * Math.cos(step) - 5 * Math.cos(2 * step) - 2 * Math.cos(3 * step) - Math.cos(4 * step));
    //     context.lineTo(x, y);
    // }
    // // context.fillStyle = 'red';
    // // context.fill();
    // context.stroke();

    // drawWaterDrop(context, begin_x, begin_y, size, precision);

    // drawHeart(context, begin_x, begin_y, size, precision);



    // var canvasMain = document.getElementById('cvs-main');
    // var context = canvasMain.getContext('2d');

    // var begin_x = 200;
    // var begin_y = 100;
    // var control_a_x = 300;
    // var control_a_y = 200;
    // var control_b_x = 400;
    // var control_b_y = 200;
    // var end_x = 500;
    // var end_y = 100;

    // context.beginPath();
    // context.strokeStyle = '#FF0000';
    // context.moveTo(begin_x, begin_y);
    // context.bezierCurveTo(control_a_x, control_a_y, control_b_x, control_b_y, end_x, end_y);
    // context.stroke();


    // context.beginPath();
    // context.strokeStyle = '#000';
    // context.moveTo(begin_x, begin_y);
    // context.quadraticCurveTo(control_a_x, control_a_y, end_x, end_y);
    // context.stroke();

    // var image_src = document.getElementById('img-cat-rainbow');//'../images/girl.jpg';
    // imageToText(image_src);



}

function imageToText(img) {
    var canvas = document.querySelector('#cvs-main');
    var context = canvas.getContext('2d');
    var width = canvas.width, height = canvas.height;
    context.textBaseline = 'middle';
    context.font = 'bold 100px "Microsoft Yahei"';
    // 绘制方法
    var draw = function () {    
        context.clearRect(0, 0, width, height);
        // 渐变和纹理
        var gradient, pattern;
        // 创建材质canvas
        var canvasPattern = document.createElement('canvas');
        var contextUnder = canvasPattern.getContext('2d');
        canvasPattern.width = width;
        canvasPattern.height = height;
    
        // 创建渐变canvas
        var canvasGradient = document.createElement('canvas');
        var contextOver = canvasGradient.getContext('2d');
        canvasGradient.width = width;
        canvasGradient.height = height;

        // 绘制渐变对象
        gradient = contextOver.createLinearGradient(0, 0, 0, height);
        var red = '#FF0000';
        gradient.addColorStop(0, red);
        gradient.addColorStop(1, red);
    
        // 纹理对象，img指纹理图片对象
        pattern = contextUnder.createPattern(img, 'no-repeat');
        contextUnder.fillStyle = pattern;
        contextUnder.fillRect(0, 0, width, height);

        // 应用渐变
        // contextOver.fillStyle = gradient;
        // contextOver.fillRect(0, 0, width, height);

        // 叠加canvas
        contextOver.blendOnto(contextUnder, 'overlay');
    
        // 给当前context创建pattern
        pattern = context.createPattern(canvasPattern, 'no-repeat');
        
        // 绘制文本
        context.fillStyle = pattern;
        context.fillText('THANK YOU', 200, 1100);
        // context.fillText('YOU', 300, 800);
    };
    draw();
}

function grayProcess(imgData) {
    var pixes = imgData.data;
    var width = imgData.width;
    var height = imgData.height;
    for ( var x = 0; x < width-1; x++)
    {
        for ( var y = 0; y < height-1; y++)
        {

            var index = (x + y * width) * 4;
            var average = (pixes[index + 0] + pixes[index + 1] + pixes[index + 2]) / 3;
            pixes[index + 0] = average;
            pixes[index + 1] = average;
            pixes[index + 2] = average;
            pixes[index + 3] = 255;
        }
    }
    return imgData;
}

function reliefProcess(imgData) {

        var pixes = imgData.data;
        var width = imgData.width;
        var height = imgData.height;

        var copyData = [];
        for(var x=0;x<pixes.length-1;x++){
            copyData.push(pixes[x]);
        }
        var tempImgData = {
            width: width,
            height: height,
            data: copyData
        }
        for ( var x = 0; x < width-1; x++)
        {
            for ( var y = 0; y < height-1; y++)
            {

                // Index of the pixel in the array    
                var idx = (x + y * width) * 4;
                var bidx = ((x-1) + y * width) * 4;
                var aidx = ((x+1) + y * width) * 4;

                // calculate new RGB value
                var nr = copyData[aidx + 0] - copyData[bidx + 0] + 128;
                var ng = copyData[aidx + 1] - copyData[bidx + 1] + 128;
                var nb = copyData[aidx + 2] - copyData[bidx + 2] + 128;
                nr = (nr < 0) ? 0 : ((nr >255) ? 255 : nr);
                ng = (ng < 0) ? 0 : ((ng >255) ? 255 : ng);
                nb = (nb < 0) ? 0 : ((nb >255) ? 255 : nb);

                // assign new pixel value    
                pixes[idx + 0] = nr; // Red channel    
                pixes[idx + 1] = ng; // Green channel    
                pixes[idx + 2] = nb; // Blue channel    
                pixes[idx + 3] = 255; // Alpha channel    
            }
        }
        return imgData;
}

function gaussBlur(imgData) {
    console.log(imgData);
    var pixes = imgData.data;
    var width = imgData.width;
    var height = imgData.height;
    var gaussMatrix = [],
        gaussSum = 0,
        x, y,
        r, g, b, a,
        i, j, k, len;

    var radius = 30;
    var sigma = 5;

    a = 1 / (Math.sqrt(2 * Math.PI) * sigma);
    b = -1 / (2 * sigma * sigma);
    //生成高斯矩阵
    for (i = 0, x = -radius; x <= radius; x++, i++){
        g = a * Math.exp(b * x * x);
        gaussMatrix[i] = g;
        gaussSum += g;

    }
    //归一化, 保证高斯矩阵的值在[0,1]之间
    for (i = 0, len = gaussMatrix.length; i < len; i++) {
        gaussMatrix[i] /= gaussSum;
    }
    //x 方向一维高斯运算
    for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
            r = g = b = a = 0;
            gaussSum = 0;
            for(j = -radius; j <= radius; j++){
                k = x + j;
                if(k >= 0 && k < width){//确保 k 没超出 x 的范围
                    //r,g,b,a 四个一组
                    i = (y * width + k) * 4;
                    r += pixes[i] * gaussMatrix[j + radius];
                    g += pixes[i + 1] * gaussMatrix[j + radius];
                    b += pixes[i + 2] * gaussMatrix[j + radius];
                    // a += pixes[i + 3] * gaussMatrix[j];
                    gaussSum += gaussMatrix[j + radius];
                }
            }
            i = (y * width + x) * 4;
            // 除以 gaussSum 是为了消除处于边缘的像素, 高斯运算不足的问题
            // console.log(gaussSum)
            pixes[i] = r / gaussSum;
            pixes[i + 1] = g / gaussSum;
            pixes[i + 2] = b / gaussSum;
            // pixes[i + 3] = a ;
        }
    }
    //y 方向一维高斯运算
    for (x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
            r = g = b = a = 0;
            gaussSum = 0;
            for(j = -radius; j <= radius; j++){
                k = y + j;
                if(k >= 0 && k < height){//确保 k 没超出 y 的范围
                    i = (k * width + x) * 4;
                    r += pixes[i] * gaussMatrix[j + radius];
                    g += pixes[i + 1] * gaussMatrix[j + radius];
                    b += pixes[i + 2] * gaussMatrix[j + radius];
                    // a += pixes[i + 3] * gaussMatrix[j];
                    gaussSum += gaussMatrix[j + radius];
                }
            }
            i = (y * width + x) * 4;
            pixes[i] = r / gaussSum;
            pixes[i + 1] = g / gaussSum;
            pixes[i + 2] = b / gaussSum;
        }
    }
    console.log(imgData);
    return imgData;
}

function handleImage(context) {
    var imageData = context.getImageData(10, 10, 300, 300);
    console.log('imageData:', imageData.data);
}

function drawWaterDrop(context, begin_x, begin_y, size, precision) {
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
    // context.moveTo(start_x, Math.sqrt(3) * size + start_y);
    // context.lineTo(size + start_x, start_y);
    // context.lineTo(2 * size + start_x, Math.sqrt(3) * size + start_y);
    // context.lineTo(start_x, Math.sqrt(3) * size + start_y);
    // context.stroke();

    var num = 3;

    context.beginPath();
    context.translate(300, 300);

    for(var i=0; i<num+1; i++) {
        context.lineTo(0, 100);
        context.rotate(2/num*Math.PI);
    }

    context.stroke();

    context.fillRect(0, 0, 10, 10);

    // context.beginPath();
    // context.rotate(2/3 * Math.PI);

    // for(var i=0; i<num+1; i++) {
    //     context.lineTo(0, 100);
    //     context.rotate(2/num*Math.PI);
    // }

    // context.stroke();

    // context.beginPath();
    // context.rotate(4/3 * Math.PI);

    // for(var i=0; i<num+1; i++) {
    //     context.lineTo(0, 100);
    //     context.rotate(2/num*Math.PI);
    // }

    // context.stroke();

}
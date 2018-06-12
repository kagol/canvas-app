/**
 * 绘制图像
 * @param {*} context 
 * @param {*} image_src 
 * @param {*} coordinate_obj 
 */
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

window.onload = function() {
    var canvasMain = document.getElementById('cvs-main');
    var context = canvasMain.getContext('2d');
    drawImage(context, '../images/girl.jpg', { start_x: 1, start_y: 1, width: 600, height: 600, 
        source_x: 10, source_y: 300, source_width: 600, source_height: 600 });

    drawImage(context, '../images/remaining_heat.jpg', {
        start_x: 750, start_y: 100
    });

    //原始图像
    drawImage(context, '../images/girl.jpg', {
        start_x: 750, start_y: 100
    });

    //裁剪后的图像
    drawImage(context, '../images/remaining_heat.jpg', {
        start_x: 100, start_y: 100, width: 240, height: 240,
        source_x: 210, source_y: 70, source_width: 240, source_height: 240
    });
    drawImage(context, '../images/remaining_heat.jpg', {
        start_x: 400, start_y: 100, width: 280, height: 60,
        source_x: 180, source_y: 310, source_width: 280, source_height: 60
    });
    drawImage(context, '../images/remaining_heat.jpg', {
        start_x: 100, start_y: 400, width: 240, height: 240,
        source_x: 210, source_y: 360, source_width: 240, source_height: 240
    });
}


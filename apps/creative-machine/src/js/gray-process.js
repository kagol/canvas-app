/**
 * 灰度化
 * @param {*} imgData 
 */
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

window.onload = function() {
    var canvasMain = document.getElementById('cvs-main');
    var context = canvasMain.getContext('2d');
    var image_src = '../images/girl.jpg';
    var img = new Image();
    img.onload = function() {
        context.drawImage(img, 30, 300, 600, 600, 1, 1, 600, 600);
        var imageData = context.getImageData(1, 1, 600, 600);
        console.log('imageData:', imageData);
        context.putImageData(grayProcess(imageData), 1, 1);
    }
    img.src = image_src;
}
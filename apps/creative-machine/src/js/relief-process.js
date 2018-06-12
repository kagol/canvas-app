/**
 * 浮雕效果
 * @param {*} imgData 
 */
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
            var bidx = ((x-1) + y * width) * 4; // before
            var aidx = ((x+1) + y * width) * 4; // after

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

window.onload = function() {
    var canvasMain = document.getElementById('cvs-main');
    var context = canvasMain.getContext('2d');
    var image_src = '../images/girl.jpg';
    var img = new Image();
    img.onload = function() {
        context.drawImage(img, 30, 300, 600, 600, 1, 1, 600, 600);
        var imageData = context.getImageData(1, 1, 600, 600);
        console.log('imageData:', imageData);
        context.putImageData(reliefProcess(imageData), 1, 1);
    }
    img.src = image_src;
    }

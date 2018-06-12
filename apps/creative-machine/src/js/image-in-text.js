/**
 * 文字里嵌入图像
 * @param {*} img 
 */
function imageInText(img) {
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

window.onload = function() {
    var image_src = document.getElementById('img-cat-rainbow');//'../images/girl.jpg';
    imageInText(image_src);
}

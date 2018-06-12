/**
 * 绘制文本
 * @param {*} context 
 * @param {*} text 
 * @param {*} position 
 * @param {*} font 
 */
function drawText(context, text, position, font) {
    context.font = '20px Verdana,sans-serif';
    context.fillStyle = font.color;
    context.fillText(text, position.start_x, position.start_y);
}

window.onload = function() {
    var canvasText = document.getElementById('cvs-text');
    var contextText = canvasText.getContext('2d');
    drawText(contextText, "余温", { start_x: 130, start_y: 170 }, { color: '#FF0000' });
    drawText(contextText, "I'm stuck in a canvas. Someone let me out!", { start_x: 50, start_y: 150 }, { color: '#FF0000' });
}

/**
 * 笛卡尔心形线
 * @param {*} context 
 * @param {*} begin_x 
 * @param {*} begin_y 
 * @param {*} size 
 * @param {*} precision 
 * @param {*} position 
 */
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

window.onload = function() {
    var canvasMain = document.getElementById('cvs-main');
    var context = canvasMain.getContext('2d');
    drawHeartDescartes(context, 400, 300, 100, 1000, 'bottom');
    drawHeartDescartes(context, 400, 600, 100, 1000, 'top');
    drawHeartDescartes(context, 300, 400, 100, 1000, 'left');
    drawHeartDescartes(context, 600, 400, 100, 1000, 'right');
}

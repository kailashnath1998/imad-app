console.log('Loaded!');

var img = document.getElementById('img');
var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft + 10;   
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    var interval = setinterval(moveRight, 1);
    img.style.marginLeft = '100px';  
};

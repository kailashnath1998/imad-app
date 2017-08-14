console.log('Loaded!');

var img = document.getElementById('img');
var button = document.getElementById('counter');
var span = documnet.getElementById('count');
var marginLeft = 0;
var counter = 0;

function moveRight() {
    marginLeft = marginLeft + 10;   
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight, 50);
    //img.style.marginLeft = '100px';  
};

button.onclick = function() {
      
};


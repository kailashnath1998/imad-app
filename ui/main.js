console.log('Loaded!');

var img = document.getElementById('img');
var button = document.getElementById('counter');

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
      var request = new XMLHttpRequest();
      
      request.onreadystatechage = function() {
        if(request.readystate === XMLHttpRequest.DONE){
            if(request.status === 200){
                var c = request.responseText;
                var span = documnet.getElementById('count');
                console.log(span);
                span.innerHTML = c.toString();
            }        
        }
      };
      
      request.open('GET', 'http://kailashnath1998.imad.hasura-app.io/counter', true);
      request.send(null);
};


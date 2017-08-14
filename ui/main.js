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
      console.log('Clicked');
      var request = new XMLHttpRequest();
      console.log('request created');
      request.onreadystatechage = function() {
        if(request.readyState === XMLHttpRequest.DONE){
            console.log('Status 200');
            if(request.status === 200){
                //console.log('Status 200');
                var c = request.responseText;
                var span = document.getElementById('count');
                //console.log(span);
                span.innerHTML = c.toString();
            }        
        }
      };
      
      request.open('GET', 'http://kailashnath1998.imad.hasura-app.io/counter', true);
      request.send(null);
};


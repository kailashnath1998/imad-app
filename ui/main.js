console.log('Loaded!');

var img = document.getElementById('img');
var button = document.getElementById('counter');
var counter = 0;

var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft + 10;   
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight, 50);
    //img.style.marginLeft = '100px';  
};

button.onclick = function() {
      //console.log('Clicked');
      var request = new XMLHttpRequest();
      //console.log('request created');
      request.onreadystatechange = function() {
          console.log('satate chage');
        if(request.readyState === XMLHttpRequest.DONE){
            console.log('Status 200');
            if(request.status === 200){
                //console.log('Status 200');
                var counter = request.responseText;
                var span = document.getElementById('number');
                //console.log(span);
                span.innerHTML = counter.toString();
            }        
        }
      };
      
      request.open('GET', 'http://kailashnath1998.imad.hasura-app.io/counter', true);
      request.send(null);
      //console.log('request sent');
      /*counter++;
      console.log(counter.toString());
      var span = document.getElementById('number');
      //console.log(span);
      span.innerHTML = counter.toString();*/
};


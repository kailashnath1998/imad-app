console.log('Loaded!');

var img = document.getElementById('img');
var button = document.getElementById('counter');
var rstbtn = document.getElementById('reset');
var submit = document.getElementById('submit');

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
        //console.log('satate chage');
        if(request.readyState === XMLHttpRequest.DONE){
            //console.log('Status 200');
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

rstbtn.onclick = function() {
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200)
                console.log('reset sucessfull');
            else
                colsole.log('error '+ request.status.toString());
      }
      
    };
    
    request.open('GET', 'http://kailashnath1998.imad.hasura-app.io/resetc', true);
    request.send(null);
};

submit.onclick = function() {
    
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.reqdyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var names = request.responseText;
                var lis = "";
                names = JSON.parse(names);
                for(var i=0; i<names.length; i++){
                    lis+="<li>"+names[i]+"</li>";
                }
                var list = document.getElementById('list');
                list.innerHTML = lis;
            }
        }
    };
    
    var nameInput = document.getElementById('name');
    var name = nameInput.value; 
};
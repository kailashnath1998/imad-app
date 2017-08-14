var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var counter = 0;
app.get('/counter', function (req, res) {
  counter++;
  res.send(counter.toString());
});

app.get('/cdisp', function (req, res) {
  res.send(counter.toString());
});

var names = [];
app.get('/submit-name', function (req, res) {
  var name = req.query.name;
  names.push(name);
  res.send(JSON.stringify(names));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/resetc', function (req, res) {
  counter=0;
  res.send('sucess');
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

function createTemplet(data){
    var title = data.title;
    var date = data.date;
    var content = data.content;
    
    var reply = 
        `<html>
            <head>
                <title>${title} | Kailashnath</title>
                <meta name="viewport" content="width=device-width initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />
            </head>
            <body>
                <div class="container">
                    <div>
                        <a href="/">Home</a>
                    </div>
                    <hr/>
                    <h3>
                        ${title}
                    </h3>
                    <div>
                        ${date}
                    </div>
                    <div>
                        <p>
                            ${content}
                        </p>
                        <p>
                            Content1---Content1---Content1---Content1---Content1---Content1
                        </p>
                    </div>
                </div>
            </body>
        </html>`;
    return reply;

}

var articles = {
    aone: {
        title : 'AONE',
        date : '14 Aug, 2017',
        content : 'content---content---content---content'
    }
};
app.get('/:aname', function (req, res) {
    var an = req.parms.aname;
    console.log(an);
    res.send(createTemplet(articles[an]));
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var ArticleOne ={
    title: 'ArticleOne | Swapnil Das',
    date: '8 August 2017',
    heading:'Article One',
    content: 
            `<p>This is my first article .... Do read..And don't forget to subscribe my channel
                <div>
                The first article is all about my life.
                And what i wanna do in.
                </div>
             </p>`
};

function createTemplate (data){
    var title=data.title;
    var date=data.date;
    var content=data.content;
    var heading=data.heading;
    
var htmlTemplate=
`<html>
<head>
<title>${title}</title>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link href="/ui/style.css" rel="stylesheet" />

</head>
<body>
    <div class="container">
        <div>
            <a href ="/">Home
            </a>
        </div>
             <h1>${heading}</h1>
        <div>${date}</div>
    
        <div>
        ${content}
        </div>
        <hr/>
    </div>
</body>
</html>

`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res){
    res.send(createTemplate(ArticleOne));
});

app.get('/article-two', function(req, res){
    res.send('Article two will be served');
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

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
            `
            <h2>Something about SSD</h2>
            <hr/>
            <p>The first thing that comes to your mind is what is SSD?</p>
            <div id="ssd" ><p>SSD are storage devices which saves memory in block.. Unlike HDD which contains moving parts like a disk along with a laser reader, the SSD are known to save data in data blocks which are easy to read and write. Thus, increasing the capability of the PC ... Definitely, making it fast and instant. Users with built in ODD slot can replace their optical drives with SDD, making their PC/Laptops LIGHTNING FAST...:)</p></div>
            `
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
        <div id="butn">
            
 <button type="button"><a href="article-one"><a href ="/">Home</a></a></button>
<button type="button"><a href="article-one">Article One</a></button>
            
                Article Two
                Article Three
            </ul>
            
                
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
var counter=0;
app.get('/counter', function(req,res)
{
    counter=counter+1;
    res.send(counter.toString());
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

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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

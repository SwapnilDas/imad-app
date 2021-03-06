var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config ={
    user:'swapnildas',
    database:'swapnildas',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));


var articles = {
    
    
    'article-one' :{
        title: 'ArticleOne | Swapnil Das',
        date: '8 August 2017',
        heading:'Article One',
        content: 
                `
                <h2>KEEP CALM AND LEARN CODING!</h2>
                <hr/>
                <p>The first thing that comes to your is that what is coding? </p>
                <div><p>Coding is what makes it possible for us to create computer software, apps and websites. Your browser, your OS and the apps on your phone, Facebook, and this webpage-they all are made with code.</p></div>
                `
    },
    'article-two' :{title: 'ArticleOne | Swapnil Das',
        date: '22 August 2017',
        heading:'Article Two',
        content: 
                `
                <h2>KEEP CALM AND LEARN CODING!</h2>
                <hr/>
                <p>The first thing that comes to your is that what is coding? </p>
                <div><p>Coding is what makes it possible for us to create computer software, apps and websites. Your browser, your OS and the apps on your phone, Facebook, and this webpage-they all are made with code.</p></div>},
                `
    },
    'article-three' :{title: 'ArticleOne | Swapnil Das',
        date: '22 August 2017',
        heading:'Article Three',
        content: 
                `
                <h2>KEEP CALM AND LEARN CODING!</h2>
                <hr/>
                <p>The first thing that comes to your is that what is coding? </p>
                <div><p>Coding is what makes it possible for us to create computer software, apps and websites. Your browser, your OS and the apps on your phone, Facebook, and this webpage-they all are made with code.</p></div>`
        
    }
                
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
<button type="button"><a href ="/">Home</a></button>          
<button type="button"><a href="article-one">Next</a></button>
<button type="button"><a href="article-one">Last</a></button>
            
                
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


var pool = new Pool(config);
app.get('/test-db',function(req, res){
   // make a select request
   // return a response with the results
   pool.query('SELECT * FROM test', function(err, result){
      if (err){
                    res.status(500).send(err.toString());
              } 
      else res.send(JSON.stringify(result.rows));
   });
});

var counter=0;
app.get('/counter', function(req,res)
{
    counter=counter+1;
    res.send(counter.toString());
});






app.get('/:articleName', function (req,res){
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
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



var names = [];
app.get('/submit-name/:name' , function(req, res)
{
    var name = req.params.name;
    
    names.push(name);
    
    res.send(JSON.stringify(names));
});






// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

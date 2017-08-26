console.log('Loaded!');

// Counter code
var button = document.getElementById('counter');
var counter=0;

button.onclick = function(){
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and atore it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status ===200){
                var counter = request.responseText;
                var span =document.getElementById('count');
                span.innerHTML =counter.toString();
            }
        }
        //Not done yet
    };
    // Make the request
    request.open('GET', 'http://swapnildas.imad.hasura-app.io/counter', true);
    request.send(null);
    
};

//move the image
var img=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function()
    {
        var interval =setInterval(moveRight, 10);
        
    };
    
//Submit Names of the user
//Create comment box
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclicke = function(){
    //make a request to the server and send name
    //capture a list of names and render it as a list
    var names = ['name1', 'name2', 'name3'];
    var list = '';
    for(var i=0; i<names.length; i++)
        {
            list +='<li>' + names[i] + '</li>';
        }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};
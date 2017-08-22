console.log('Loaded!');

// Counter code
var button = document.getElementById('counter');
var counter=0;

button.onclick = function(){
    // Create a request object
    var request =new XMLHttpRequest();
    
    // Capture the response and atore it in a variable
    request.onreadystatechange = function(){
        if(request.readyState ===XMLHttpRequesr.DONE){
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
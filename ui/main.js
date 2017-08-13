console.log('Loaded!');

//move the image
var img=document.getElementById('madi');
var marginleft=0;
function moveRight(){
    marginLeft =marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick = function()
    {
        var interval =setInterval(moveRight, 100);
        img.style.marginLeft='100px';
    };
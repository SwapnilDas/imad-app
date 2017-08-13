console.log('Loaded!');

//move the image
var img=document.getElementById('madi');
function moveRight(){
    marginLeft =marginleft+1;
    img.style.marginLeft=marginleft+'px';
}
img.onclick = function()
    {
        var interval =setInterval(moveRight, 100);
        img.style.marginLeft='100px';
    };
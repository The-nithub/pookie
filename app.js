let img = document.getElementById('pookie');
let ot = document.getElementById('pic');



ot.addEventListener("click",function()
{
    img.setAttribute('src','assets/clk.jpg');
});

ot.addEventListener("mouseenter",function()
{
    img.setAttribute('src','assets/entr.jpg');
});

ot.addEventListener("mouseleave",function()
{
    img.setAttribute('src','assets/ext.jpg');
});
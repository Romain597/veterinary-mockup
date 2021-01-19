// JavaScript Document
CroixVet="";
function Init()
{
FinClignotementC();
}

function ClignotementC()
{
var img_clign=document.getElementById('image-croix').alt;
if(img_clign=="")
{
FinClignotementC();
document.getElementById('image-croix').alt="image1";
CroixVet=setInterval("CroixClign()", 500);
}
}

function FinClignotementC()
{
clearInterval(CroixVet);
CroixVet="";
document.getElementById('image-croix').src="images/croix_veto.png";
document.getElementById('image-croix').alt="";
}

function DefNAC()
{
var etat=document.getElementById('definitionNac').style.opacity;
if(etat==0)
{
document.getElementById('definitionNac').style.opacity=100;
}
else
{
document.getElementById('definitionNac').style.opacity=0;
}
}
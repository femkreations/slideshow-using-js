// JavaScript Document


var imageArray=["images/slide1.jpg","images/slide2.jpg","images/slide3.jpg","images/slide4.jpg","images/slide5.jpg","images/slide6.jpg"]

var imageCounter=0;

var imageElement=document.getElementById("slImage");

function changeImage(){
	imageElement.setAttribute("src",imageArray[imageCounter]);
	imageCounter++;
	if (imageCounter>=imageArray.length){
		imageCounter=0;
	}
}

var intervalHandle=setInterval(changeImage, 3000);

imageElement.onclick=function(){
	clearInterval(intervalHandle);
}
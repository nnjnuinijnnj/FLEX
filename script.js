window.onload = () => {

document.body.style.overflow = "hidden";

setTimeout(()=>{

document.body.style.overflow = "auto";

},2200);

};

function playVideo(id){

document.getElementById("player").style.display="flex";

document.getElementById("video").src=
"https://www.youtube.com/embed/"+id+"?autoplay=1";

}

document.getElementById("close").onclick=function(){

document.getElementById("player").style.display="none";

document.getElementById("video").src="";

}

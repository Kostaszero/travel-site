function chng(){
	document.body.classList.toggle("dm");
}

let arr=document.getElementById("top");
window.onscroll= () => {
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
		arr.style.display="block";
	}
	else{
		arr.style.display="none";
	}
}

$(document).ready( () => {
	$("#ta").click(function() {
    $('html,body').animate({
        scrollTop: $("#contTa").offset().top},
        1000);
	});
});

function srch(){
	let s=document.querySelector("input");
	window.location="http://www.google.com/search?q="+escape(s.value);
}
$(document).ready(()=>{
	$("p").click(()=>{
		$("#hovr").toggle();
	})
});




























/*
 // show/hide content
	*
	<div id="contTa">
		Show
	</div>
	<p id="txt" style="display: none;">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
	</p>
	*\/


let ch=document.getElementById("contTa");

ch.addEventListener("click", () => {
	if(ch.innerText === "Show"){
		ch.innerText="Hide";
	}
	else{
		ch.innerText="Show";
	}
});

$(document).ready( () => {
	$("#contTa").click(() => {
		$("#txt").toggle();
	})
} );
*/





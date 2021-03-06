'use strict';
var SLIDER = (function (DOC) {
	var slider = SLIDER || {};
	var next_effect = "slideInLeft";
	var prev_effect = 'slideInRight';
	var timeout = null;
	var first_content = function() {
		var elemento = DOC.querySelector("#banner-home > div > div:first-child");
		elemento.classList.remove("fadeOut");
		elemento.classList.add("ativo");
		elemento.classList.add(next_effect);
		elemento.classList.remove(prev_effect);
	},
	next = function(){
		console.log("[NEXT] : Click");
		var elemento = DOC.querySelector(".ativo");
		elemento.classList.add("fadeOut");
		if(elemento.nextElementSibling){
            elemento.nextElementSibling.classList.add("ativo");
            elemento.nextElementSibling.classList.add(next_effect);
            elemento.classList.remove(next_effect);
            elemento.classList.remove(prev_effect);
            elemento.classList.remove("ativo");
        }else{
        	elemento.classList.remove(next_effect);
        	elemento.classList.remove(prev_effect);
            elemento.classList.remove("ativo");
            first_content();
        }
	},
	prev = function(){
		console.log("[PREV] : Click");
        var elemento = DOC.querySelector(".ativo");
        elemento.classList.add("fadeOut");
        if(elemento.previousElementSibling){
            elemento.previousElementSibling.classList.add("ativo");
            elemento.previousElementSibling.classList.add(prev_effect);
            elemento.classList.remove("ativo");
            elemento.classList.remove(prev_effect);
            elemento.classList.remove(next_effect);
        }else{
            elemento.classList.remove("ativo");
            elemento.classList.remove(prev_effect);
            elemento.classList.remove(next_effect);			
            elemento = DOC.querySelector("#banner-home > div > div:last-child");
            elemento.classList.add("ativo");
            elemento.classList.add(prev_effect);
        }
    },
    bullet_create = function () {
    	console.log("[BULLET] : Create");
    	var sliders = DOC.getElementsByClassName("slider-item");
    	var bullet = DOC.getElementById("bullet");
    	var text = '';
    	for (var i = 0; i < sliders.length; i++) {
		    sliders[i].setAttribute('data-index', i);
		    text += "<span class='bullet-tag' data-index="+i+">"+i+"</span>";
		}
		bullet.innerHTML = text;
    },
	start = function () {
		var elemento = DOC.querySelector(".ativo");
		if(elemento.nextElementSibling){
            elemento.nextElementSibling.classList.add("ativo");
			elemento.classList.remove("ativo");
        }else{
			elemento.classList.remove("ativo");
            first_content();
        }
	};
	slider.init = function() {
		console.log("SLIDER INIT");
		var bannerHome = DOC.getElementById("banner-home");
		var imgW = DOC.querySelector("#banner-home > div > div.slider-item > img").clientWidth;
		var imgH = DOC.querySelector("#banner-home > div > div.slider-item > img").clientHeight;
		bannerHome.style.width = imgW + "px";
		bannerHome.style.height = imgH + "px";
		DOC.getElementById("next").addEventListener("click",next,false);
		DOC.getElementById("prev").addEventListener("click",prev,false);
		bullet_create();
		first_content();
		timeout = setTimeout(start, 5000);
	}
	return slider;
})(document);
SLIDER.init();


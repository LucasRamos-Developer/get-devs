'use strict';
var INDEX = (function (DOC) {
	var index = INDEX || {};
	var toggle_fade = function () {
		var cart = DOC.querySelector(".cart-content");
		cart.classList.toggle('fadeIn');
		cart.classList.toggle('fadeOut');
	};
	index.init = function() {
		console.log("INDEX INIT");
		DOC.getElementById("carrinho-compras").addEventListener("click",toggle_fade,false);
	}
	return index;
})(document);
INDEX.init();


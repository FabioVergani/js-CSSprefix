(function($w){'use strict';
	console.clear();


	var prefix,
	hit=function(a){return function(b){var r=b.match(a);return r===null?false:(hit.m=r,true);};};
	if(Object.keys($w.document.documentElement.style).some(hit(/^(webkit|moz|ms|o)[A-Z]/))){
	 prefix=hit.m[1];
	};


	console.dir(prefix);
})(this);

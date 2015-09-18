//createTag=d.createElement.bind(d),

var cssPrefix=(function(fake){
 var s=null,e=fake.style,
 p,o={'OAnimation':'-o-','MozAnimation':'-moz-','WebkitAnimation':'-webkit-'};
 for(p in o){if(p in e){s=o[p];break;};};
 return {vendor:s,str:'animation' in e?'':s};
})(createTag('fake'));

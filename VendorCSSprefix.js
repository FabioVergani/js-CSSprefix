/*
VendorCSSprefix
d.createElement('div')
cssPrefix
*/


var vendor=(function(e){var o=e.style, f=function(s){return s+'Transform' in o?s:false;};return f('webkit')||f('moz')||f('ms')||f('o')||null;})(document.documentElement);//ie:5.5, ff:1.5, sa:1.3, op:9.0


log=console.log.bind(console);
log(vendor);

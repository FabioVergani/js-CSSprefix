//createTag=d.createElement.bind(d),

var css=(function(fake){
 var p,e=fake.style,o={'O':'o','Moz':'moz','Webkit':'webkit'},x={prefix:'',vendor:null,animationEvent:{animation:{end:'animationend',start:'animationstart'}}};
 for(p in o){
  if(p+'Animation' in e){
	p=o[p];
	x.vendor='-'+p+'-';
	if(!'animation' in e){x.prefix=x.vendor;x.animationEvent={end:p+'AnimationEnd',start:p+'AnimationStart'};};
	break;
  };
 };
 return x;
})(createTag('fake'));

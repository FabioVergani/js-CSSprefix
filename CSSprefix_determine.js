//createTag=d.createElement.bind(d),

	var css=(function(fake){
		var p,e=fake.style,
		o={'O':'o','Moz':'moz','Webkit':'webkit'},
		a='Animation',
		s='animation',
		n='Name',
		t=a+n,
		x={prefix:'',vendor:null,animationName:s+n,animationEvent:{end:s+'end',start:s+'start'}};
		for(p in o) {
			if(p+a in e){
				n=o[p];
				x.vendor='-'+n+'-';
				if(!s in e){
					x.prefix=o;
					x.animationName=p+t;
					a=n+a;
					x.animationEvent={end:a+'End',start:a+'Start'};
				};
				break;
			};
		};
		return x;
	})(createTag('fake')),

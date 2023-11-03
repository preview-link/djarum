(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.BARBAWAH = function() {
	this.initialize(img.BARBAWAH);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.BEDA = function() {
	this.initialize(img.BEDA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.BERARTI = function() {
	this.initialize(img.BERARTI);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.BG = function() {
	this.initialize(img.BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.BINATANGCLOSED = function() {
	this.initialize(img.BINATANGCLOSED);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.BINATANG = function() {
	this.initialize(img.BINATANG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.BUKAN = function() {
	this.initialize(img.BUKAN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.LETSDOIT = function() {
	this.initialize(img.LETSDOIT);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.LOGOLA = function() {
	this.initialize(img.LOGOLA);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.LOGOTRIPLEBLENDED = function() {
	this.initialize(img.LOGOTRIPLEBLENDED);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.MIKIRDULU = function() {
	this.initialize(img.MIKIRDULU);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.MUSUHAN = function() {
	this.initialize(img.MUSUHAN);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.PHW = function() {
	this.initialize(img.PHW);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.TRIPLE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// TRIPLE
	this.instance = new lib.LOGOTRIPLEBLENDED();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.PHW_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// PHW
	this.instance = new lib.PHW();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.MUSUHAN_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MUSUHAN
	this.instance = new lib.MUSUHAN();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.MIKIR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MIKIR
	this.instance = new lib.MIKIRDULU();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.LOGO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// LOGO
	this.instance = new lib.LOGOLA();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.LETSDOIT_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// LETSDOIT
	this.instance = new lib.LETSDOIT();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.BUKAN_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BUKAN
	this.instance = new lib.BUKAN();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.BINATANGC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BINATANGC
	this.instance = new lib.BINATANGCLOSED();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BINATANGC, new cjs.Rectangle(0,0,320,480), null);


(lib.BINATANG_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BINATANG
	this.instance = new lib.BINATANG();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BINATANG_1, new cjs.Rectangle(0,0,320,480), null);


(lib.BG_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BG
	this.instance = new lib.BG();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.BG_1, new cjs.Rectangle(0,0,320,480), null);


(lib.BERARTI_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BERARTI
	this.instance = new lib.BERARTI();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.BEDA_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BEDA
	this.instance = new lib.BEDA();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


(lib.BAR = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// BAR
	this.instance = new lib.BARBAWAH();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(135));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,320,480);


// stage content:
(lib._320x480bbbm = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// PHW
	this.instance = new lib.PHW_1();
	this.instance.setTransform(160,240,1,1,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(165));

	// TRIPLE
	this.instance_1 = new lib.TRIPLE();
	this.instance_1.setTransform(160,240,1,1,0,0,0,160,240);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(64).to({_off:false},0).to({alpha:1},10,cjs.Ease.quintOut).wait(91));

	// LOGO
	this.instance_2 = new lib.LOGO();
	this.instance_2.setTransform(-243.1,829.75,1.8207,1.8207,-29.999,0,0,98.9,334.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).to({regX:99,regY:335,scaleX:1,scaleY:1,rotation:0,x:99,y:335},25,cjs.Ease.quintOut).wait(91));

	// LETSDOIT
	this.instance_3 = new lib.LETSDOIT_1();
	this.instance_3.setTransform(-340.2,240,1.725,1.725,0,0,0,159.9,240);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({regX:160,scaleX:1,scaleY:1,x:160},20,cjs.Ease.quintOut).wait(96));

	// BAR
	this.instance_4 = new lib.BAR();
	this.instance_4.setTransform(490,240,1,1,0,0,0,160,240);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).to({x:160},20,cjs.Ease.quintOut).wait(96));

	// BEDA
	this.instance_5 = new lib.BEDA_1();
	this.instance_5.setTransform(-3,240,1,1,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({x:160},14,cjs.Ease.quintOut).wait(151));

	// BUKAN
	this.instance_6 = new lib.BUKAN_1();
	this.instance_6.setTransform(-3,240,1,1,0,0,0,160,240);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(9).to({_off:false},0).to({x:160},14,cjs.Ease.quintOut).wait(142));

	// BERARTI
	this.instance_7 = new lib.BERARTI_1();
	this.instance_7.setTransform(-3,240,1,1,0,0,0,160,240);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(13).to({_off:false},0).to({x:160},14,cjs.Ease.quintOut).wait(138));

	// MUSUHAN
	this.instance_8 = new lib.MUSUHAN_1();
	this.instance_8.setTransform(-3,240,1,1,0,0,0,160,240);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(22).to({_off:false},0).to({x:160},14,cjs.Ease.quintOut).wait(129));

	// MIKIR
	this.instance_9 = new lib.MIKIR();
	this.instance_9.setTransform(76,176.05,0.0246,0.0246,0,0,0,75.2,176.8);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(29).to({_off:false},0).to({regY:176.9,scaleX:0.9897,scaleY:0.9897,y:176},14,cjs.Ease.bounceOut).wait(122));

	// BINATANGC
	this.instance_10 = new lib.BINATANGC();
	this.instance_10.setTransform(432.1,360,1.1416,1.1416,0,0,0,160.1,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({_off:true},34).wait(13).to({_off:false,x:230.1},0).to({_off:true},2).wait(35).to({_off:false,regX:160,scaleX:1,scaleY:1,x:230,y:240},0).to({_off:true},2).wait(44).to({_off:false},0).to({_off:true},2).wait(33));

	// BINATANG
	this.instance_11 = new lib.BINATANG_1();
	this.instance_11.setTransform(432.1,360,1.1416,1.1416,0,0,0,160.1,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({x:230.1},49,cjs.Ease.quintOut).to({regX:160,scaleX:1,scaleY:1,x:230,y:240},20,cjs.Ease.quintOut).wait(96));

	// BG
	this.instance_12 = new lib.BG_1();
	this.instance_12.setTransform(160,240,1,1,0,0,0,160,240);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(165));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-543.9,66,1193.9,1082.6);
// library properties:
lib.properties = {
	id: '6990383961524D45A2F69ED1F2A46F9A',
	width: 320,
	height: 480,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/BARBAWAH.png", id:"BARBAWAH"},
		{src:"images/BEDA.png", id:"BEDA"},
		{src:"images/BERARTI.png", id:"BERARTI"},
		{src:"images/BG.jpg", id:"BG"},
		{src:"images/BINATANGCLOSED.png", id:"BINATANGCLOSED"},
		{src:"images/BINATANG.png", id:"BINATANG"},
		{src:"images/BUKAN.png", id:"BUKAN"},
		{src:"images/LETSDOIT.png", id:"LETSDOIT"},
		{src:"images/LOGOLA.png", id:"LOGOLA"},
		{src:"images/LOGOTRIPLEBLENDED.png", id:"LOGOTRIPLEBLENDED"},
		{src:"images/MIKIRDULU.png", id:"MIKIRDULU"},
		{src:"images/MUSUHAN.png", id:"MUSUHAN"},
		{src:"images/PHW.png", id:"PHW"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['6990383961524D45A2F69ED1F2A46F9A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
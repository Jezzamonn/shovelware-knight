(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.image = function() {
	this.initialize(img.image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,187);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
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


(lib.Tool2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("Ag8DhQgIiMgaiHQgciTgriJQgMglAUgQIACAGQAPAHAQADQASADATgCIADgCIAJgGIAGgOIAJACQBUBUALB3QANCTBOB8QBWCJhRB3QgRAZgWAcQiPgRgJiXg");
	this.shape.setTransform(20.1,63.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AAGCBQgPgDgPgHIgCgGIgWgyQgSgtgDgwQgDgpAPglQAIgWATAAQA3AEAMA1QAKArAPAoQAQAsgQAyIgBAEIgGAOIgJAGIgDACIgRABQgKAAgKgCg");
	this.shape_1.setTransform(7,13.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tool2, new cjs.Rectangle(0,0,37.2,102.5), null);


(lib.Tool1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000099").s().p("ACTG7QgKAAgLgDIgIgJIgJgJIgGgJIgDgJIgCgJIAAgIIgBgJQgzglgLhDQgVh3gOh6QgPh3gah1QgPhGgChJIgDgGIgDgCQgKgEgLgBQgZgCgZAAIgDAJIgFAJIgFAIIgMATQgLAPACAUQADAYgPATQgEAFgGAFIgOABQghgBgEgdQgGgoANgmQARgwAdgpQAOgSARgBQApAAApACIAyACQATACATAAQA5BEACBbQAECdAsCQQAsCQBDCJQAlBKg0A7QgDADgEABQgGADgIAAIgQAAIgfgBg");
	this.shape.setTransform(24.5,44.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tool1, new cjs.Rectangle(0,0,49,88.9), null);


(lib.dirt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(100,82,17,0.498)").s().p("AglA7IgGgFQgNgNABguQAAgwAIgIQAHgHAoABQAnAAAHAIQAJAIABAqQABAtgHAMQgFAJgNAEQgKAGgQABIgGAAQgbAAgKgJg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.dirt, new cjs.Rectangle(-5.6,-6.8,11.2,13.6), null);


(lib.cavity = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCAhQghgOAKgkQADgKAJgDQAfgMAIAhQAJAigiAJIgDgBg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.cavity, new cjs.Rectangle(-2.8,-3.4,5.6,6.8), null);


(lib.Tooth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.mouseChildren = false;
		
		this.dirtiness = 1;
		this.cavitiness = 1;
		
		this.cavity.visible = false;
		//this.dirt.visible = false;
		
		var frequency = 10;
		stage.enableMouseOver(frequency);
		
		this.addEventListener("mouseover", onOver.bind(this));
		
		function onOver() {
			this.cavity.visible = true;
			this.dirt.visible = false;
		}
		
		this.addEventListener("mouseout", onOut.bind(this));
		
		function onOut() {
			this.cavity.visible = false;
			this.dirt.visible = false;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Cavity
	this.cavity = new lib.cavity();
	this.cavity.name = "cavity";
	this.cavity.parent = this;
	this.cavity.setTransform(2,-0.2);

	this.timeline.addTween(cjs.Tween.get(this.cavity).wait(1));

	// Layer_5
	this.dirt = new lib.dirt();
	this.dirt.name = "dirt";
	this.dirt.parent = this;
	this.dirt.setTransform(0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.dirt).wait(1));

	// Tooth
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5E2DE").s().p("AgnA0QgLgNAAgrQABgsAGgIQAGgGAlAAQAoAAAHAJQAEAGgBAxQAAAfgFALQgJARgeACIgFAAQgdAAgLgLg");
	this.shape.setTransform(0.1,0.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Outline
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BEB6A7").s().p("AgrA4QgNgOABguQAAgwAIgHQAHgHAoAAQAnABAHAIQAJAIABApQABAtgHANQgJAPgjACIgFAAQghAAgLgLg");
	this.shape_1.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tooth, new cjs.Rectangle(-5.5,-6.6,11.2,13.6), null);


(lib.Mouth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Lips
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AB6349").ss(4.1,1,1).p("AqAg/QgDgUAFgpQAEgoBbhiQBbhiG9gDQG9gECKB1QBHA7gGCBQgFCDhoB0QihCwlGADQllADiph2QiUhngLjRg");
	this.shape.setTransform(-0.7,2.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Top Teeth
	this.instance = new lib.Tooth();
	this.instance.parent = this;
	this.instance.setTransform(-6.2,-22.7,1.236,1.318,-177.6);

	this.instance_1 = new lib.Tooth();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-18.9,-22.7,1.054,1.224,0,178.6,-177.6);

	this.instance_2 = new lib.Tooth();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-29.8,-21.5,0.959,1.112,0,177.8,-177.6,0.4,0.1);

	this.instance_3 = new lib.Tooth();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-39.9,-19.6,0.904,0.965,0,177.1,178.4,0.4,0.5);

	this.instance_4 = new lib.Tooth();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-49.7,-16.7,0.844,0.813,0,177.1,178.4,0.4,0.5);

	this.instance_5 = new lib.Tooth();
	this.instance_5.parent = this;
	this.instance_5.setTransform(7,-22.5,1.236,1.318,0,-177.6,2.4,0.1,-0.1);

	this.instance_6 = new lib.Tooth();
	this.instance_6.parent = this;
	this.instance_6.setTransform(19.1,-22.5,1.054,1.217,0,-173.8,2.4,0.2,0.1);

	this.instance_7 = new lib.Tooth();
	this.instance_7.parent = this;
	this.instance_7.setTransform(30.5,-21.6,0.959,1.062,0,-172.9,2.4,0.4,0.2);

	this.instance_8 = new lib.Tooth();
	this.instance_8.parent = this;
	this.instance_8.setTransform(40,-19.7,0.904,0.965,0,-172.2,6.4,0.4,0.5);

	this.instance_9 = new lib.Tooth();
	this.instance_9.parent = this;
	this.instance_9.setTransform(49.6,-16.8,0.844,0.819,0,-172.2,6.4,0.6,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Teeth
	this.instance_10 = new lib.Tooth();
	this.instance_10.parent = this;
	this.instance_10.setTransform(-6.3,26.2,1.136,1.164,0,2.4,-177.6,0,0.1);

	this.instance_11 = new lib.Tooth();
	this.instance_11.parent = this;
	this.instance_11.setTransform(-18.3,25.1,1.054,1.111,0,6.2,-177.6,0.1,0.2);

	this.instance_12 = new lib.Tooth();
	this.instance_12.parent = this;
	this.instance_12.setTransform(-29.7,22.2,0.959,1.062,0,7.1,-177.6,0.5,0.2);

	this.instance_13 = new lib.Tooth();
	this.instance_13.parent = this;
	this.instance_13.setTransform(-39.1,18.4,0.904,0.965,0,7.8,-173.6,0.4,0.4);

	this.instance_14 = new lib.Tooth();
	this.instance_14.parent = this;
	this.instance_14.setTransform(-46.4,13,0.844,0.899,0,7.8,-173.6,0.5,0.5);

	this.instance_15 = new lib.Tooth();
	this.instance_15.parent = this;
	this.instance_15.setTransform(-51.3,7.2,0.801,0.834,0,7.8,-173.6,0.6,0.4);

	this.instance_16 = new lib.Tooth();
	this.instance_16.parent = this;
	this.instance_16.setTransform(6.1,26.4,1.136,1.164,2.4,0,0,0.1,0.1);

	this.instance_17 = new lib.Tooth();
	this.instance_17.parent = this;
	this.instance_17.setTransform(18.4,25.1,1.054,1.111,0,-1.4,2.4,0.1,0.2);

	this.instance_18 = new lib.Tooth();
	this.instance_18.parent = this;
	this.instance_18.setTransform(29.6,22,0.959,1.062,0,-2.2,2.4,0.4,0.2);

	this.instance_19 = new lib.Tooth();
	this.instance_19.parent = this;
	this.instance_19.setTransform(38.9,18.4,0.904,0.965,0,-2.9,-1.6,0.4,0.4);

	this.instance_20 = new lib.Tooth();
	this.instance_20.parent = this;
	this.instance_20.setTransform(46.9,13,0.844,0.899,0,-2.9,-1.6,0.5,0.5);

	this.instance_21 = new lib.Tooth();
	this.instance_21.parent = this;
	this.instance_21.setTransform(52.6,7.5,0.801,0.834,0,-2.9,-1.6,0.6,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	// Gums
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D42F43").s().p("AniEAIgIgGIgGgDIhYhiIgEgIIABgIQAKg9AagFQAogEAeAeQA0A3AQAKQC3B2DogDQCIgCBkgoQBlgoBMg5QBLg6AUgRQATgSAWgBQAVgBAEAZQAGAdgWAxQgTAqhrBZIgBABIgBAAIgMAIIgFACIkpBUIgEAAIgNABIgGAAIgLABIgDAAIgVAAIgDABIgLAAIgCAAIgPAAQlaAAilhzgAoqi4QgFgFgGgIQgIgLgCgLQCXifGmAJQG3AICKB2IAOAMQgHALgOALQAEAKgIAMQgnA9hLgoQhHgmhOgTQiAgeiAgGQi1gHijA0QgZAHgaAEQhCAMg4AcQggAQgUAAQgdAAgBglg");
	this.shape_1.setTransform(-0.6,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// Tongue
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A91921").s().p("AnXBXQgfgWgZgbQAOgiAWgfQARgbAUgNQAQgZApgUQDnhvEFAbQAiAEAhgBQDSgUBqCeQAPAXAAAPQAUAZAPAdQigCik4ADIgPAAQlaAAimhzg");
	this.shape_2.setTransform(-1.8,18.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// Mouth Hole
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#370B0B").s().p("AgZCXQhHABhIgoQgdgQgFgjQgTh4BghFQAlgbAvAHQgKAQgCAYQgEAkAXAVQAzAvAWhBQARgzgZghIAlADQARACAQAGQAPAGAbASQAiAWAGAQQAQAtAGAtQAJBHg0AsQgNALgMADQgVAOgdgBQgjACgaAAQghAAgSgDg");
	this.shape_3.setTransform(-0.6,-5.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(1));

	// Mouth BG2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B0E0E").s().p("AguD9IingWQiJgTgfh1QgJgLgFgNQgUgzACg4QAFihCsgfQBugVBuAAQAJgFALgDQAIAEAHAGQAvADAwAGIBWALQAKACBLAIQBJAMAPATQAqA3gBBCQgCBSgTBQQgFASgoAgQgXASgbARQh8BMiRAAQgkAAgngFg");
	this.shape_4.setTransform(-0.7,-2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Mouth BG
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#651616").s().p("AnTEJIgOgJIgIgGIgGgDIhYhiIgEgIIgBgBIAAgBIAAgBIgGgKIgui5QgDgUAHgeQAOg9AvgyIABgBQAyg1BQgiQChhFEaAGQG3AICKB2IAOAMQA4A8gFBzQgEBcg0BWQgXAjgeAjIgCACIgFAFIhNBBIgBABIgCACIgBAAIgCABIgGAEIgBABIgBABIgBAAIgNAIIgEACIAAAAIkpBUIgEAAIgNABIgGAAIgLABIgDAAIgVAAIgDABIgLAAIgCAAIgOAAQlMAAimhqg");
	this.shape_5.setTransform(-0.7,1.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mouth, new cjs.Rectangle(-66.9,-36.3,132.4,76.9), null);


// stage content:
(lib.DentistGame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var tools = [this.tool1, this.tool2];
		
		for (var i = 0; i < tools.length; i++) {
			var tool = tools[i];
			tool.toolIndex = i;
			tool.startX = tool.x;
			tool.startY = tool.y;
			
			tool.addEventListener("pressmove", onToolDrag.bind(this));
			tool.addEventListener("pressup", onToolDrop.bind(this));
		}
		
		function onToolDrag(evt) {
			evt.currentTarget.x = evt.stageX;
			evt.currentTarget.y = evt.stageY;
			evt.currentTarget.mouseEnabled = false;
			console.log(evt.currentTarget.toolIndex);
		}
		
		function onToolDrop(evt) {
			evt.currentTarget.x = evt.currentTarget.startX;
			evt.currentTarget.y = evt.currentTarget.startY;
			evt.currentTarget.mouseEnabled = true;
			console.log(evt.currentTarget.toolIndex);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Tools
	this.tool2 = new lib.Tool2();
	this.tool2.name = "tool2";
	this.tool2.parent = this;
	this.tool2.setTransform(522.8,408.2,1,1,0,0,0,18.6,51.2);

	this.tool1 = new lib.Tool1();
	this.tool1.name = "tool1";
	this.tool1.parent = this;
	this.tool1.setTransform(451.1,370.7,1,1,0,0,0,-0.2,-0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.tool1},{t:this.tool2}]}).wait(1));

	// Mouth
	this.instance = new lib.Mouth();
	this.instance.parent = this;
	this.instance.setTransform(330.9,269.4,0.619,0.592,0,-2.4,-2.5,-0.4,2.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// JB
	this.instance_1 = new lib.image();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-36,14.7,2.388,2.425);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(284,254.7,716.4,453.4);
// library properties:
lib.properties = {
	id: '11D9FCE18AE34DA1B54ACEF141F167BF',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/image.jpg?1512284614556", id:"image"}
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
an.compositions['11D9FCE18AE34DA1B54ACEF141F167BF'] = {
	getStage: function() { return exportRoot.getStage(); },
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



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
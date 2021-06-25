(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };
var read = {
	a: .5,
	b: 2
};

var v2 = {
	a: 0,
	b: 2
};

TweenLite.defaultEase = Power2.easeInOut;

function frameEnd(nudge) {
	var tl = new TimelineMax();

	tl.set(".frame2", { opacity: 1 });
	tl.from(".bg2", .2, { opacity: 0 });

	tl.from(".phone", .3, { y: "+=200", opacity: 0 }, "+=.3");
	tl.from(".ill", .3, { scale: 0 });

	tl.from(".t2", .01, { opacity: 0 }, "+=.3");
	tl.from(".cta1", .01, { opacity: 0 }, "+=2");
	tl.to(".cta1", .01, { opacity: 0 }, "+=2.5");
	tl.from(".cta2", .2, { opacity: 0 }, "+=.2");

	return tl;
}

function init(id) {
	void 0;
	TweenLite.defaultEase = Power3.easeOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	var w = size.w;
	var h = size.h;

	return tl;
}

exports.size = size;
exports.frameEnd = frameEnd;
exports.init = init;
exports.read = read;
exports.v2 = v2;

// export {init}

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function player() {
	var speed = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

	var tl = new TimelineMax();

	tl.add("start", 0);
	var total = 4;
	// for(let i=total; i>0;i--){
	for (var i = 1; i <= total; i++) {
		var percent = i / total * .17;

		var obj = { x: 0, y: 0, ease: Power4.easeOut };
		if (i !== total) {
			obj = _extends({}, obj, { opacity: 0 });
		}
		// console.log(percent);
		tl.to("#player" + i, .8 * speed, obj, "start+=" + percent);
	}

	TweenLite.to(".ball", 1.2 * speed, { x: 0, y: 0, ease: Power4.easeOut, delay: .17 });
	return tl;
}

exports.player = player;

},{}],3:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

var _commonJsStrikerJs = require('../../_common/js/striker.js');

function start() {

	var tl = (0, _commonJsCommonJs.init)("300x250");
	// return

	tl.from(".player2", 1, { x: "+=155" }, 0);
	(0, _commonJsStrikerJs.player)(.8);
	tl.from(".ball", .8, { x: "-=110" }, 0);
	tl.from(".t1a", .15, { x: "-=150", opacity: 0 }, .8);
	tl.from(".t1b", .01, { opacity: 0 }, '+=' + _commonJsCommonJs.read.a);
	tl.add((0, _commonJsCommonJs.frameEnd)(), '+=' + _commonJsCommonJs.read.b);
}

start();

module.exports = {};

},{"../../_common/js/common.js":1,"../../_common/js/striker.js":2}]},{},[3])


//# sourceMappingURL=main.js.map

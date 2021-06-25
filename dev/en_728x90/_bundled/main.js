(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };
var read = {
	t1: 2
};

TweenLite.defaultEase = Power2.easeInOut;

function init(TOTAL) {

	TweenLite.defaultEase = Power3.easeOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	var w = size.w;
	var h = size.h;

	var tlStar = new TimelineMax();

	for (var i = 1; i <= TOTAL; i++) {
		var percent = i / TOTAL * .5;
		tlStar.from(".star" + i, .4, { scale: 0, ease: Back.easeOut }, percent);
	}

	tl.add(tlStar);

	return tl;
}

exports.size = size;
exports.init = init;
exports.read = read;

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

	var tl = (0, _commonJsCommonJs.init)(3);

	tl.from(".high", .3, { opacity: 0 });

	tl.from(".t1", .3, { opacity: 0 }, "+=.5");
	tl.to(".t1", .3, { opacity: 0 }, '+=' + _commonJsCommonJs.read.t1);
	tl.from(".t2", .3, { opacity: 0 });

	tl.add("end", "+=.5");
	tl.to(".logo", .3, { y: "+=20" }, "end");
	tl.from(".cta", .3, { opacity: 0, y: "+=30" }, "+=0");
}

start();

module.exports = {};

},{"../../_common/js/common.js":1,"../../_common/js/striker.js":2}]},{},[3])


//# sourceMappingURL=main.js.map

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };
var read = {
	t1: 2,
	t2: 3.3
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
		tlStar.from(".star" + i, .4, { opacity: 0, scale: 0, ease: Back.easeOut }, percent);
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

var _commonJsCommonJs = require('../../_common/js/common.js');

function start() {

	var TOTAL = 6;
	var tl = (0, _commonJsCommonJs.init)(TOTAL);

	var tlStar = new TimelineMax();

	// for(let i=1; i<=TOTAL; i++){
	// 	const percent = (i/TOTAL) * .2
	// 	tlStar.to(`.star${i}`, .4, {scale:0, ease: Power3.easeOut}, percent)
	// }

	// tl.add(tlStar)

	tl.from(".high", .3, { opacity: 0 }, "-=.6");

	tl.from(".t1", .3, { opacity: 0 }, "+=0");
	tl.to(".t1", .3, { opacity: 0 }, "+=" + _commonJsCommonJs.read.t1);
	tl.from(".t2", .3, { opacity: 0 });
	tl.to([".high", ".t2"], .3, { opacity: 0 }, "+=" + _commonJsCommonJs.read.t2);

	tl.add("end", "+=.1");
	tl.from(".cta", .3, { opacity: 0 }, "end+=.5");
	tl.from(".logo", .3, { opacity: 0 }, "end");

	tl.set(".cta2", { visibility: "visible", opacity: 0 });
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map

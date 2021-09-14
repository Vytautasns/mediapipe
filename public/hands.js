(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hands"] = factory();
	else
		root["hands"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@mediapipe/camera_utils/camera_utils.js":
/*!**************************************************************!*\
  !*** ./node_modules/@mediapipe/camera_utils/camera_utils.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var e="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};function f(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof __webpack_require__.g&&__webpack_require__.g];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var h=f(this);
function k(a,b){if(b)a:{var c=h;a=a.split(".");for(var d=0;d<a.length-1;d++){var g=a[d];if(!(g in c))break a;c=c[g]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&e(c,a,{configurable:!0,writable:!0,value:b})}}var l="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var g in d)Object.prototype.hasOwnProperty.call(d,g)&&(a[g]=d[g])}return a};k("Object.assign",function(a){return a||l});var m=this||self;var n={facingMode:"user",width:640,height:480};function p(a,b){this.video=a;this.h=0;this.g=Object.assign(Object.assign({},n),b)}function q(a){window.requestAnimationFrame(function(){r(a)})}function t(a,b){a.video.srcObject=b;a.video.onloadedmetadata=function(){a.video.play();q(a)}}function r(a){var b=null;a.video.paused||a.video.currentTime===a.h||(a.h=a.video.currentTime,b=a.g.onFrame());b?b.then(function(){q(a)}):q(a)}
p.prototype.start=function(){var a=this;navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists.");var b=this.g;return navigator.mediaDevices.getUserMedia({video:{facingMode:b.facingMode,width:b.width,height:b.height}}).then(function(c){t(a,c)}).catch(function(c){console.error("Failed to acquire camera feed: "+c);alert("Failed to acquire camera feed: "+c);throw c;})};var u=["Camera"],v=m;
u[0]in v||"undefined"==typeof v.execScript||v.execScript("var "+u[0]);for(var w;u.length&&(w=u.shift());)u.length||void 0===p?v[w]&&v[w]!==Object.prototype[w]?v=v[w]:v=v[w]={}:v[w]=p;}).call(this);


/***/ }),

/***/ "./node_modules/@mediapipe/drawing_utils/drawing_utils.js":
/*!****************************************************************!*\
  !*** ./node_modules/@mediapipe/drawing_utils/drawing_utils.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';function h(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}}var l="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){if(a==Array.prototype||a==Object.prototype)return a;a[c]=b.value;return a};
function m(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof __webpack_require__.g&&__webpack_require__.g];for(var c=0;c<a.length;++c){var b=a[c];if(b&&b.Math==Math)return b}throw Error("Cannot find global object");}var n=m(this);function p(a,c){if(c)a:{var b=n;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in b))break a;b=b[e]}a=a[a.length-1];d=b[a];c=c(d);c!=d&&null!=c&&l(b,a,{configurable:!0,writable:!0,value:c})}}
function q(a){var c="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return c?c.call(a):{next:h(a)}}var r="function"==typeof Object.assign?Object.assign:function(a,c){for(var b=1;b<arguments.length;b++){var d=arguments[b];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};p("Object.assign",function(a){return a||r});
p("Array.prototype.fill",function(a){return a?a:function(c,b,d){var e=this.length||0;0>b&&(b=Math.max(0,e+b));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(b=Number(b||0);b<d;b++)this[b]=c;return this}});function t(a){return a?a:Array.prototype.fill}p("Int8Array.prototype.fill",t);p("Uint8Array.prototype.fill",t);p("Uint8ClampedArray.prototype.fill",t);p("Int16Array.prototype.fill",t);p("Uint16Array.prototype.fill",t);p("Int32Array.prototype.fill",t);
p("Uint32Array.prototype.fill",t);p("Float32Array.prototype.fill",t);p("Float64Array.prototype.fill",t);var u=this||self;function v(a,c){a=a.split(".");var b=u;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===c?b[d]&&b[d]!==Object.prototype[d]?b=b[d]:b=b[d]={}:b[d]=c};var w={color:"white",lineWidth:4,radius:6,visibilityMin:.5};function x(a){a=a||{};return Object.assign(Object.assign(Object.assign({},w),{fillColor:a.color}),a)}function y(a,c){return a instanceof Function?a(c):a}function z(a,c,b){return Math.max(Math.min(c,b),Math.min(Math.max(c,b),a))}v("clamp",z);
v("drawLandmarks",function(a,c,b){if(c){b=x(b);a.save();var d=a.canvas,e=0;c=q(c);for(var f=c.next();!f.done;f=c.next())if(f=f.value,void 0!==f&&(void 0===f.visibility||f.visibility>b.visibilityMin)){a.fillStyle=y(b.fillColor,{index:e,from:f});a.strokeStyle=y(b.color,{index:e,from:f});a.lineWidth=y(b.lineWidth,{index:e,from:f});var g=new Path2D;g.arc(f.x*d.width,f.y*d.height,y(b.radius,{index:e,from:f}),0,2*Math.PI);a.fill(g);a.stroke(g);++e}a.restore()}});
v("drawConnectors",function(a,c,b,d){if(c&&b){d=x(d);a.save();var e=a.canvas,f=0;b=q(b);for(var g=b.next();!g.done;g=b.next()){var k=g.value;a.beginPath();g=c[k[0]];k=c[k[1]];g&&k&&(void 0===g.visibility||g.visibility>d.visibilityMin)&&(void 0===k.visibility||k.visibility>d.visibilityMin)&&(a.strokeStyle=y(d.color,{index:f,from:g,to:k}),a.lineWidth=y(d.lineWidth,{index:f,from:g,to:k}),a.moveTo(g.x*e.width,g.y*e.height),a.lineTo(k.x*e.width,k.y*e.height));++f;a.stroke()}a.restore()}});
v("drawRectangle",function(a,c,b){b=x(b);a.save();var d=a.canvas;a.beginPath();a.lineWidth=y(b.lineWidth,{});a.strokeStyle=y(b.color,{});a.fillStyle=y(b.fillColor,{});a.translate(c.xCenter*d.width,c.yCenter*d.height);a.rotate(c.rotation*Math.PI/180);a.rect(-c.width/2*d.width,-c.height/2*d.height,c.width*d.width,c.height*d.height);a.translate(-c.xCenter*d.width,-c.yCenter*d.height);a.stroke();a.fill();a.restore()});v("lerp",function(a,c,b,d,e){return z(d*(1-(a-c)/(b-c))+e*(1-(b-a)/(b-c)),d,e)});}).call(this);


/***/ }),

/***/ "./node_modules/@mediapipe/hands/hands.js":
/*!************************************************!*\
  !*** ./node_modules/@mediapipe/hands/hands.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var A;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof __webpack_require__.g&&__webpack_require__.g];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var E=ca(this);function J(a,b){if(b)a:{var c=E;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];if(!(f in c))break a;c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
J("Symbol",function(a){function b(g){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(g||"")+"_"+f++,g)}function c(g,e){this.g=g;ba(this,"description",{configurable:!0,writable:!0,value:e})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",f=0;return b});
J("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=E[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return da(aa(this))}})}return a});function da(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function L(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function ea(a){if(!(a instanceof Array)){a=L(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}var fa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else{var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var la=ha;
function ma(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.ba=b.prototype}function na(){this.l=!1;this.i=null;this.h=void 0;this.g=1;this.s=this.m=0;this.j=null}function oa(a){if(a.l)throw new TypeError("Generator is already running");a.l=!0}na.prototype.o=function(a){this.h=a};
function pa(a,b){a.j={S:b,T:!0};a.g=a.m||a.s}na.prototype.return=function(a){this.j={return:a};this.g=this.s};function M(a,b,c){a.g=c;return{value:b}}function qa(a){this.g=new na;this.h=a}function ra(a,b){oa(a.g);var c=a.g.i;if(c)return sa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);a.g.return(b);return ta(a)}
function sa(a,b,c,d){try{var f=b.call(a.g.i,c);if(!(f instanceof Object))throw new TypeError("Iterator result "+f+" is not an object");if(!f.done)return a.g.l=!1,f;var g=f.value}catch(e){return a.g.i=null,pa(a.g,e),ta(a)}a.g.i=null;d.call(a.g,g);return ta(a)}function ta(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.l=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,pa(a.g,c)}a.g.l=!1;if(a.g.j){b=a.g.j;a.g.j=null;if(b.T)throw b.S;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ua(a){this.next=function(b){oa(a.g);a.g.i?b=sa(a,a.g.i.next,b,a.g.o):(a.g.o(b),b=ta(a));return b};this.throw=function(b){oa(a.g);a.g.i?b=sa(a,a.g.i["throw"],b,a.g.o):(pa(a.g,b),b=ta(a));return b};this.return=function(b){return ra(a,b)};this[Symbol.iterator]=function(){return this}}function N(a,b){b=new ua(new qa(b));la&&a.prototype&&la(b,a.prototype);return b}
function va(a,b){a instanceof String&&(a+="");var c=0,d=!1,f={next:function(){if(!d&&c<a.length){var g=c++;return{value:b(g,a[g]),done:!1}}d=!0;return{done:!0,value:void 0}}};f[Symbol.iterator]=function(){return f};return f}var wa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var f in d)Object.prototype.hasOwnProperty.call(d,f)&&(a[f]=d[f])}return a};J("Object.assign",function(a){return a||wa});
J("Promise",function(a){function b(e){this.h=0;this.i=void 0;this.g=[];this.o=!1;var h=this.j();try{e(h.resolve,h.reject)}catch(k){h.reject(k)}}function c(){this.g=null}function d(e){return e instanceof b?e:new b(function(h){h(e)})}if(a)return a;c.prototype.h=function(e){if(null==this.g){this.g=[];var h=this;this.i(function(){h.l()})}this.g.push(e)};var f=E.setTimeout;c.prototype.i=function(e){f(e,0)};c.prototype.l=function(){for(;this.g&&this.g.length;){var e=this.g;this.g=[];for(var h=0;h<e.length;++h){var k=
e[h];e[h]=null;try{k()}catch(l){this.j(l)}}}this.g=null};c.prototype.j=function(e){this.i(function(){throw e;})};b.prototype.j=function(){function e(l){return function(n){k||(k=!0,l.call(h,n))}}var h=this,k=!1;return{resolve:e(this.B),reject:e(this.l)}};b.prototype.B=function(e){if(e===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(e instanceof b)this.D(e);else{a:switch(typeof e){case "object":var h=null!=e;break a;case "function":h=!0;break a;default:h=!1}h?this.u(e):this.m(e)}};
b.prototype.u=function(e){var h=void 0;try{h=e.then}catch(k){this.l(k);return}"function"==typeof h?this.F(h,e):this.m(e)};b.prototype.l=function(e){this.s(2,e)};b.prototype.m=function(e){this.s(1,e)};b.prototype.s=function(e,h){if(0!=this.h)throw Error("Cannot settle("+e+", "+h+"): Promise already settled in state"+this.h);this.h=e;this.i=h;2===this.h&&this.C();this.v()};b.prototype.C=function(){var e=this;f(function(){if(e.A()){var h=E.console;"undefined"!==typeof h&&h.error(e.i)}},1)};b.prototype.A=
function(){if(this.o)return!1;var e=E.CustomEvent,h=E.Event,k=E.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof e?e=new e("unhandledrejection",{cancelable:!0}):"function"===typeof h?e=new h("unhandledrejection",{cancelable:!0}):(e=E.document.createEvent("CustomEvent"),e.initCustomEvent("unhandledrejection",!1,!0,e));e.promise=this;e.reason=this.i;return k(e)};b.prototype.v=function(){if(null!=this.g){for(var e=0;e<this.g.length;++e)g.h(this.g[e]);this.g=null}};var g=new c;b.prototype.D=
function(e){var h=this.j();e.I(h.resolve,h.reject)};b.prototype.F=function(e,h){var k=this.j();try{e.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};b.prototype.then=function(e,h){function k(w,t){return"function"==typeof w?function(z){try{l(w(z))}catch(m){n(m)}}:t}var l,n,u=new b(function(w,t){l=w;n=t});this.I(k(e,l),k(h,n));return u};b.prototype.catch=function(e){return this.then(void 0,e)};b.prototype.I=function(e,h){function k(){switch(l.h){case 1:e(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+
l.h);}}var l=this;null==this.g?g.h(k):this.g.push(k);this.o=!0};b.resolve=d;b.reject=function(e){return new b(function(h,k){k(e)})};b.race=function(e){return new b(function(h,k){for(var l=L(e),n=l.next();!n.done;n=l.next())d(n.value).I(h,k)})};b.all=function(e){var h=L(e),k=h.next();return k.done?d([]):new b(function(l,n){function u(z){return function(m){w[z]=m;t--;0==t&&l(w)}}var w=[],t=0;do w.push(void 0),t++,d(k.value).I(u(w.length-1),n),k=h.next();while(!k.done)})};return b});
J("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});J("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var f=d.length;c=c||0;for(0>c&&(c=Math.max(c+f,0));c<f;c++){var g=d[c];if(g===b||Object.is(g,b))return!0}return!1}});
J("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return-1!==this.indexOf(b,c||0)}});J("Array.prototype.keys",function(a){return a?a:function(){return va(this,function(b){return b})}});var xa=this||self;
function ya(a,b){a=a.split(".");var c=xa;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b};function za(a,b){b=String.fromCharCode.apply(null,b);return null==a?b:a+b}var Aa,Ba="undefined"!==typeof TextDecoder,Ca,Da="undefined"!==typeof TextEncoder;
function Ea(a){if(Da)a=(Ca||(Ca=new TextEncoder)).encode(a);else{var b=void 0;b=void 0===b?!1:b;for(var c=0,d=new Uint8Array(3*a.length),f=0;f<a.length;f++){var g=a.charCodeAt(f);if(128>g)d[c++]=g;else{if(2048>g)d[c++]=g>>6|192;else{if(55296<=g&&57343>=g){if(56319>=g&&f<a.length){var e=a.charCodeAt(++f);if(56320<=e&&57343>=e){g=1024*(g-55296)+e-56320+65536;d[c++]=g>>18|240;d[c++]=g>>12&63|128;d[c++]=g>>6&63|128;d[c++]=g&63|128;continue}else f--}if(b)throw Error("Found an unpaired surrogate");g=65533}d[c++]=
g>>12|224;d[c++]=g>>6&63|128}d[c++]=g&63|128}}a=d.subarray(0,c)}return a};var Fa="function"===typeof Uint8Array.prototype.slice,P=0,Q=0;function Ha(a){this.h=null;this.g=this.i=this.j=0;this.l=!1;a&&Ia(this,a)}function Ia(a,b){b=b.constructor===Uint8Array?b:b.constructor===ArrayBuffer?new Uint8Array(b):b.constructor===Array?new Uint8Array(b):b.constructor===String?Ja(b):b instanceof Uint8Array?new Uint8Array(b.buffer,b.byteOffset,b.byteLength):new Uint8Array(0);a.h=b;a.j=0;a.i=a.h.length;a.g=a.j}Ha.prototype.reset=function(){this.g=this.j};
function Ka(a){var b=a.h,c=b[a.g],d=c&127;if(128>c)return a.g+=1,d;c=b[a.g+1];d|=(c&127)<<7;if(128>c)return a.g+=2,d;c=b[a.g+2];d|=(c&127)<<14;if(128>c)return a.g+=3,d;c=b[a.g+3];d|=(c&127)<<21;if(128>c)return a.g+=4,d;c=b[a.g+4];d|=(c&15)<<28;if(128>c)return a.g+=5,d>>>0;a.g+=5;128<=b[a.g++]&&128<=b[a.g++]&&128<=b[a.g++]&&128<=b[a.g++]&&a.g++;return d}
function R(a){var b=a.h[a.g];var c=a.h[a.g+1];var d=a.h[a.g+2],f=a.h[a.g+3];a.g+=4;c=(b<<0|c<<8|d<<16|f<<24)>>>0;a=2*(c>>31)+1;b=c>>>23&255;c&=8388607;return 255==b?c?NaN:Infinity*a:0==b?a*Math.pow(2,-149)*c:a*Math.pow(2,b-150)*(c+Math.pow(2,23))}var La=[];function Ma(){this.g=new Uint8Array(64);this.h=0}Ma.prototype.push=function(a){if(!(this.h+1<this.g.length)){var b=this.g;this.g=new Uint8Array(Math.ceil(1+2*this.g.length));this.g.set(b)}this.g[this.h++]=a};Ma.prototype.length=function(){return this.h};Ma.prototype.end=function(){var a=this.g,b=this.h;this.h=0;return Fa?a.slice(0,b):new Uint8Array(a.subarray(0,b))};function S(a,b){for(;127<b;)a.push(b&127|128),b>>>=7;a.push(b)};function Na(a){if(La.length){var b=La.pop();a&&Ia(b,a);a=b}else a=new Ha(a);this.g=a;this.h=this.i=this.l=-1;this.j=!1}Na.prototype.reset=function(){this.g.reset();this.h=this.l=-1};function Oa(a){var b=a.g;(b=b.g==b.i)||(b=a.j)||(b=a.g,b=b.l||0>b.g||b.g>b.i);if(b)return!1;b=Ka(a.g);var c=b&7;if(0!=c&&5!=c&&1!=c&&2!=c&&3!=c&&4!=c)return a.j=!0,!1;a.i=b;a.l=b>>>3;a.h=c;return!0}
function Pa(a){switch(a.h){case 0:if(0!=a.h)Pa(a);else{for(a=a.g;a.h[a.g]&128;)a.g++;a.g++}break;case 1:1!=a.h?Pa(a):(a=a.g,a.g+=8);break;case 2:if(2!=a.h)Pa(a);else{var b=Ka(a.g);a=a.g;a.g+=b}break;case 5:5!=a.h?Pa(a):(a=a.g,a.g+=4);break;case 3:b=a.l;do{if(!Oa(a)){a.j=!0;break}if(4==a.h){a.l!=b&&(a.j=!0);break}Pa(a)}while(1);break;default:a.j=!0}}function Qa(a,b,c){var d=a.g.i,f=Ka(a.g);f=a.g.g+f;a.g.i=f;c(b,a);a.g.g=f;a.g.i=d;return b}
function Ra(a){var b=Ka(a.g);a=a.g;var c=a.g;a.g+=b;a=a.h;var d;if(Ba)(d=Aa)||(d=Aa=new TextDecoder("utf-8",{fatal:!1})),d=d.decode(a.subarray(c,c+b));else{b=c+b;for(var f=[],g=null,e,h,k;c<b;)e=a[c++],128>e?f.push(e):224>e?c>=b?f.push(65533):(h=a[c++],194>e||128!==(h&192)?(c--,f.push(65533)):f.push((e&31)<<6|h&63)):240>e?c>=b-1?f.push(65533):(h=a[c++],128!==(h&192)||224===e&&160>h||237===e&&160<=h||128!==((d=a[c++])&192)?(c--,f.push(65533)):f.push((e&15)<<12|(h&63)<<6|d&63)):244>=e?c>=b-2?f.push(65533):
(h=a[c++],128!==(h&192)||0!==(e<<28)+(h-144)>>30||128!==((d=a[c++])&192)||128!==((k=a[c++])&192)?(c--,f.push(65533)):(e=(e&7)<<18|(h&63)<<12|(d&63)<<6|k&63,e-=65536,f.push((e>>10&1023)+55296,(e&1023)+56320))):f.push(65533),8192<=f.length&&(g=za(g,f),f.length=0);d=za(g,f)}return d};var Sa={},Ta=null;function Ja(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),f=0;Ua(a,function(g){d[f++]=g});return d.subarray(0,f)}
function Ua(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=Ta[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}Va();for(var d=0;;){var f=c(-1),g=c(0),e=c(64),h=c(64);if(64===h&&-1===f)break;b(f<<2|g>>4);64!=e&&(b(g<<4&240|e>>2),64!=h&&b(e<<6&192|h))}}
function Va(){if(!Ta){Ta={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Sa[c]=d;for(var f=0;f<d.length;f++){var g=d[f];void 0===Ta[g]&&(Ta[g]=f)}}}};function Wa(){this.h=[];this.i=0;this.g=new Ma}function Xa(a){var b=a.i+a.g.length();if(0===b)return new Uint8Array(0);b=new Uint8Array(b);for(var c=a.h,d=c.length,f=0,g=0;g<d;g++){var e=c[g];0!==e.length&&(b.set(e,f),f+=e.length)}c=a.g;d=c.h;0!==d&&(b.set(c.g.subarray(0,d),f),c.h=0);a.h=[b];return b}
function T(a,b,c){if(null!=c){S(a.g,8*b+5);a=a.g;var d=c;d=(c=0>d?1:0)?-d:d;0===d?0<1/d?P=Q=0:(Q=0,P=2147483648):isNaN(d)?(Q=0,P=2147483647):3.4028234663852886E38<d?(Q=0,P=(c<<31|2139095040)>>>0):1.1754943508222875E-38>d?(d=Math.round(d/Math.pow(2,-149)),Q=0,P=(c<<31|d)>>>0):(b=Math.floor(Math.log(d)/Math.LN2),d*=Math.pow(2,-b),d=Math.round(8388608*d)&8388607,Q=0,P=(c<<31|b+127<<23|d)>>>0);c=P;a.push(c>>>0&255);a.push(c>>>8&255);a.push(c>>>16&255);a.push(c>>>24&255)}}
function Ya(a,b,c){S(a.g,8*b+2);S(a.g,c.length);b=a.g.end();a.h.push(b);a.h.push(c);a.i+=b.length+c.length};var Za="function"===typeof Uint8Array;function $a(a,b,c){return"object"===typeof a?Za&&!Array.isArray(a)&&a instanceof Uint8Array?c(a):ab(a,b,c):b(a)}function ab(a,b,c){if(Array.isArray(a)){for(var d=Array(a.length),f=0;f<a.length;f++){var g=a[f];null!=g&&(d[f]=$a(g,b,c))}Array.isArray(a)&&a.U&&bb(d);return d}d={};for(f in a)g=a[f],null!=g&&(d[f]=$a(g,b,c));return d}
function cb(a){return ab(a,function(b){return"number"===typeof b?isFinite(b)?b:String(b):b},function(b){var c;void 0===c&&(c=0);Va();c=Sa[c];for(var d=Array(Math.floor(b.length/3)),f=c[64]||"",g=0,e=0;g<b.length-2;g+=3){var h=b[g],k=b[g+1],l=b[g+2],n=c[h>>2];h=c[(h&3)<<4|k>>4];k=c[(k&15)<<2|l>>6];l=c[l&63];d[e++]=n+h+k+l}n=0;l=f;switch(b.length-g){case 2:n=b[g+1],l=c[(n&15)<<2]||f;case 1:b=b[g],d[e]=c[b>>2]+c[(b&3)<<4|n>>4]+l+f}return d.join("")})}var db={U:{value:!0,configurable:!0}};
function bb(a){Array.isArray(a)&&!Object.isFrozen(a)&&Object.defineProperties(a,db);return a};var eb;function U(a,b,c){var d=eb;eb=null;a||(a=d);d=this.constructor.$;a||(a=d?[d]:[]);this.j=d?0:-1;this.i=null;this.g=a;a:{d=this.g.length;a=d-1;if(d&&(d=this.g[a],!(null===d||"object"!=typeof d||Array.isArray(d)||Za&&d instanceof Uint8Array))){this.l=a-this.j;this.h=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.h=null):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.l?(a+=this.j,(d=this.g[a])?bb(d):this.g[a]=fb):(gb(this),(d=this.h[a])?bb(d):this.h[a]=fb)}var fb=Object.freeze(bb([]));
function gb(a){var b=a.l+a.j;a.g[b]||(a.h=a.g[b]={})}function V(a,b){if(-1===b)return null;if(b<a.l){b+=a.j;var c=a.g[b];return c!==fb?c:a.g[b]=bb([])}if(a.h)return c=a.h[b],c!==fb?c:a.h[b]=bb([])}function W(a,b,c){c=void 0===c?0:c;a=V(a,b);a=null==a?a:+a;return null==a?c:a}function X(a,b,c){b<a.l?a.g[b+a.j]=c:(gb(a),a.h[b]=c)}function hb(a,b){a.i||(a.i={});if(!a.i[1]){var c=V(a,1);for(var d=[],f=0;f<c.length;f++)d[f]=new b(c[f]);a.i[1]=d}return a.i[1]}
function ib(a,b,c,d){var f=hb(a,c);b=b?b:new c;a=V(a,1);void 0!=d?(f.splice(d,0,b),a.splice(d,0,jb(b,!1))):(f.push(b),a.push(jb(b,!1)));return b}U.prototype.toJSON=function(){var a=jb(this,!1);return cb(a)};function jb(a,b){if(a.i)for(var c in a.i){var d=a.i[c];if(Array.isArray(d))for(var f=0;f<d.length;f++)d[f]&&jb(d[f],b);else d&&jb(d,b)}return a.g}U.prototype.toString=function(){return jb(this,!1).toString()};function kb(a,b){a=V(a,b);return null==a?0:a}
function lb(a,b){a=V(a,b);return null==a?"":a};function mb(a){if(4==a.h)return!1;Pa(a);return!0};function Z(a,b){var c=void 0;return new (c||(c=Promise))(function(d,f){function g(k){try{h(b.next(k))}catch(l){f(l)}}function e(k){try{h(b["throw"](k))}catch(l){f(l)}}function h(k){k.done?d(k.value):(new c(function(l){l(k.value)})).then(g,e)}h((b=b.apply(a,void 0)).next())})};function nb(a){U.call(this,a)}ma(nb,U);function ob(a,b){for(;Oa(b);)switch(b.i){case 8:var c=Ka(b.g);X(a,1,c);break;case 21:c=R(b.g);X(a,2,c);break;case 26:c=Ra(b);X(a,3,c);break;case 34:c=Ra(b);X(a,4,c);break;default:if(!mb(b))return a}return a};function pb(a){U.call(this,a,-1,qb)}ma(pb,U);pb.prototype.addClassification=function(a,b){return ib(this,a,nb,b)};function rb(a){a:{var b=new pb;for(a=new Na(a);Oa(a);)switch(a.i){case 10:b.addClassification(Qa(a,new nb,ob));break;default:if(!mb(a))break a}}return b}var qb=[1];function sb(a){U.call(this,a)}ma(sb,U);function tb(a,b){for(;Oa(b);)switch(b.i){case 13:var c=R(b.g);X(a,1,c);break;case 21:c=R(b.g);X(a,2,c);break;case 29:c=R(b.g);X(a,3,c);break;case 37:c=R(b.g);X(a,4,c);break;case 45:c=R(b.g);X(a,5,c);break;default:if(!mb(b))return a}return a};function ub(a){U.call(this,a,-1,vb)}ma(ub,U);function wb(a){a:{var b=new ub;for(a=new Na(a);Oa(a);)switch(a.i){case 10:var c=Qa(a,new sb,tb);ib(b,c,sb,void 0);break;default:if(!mb(a))break a}}return b}var vb=[1];function xb(a){U.call(this,a)}ma(xb,U);function yb(a,b,c){c=a.createShader(0===c?a.VERTEX_SHADER:a.FRAGMENT_SHADER);a.shaderSource(c,b);a.compileShader(c);if(!a.getShaderParameter(c,a.COMPILE_STATUS))throw Error("Could not compile WebGL shader.\n\n"+a.getShaderInfoLog(c));return c};function zb(a){return hb(a,nb).map(function(b){return{index:kb(b,1),score:W(b,2),label:null!=V(b,3)?lb(b,3):void 0,displayName:null!=V(b,4)?lb(b,4):void 0}})};function Ab(a){return{x:W(a,1),y:W(a,2),z:W(a,3),visibility:null!=V(a,4)?W(a,4):void 0}}function Bb(a){return a.map(function(b){return hb(wb(b),sb).map(Ab)})};function Cb(a,b){this.h=a;this.g=b;this.l=0}
function Db(a,b,c){Eb(a,b);if("function"===typeof a.g.canvas.transferToImageBitmap)return Promise.resolve(a.g.canvas.transferToImageBitmap());if(c)return Promise.resolve(a.g.canvas);if("function"===typeof createImageBitmap)return createImageBitmap(a.g.canvas);void 0===a.i&&(a.i=document.createElement("canvas"));return new Promise(function(d){a.i.height=a.g.canvas.height;a.i.width=a.g.canvas.width;a.i.getContext("2d",{}).drawImage(a.g.canvas,0,0,a.g.canvas.width,a.g.canvas.height);d(a.i)})}
function Eb(a,b){var c=a.g;if(void 0===a.m){var d=yb(c,"\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }",0),f=yb(c,"\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }",1),g=c.createProgram();c.attachShader(g,d);c.attachShader(g,f);c.linkProgram(g);if(!c.getProgramParameter(g,c.LINK_STATUS))throw Error("Could not compile WebGL program.\n\n"+
c.getProgramInfoLog(g));d=a.m=g;c.useProgram(d);f=c.getUniformLocation(d,"sampler0");a.j={H:c.getAttribLocation(d,"aVertex"),G:c.getAttribLocation(d,"aTex"),aa:f};a.s=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,a.s);c.enableVertexAttribArray(a.j.H);c.vertexAttribPointer(a.j.H,2,c.FLOAT,!1,0,0);c.bufferData(c.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),c.STATIC_DRAW);c.bindBuffer(c.ARRAY_BUFFER,null);a.o=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,a.o);c.enableVertexAttribArray(a.j.G);c.vertexAttribPointer(a.j.G,
2,c.FLOAT,!1,0,0);c.bufferData(c.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),c.STATIC_DRAW);c.bindBuffer(c.ARRAY_BUFFER,null);c.uniform1i(f,0)}d=a.j;c.useProgram(a.m);c.canvas.width=b.width;c.canvas.height=b.height;c.viewport(0,0,b.width,b.height);c.activeTexture(c.TEXTURE0);a.h.bindTexture2d(b.glName);c.enableVertexAttribArray(d.H);c.bindBuffer(c.ARRAY_BUFFER,a.s);c.vertexAttribPointer(d.H,2,c.FLOAT,!1,0,0);c.enableVertexAttribArray(d.G);c.bindBuffer(c.ARRAY_BUFFER,a.o);c.vertexAttribPointer(d.G,
2,c.FLOAT,!1,0,0);c.bindFramebuffer(c.DRAW_FRAMEBUFFER?c.DRAW_FRAMEBUFFER:c.FRAMEBUFFER,null);c.clearColor(0,0,0,0);c.clear(c.COLOR_BUFFER_BIT);c.colorMask(!0,!0,!0,!0);c.drawArrays(c.TRIANGLE_FAN,0,4);c.disableVertexAttribArray(d.H);c.disableVertexAttribArray(d.G);c.bindBuffer(c.ARRAY_BUFFER,null);a.h.bindTexture2d(0)}function Fb(a){this.g=a};var Gb=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function Hb(a,b){return b+a}function Ib(a,b){window[a]=b}function Jb(a){var b=document.createElement("script");b.setAttribute("src",a);b.setAttribute("crossorigin","anonymous");return new Promise(function(c){b.addEventListener("load",function(){c()},!1);b.addEventListener("error",function(){c()},!1);document.body.appendChild(b)})}
function Kb(){return Z(this,function b(){return N(b,function(c){switch(c.g){case 1:return c.m=2,M(c,WebAssembly.instantiate(Gb),4);case 4:c.g=3;c.m=0;break;case 2:return c.m=0,c.j=null,c.return(!1);case 3:return c.return(!0)}})})}
function Lb(a){this.g=a;this.listeners={};this.j={};this.D={};this.m={};this.s={};this.F=this.o=this.O=!0;this.B=Promise.resolve();this.N="";this.A={};this.locateFile=a&&a.locateFile||Hb;if("object"===typeof window)var b=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if("undefined"!==typeof location)b=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");
this.P=b;if(a.options){b=L(Object.keys(a.options));for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=a.options[c].default;void 0!==d&&(this.j[c]="function"===typeof d?d():d)}}}A=Lb.prototype;A.close=function(){this.i&&this.i.delete();return Promise.resolve()};function Mb(a,b){return void 0===a.g.files?[]:"function"===typeof a.g.files?a.g.files(b):a.g.files}
function Nb(a){return Z(a,function c(){var d=this,f,g,e,h,k,l,n,u,w,t,z;return N(c,function(m){switch(m.g){case 1:f=d;if(!d.O)return m.return();g=Mb(d,d.j);return M(m,Kb(),2);case 2:e=m.h;if("object"===typeof window)return Ib("createMediapipeSolutionsWasm",{locateFile:d.locateFile}),Ib("createMediapipeSolutionsPackedAssets",{locateFile:d.locateFile}),l=g.filter(function(r){return void 0!==r.data}),n=g.filter(function(r){return void 0===r.data}),u=Promise.all(l.map(function(r){var x=Ob(f,r.url);if(void 0!==
r.path){var y=r.path;x=x.then(function(C){f.overrideFile(y,C);return Promise.resolve(C)})}return x})),w=Promise.all(n.map(function(r){return void 0===r.simd||r.simd&&e||!r.simd&&!e?Jb(f.locateFile(r.url,f.P)):Promise.resolve()})).then(function(){return Z(f,function x(){var y,C,D=this;return N(x,function(I){if(1==I.g)return y=window.createMediapipeSolutionsWasm,C=window.createMediapipeSolutionsPackedAssets,M(I,y(C),2);D.h=I.h;I.g=0})})}),t=function(){return Z(f,function x(){var y=this;return N(x,function(C){y.g.graph&&
y.g.graph.url?C=M(C,Ob(y,y.g.graph.url),0):(C.g=0,C=void 0);return C})})}(),M(m,Promise.all([w,u,t]),7);if("function"!==typeof importScripts)throw Error("solutions can only be loaded on a web page or in a web worker");h=g.filter(function(r){return void 0===r.simd||r.simd&&e||!r.simd&&!e}).map(function(r){return f.locateFile(r.url,f.P)});importScripts.apply(null,ea(h));return M(m,createMediapipeSolutionsWasm(Module),6);case 6:d.h=m.h;d.l=new OffscreenCanvas(1,1);d.h.canvas=d.l;k=d.h.GL.createContext(d.l,
{antialias:!1,alpha:!1,Z:"undefined"!==typeof WebGL2RenderingContext?2:1});d.h.GL.makeContextCurrent(k);m.g=4;break;case 7:d.l=document.createElement("canvas");z=d.l.getContext("webgl2",{});if(!z&&(z=d.l.getContext("webgl",{}),!z))return alert("Failed to create WebGL canvas context when passing video frame."),m.return();d.C=z;d.h.canvas=d.l;d.h.createContext(d.l,!0,!0,{});case 4:d.i=new d.h.SolutionWasm,d.O=!1,m.g=0}})})}
function Pb(a){return Z(a,function c(){var d=this,f,g,e,h,k,l,n,u;return N(c,function(w){if(1==w.g){if(d.g.graph&&d.g.graph.url&&d.N===d.g.graph.url)return w.return();d.o=!0;if(!d.g.graph||!d.g.graph.url){w.g=2;return}d.N=d.g.graph.url;return M(w,Ob(d,d.g.graph.url),3)}2!=w.g&&(f=w.h,d.i.loadGraph(f));g=L(Object.keys(d.A));for(e=g.next();!e.done;e=g.next())h=e.value,d.i.overrideFile(h,d.A[h]);d.A={};if(d.g.listeners)for(k=L(d.g.listeners),l=k.next();!l.done;l=k.next())n=l.value,Qb(d,n);u=d.j;d.j=
{};d.setOptions(u);w.g=0})})}A.reset=function(){return Z(this,function b(){var c=this;return N(b,function(d){c.i&&(c.i.reset(),c.m={},c.s={});d.g=0})})};
A.setOptions=function(a,b){var c=this;if(b=b||this.g.options){for(var d=[],f=[],g={},e=L(Object.keys(a)),h=e.next();!h.done;g={J:g.J,K:g.K},h=e.next()){var k=h.value;k in this.j&&this.j[k]===a[k]||(this.j[k]=a[k],h=b[k],void 0!==h&&(h.onChange&&(g.J=h.onChange,g.K=a[k],d.push(function(l){return function(){return Z(c,function u(){var w,t=this;return N(u,function(z){if(1==z.g)return M(z,l.J(l.K),2);w=z.h;!0===w&&(t.o=!0);z.g=0})})}}(g))),h.graphOptionXref&&(k={valueNumber:1===h.type?a[k]:0,valueBoolean:0===
h.type?a[k]:!1,valueString:2===h.type?a[k]:""},h=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),h.graphOptionXref),k),f.push(h))))}if(0!==d.length||0!==f.length)this.o=!0,this.v=(void 0===this.v?[]:this.v).concat(f),this.u=(void 0===this.u?[]:this.u).concat(d)}};
function Rb(a){return Z(a,function c(){var d=this,f,g,e,h,k,l,n;return N(c,function(u){switch(u.g){case 1:if(!d.o)return u.return();if(!d.u){u.g=2;break}f=L(d.u);g=f.next();case 3:if(g.done){u.g=5;break}e=g.value;return M(u,e(),4);case 4:g=f.next();u.g=3;break;case 5:d.u=void 0;case 2:if(d.v){h=new d.h.GraphOptionChangeRequestList;k=L(d.v);for(l=k.next();!l.done;l=k.next())n=l.value,h.push_back(n);d.i.changeOptions(h);h.delete();d.v=void 0}d.o=!1;u.g=0}})})}
A.initialize=function(){return Z(this,function b(){var c=this;return N(b,function(d){return 1==d.g?M(d,Nb(c),2):3!=d.g?M(d,Pb(c),3):M(d,Rb(c),0)})})};function Ob(a,b){return Z(a,function d(){var f=this,g,e;return N(d,function(h){if(b in f.D)return h.return(f.D[b]);g=f.locateFile(b,"");e=fetch(g).then(function(k){return k.arrayBuffer()});f.D[b]=e;return h.return(e)})})}A.overrideFile=function(a,b){this.i?this.i.overrideFile(a,b):this.A[a]=b};A.clearOverriddenFiles=function(){this.A={};this.i&&this.i.clearOverriddenFiles()};
A.send=function(a,b){return Z(this,function d(){var f=this,g,e,h,k,l,n,u,w,t;return N(d,function(z){switch(z.g){case 1:if(!f.g.inputs)return z.return();g=1E3*(void 0===b||null===b?performance.now():b);return M(z,f.B,2);case 2:return M(z,f.initialize(),3);case 3:e=new f.h.PacketDataList;h=L(Object.keys(a));for(k=h.next();!k.done;k=h.next())if(l=k.value,n=f.g.inputs[l]){a:{var m=f;var r=a[l];switch(n.type){case "video":var x=m.m[n.stream];x||(x=new Cb(m.h,m.C),m.m[n.stream]=x);m=x;0===m.l&&(m.l=m.h.createTexture());
if("undefined"!==typeof HTMLVideoElement&&r instanceof HTMLVideoElement){var y=r.videoWidth;x=r.videoHeight}else"undefined"!==typeof HTMLImageElement&&r instanceof HTMLImageElement?(y=r.naturalWidth,x=r.naturalHeight):(y=r.width,x=r.height);x={glName:m.l,width:y,height:x};y=m.g;y.canvas.width=x.width;y.canvas.height=x.height;y.activeTexture(y.TEXTURE0);m.h.bindTexture2d(m.l);y.texImage2D(y.TEXTURE_2D,0,y.RGBA,y.RGBA,y.UNSIGNED_BYTE,r);m.h.bindTexture2d(0);m=x;break a;case "detections":x=m.m[n.stream];
x||(x=new Fb(m.h),m.m[n.stream]=x);m=x;m.data||(m.data=new m.g.DetectionListData);m.data.reset(r.length);for(x=0;x<r.length;++x){y=r[x];var C=m.data,D=C.setBoundingBox,I=x;var F=y.R;var p=new xb;X(p,1,F.W);X(p,2,F.X);X(p,3,F.height);X(p,4,F.width);X(p,5,F.rotation);X(p,6,F.V);F=new Wa;var q=p;p=F;T(p,1,V(q,1));T(p,2,V(q,2));T(p,3,V(q,3));T(p,4,V(q,4));T(p,5,V(q,5));q=V(q,6);if(null!=q&&null!=q){S(p.g,48);p=p.g;var B=q;q=0>B;B=Math.abs(B);var v=B>>>0;B=Math.floor((B-v)/4294967296);B>>>=0;q&&(B=~B>>>
0,v=(~v>>>0)+1,4294967295<v&&(v=0,B++,4294967295<B&&(B=0)));P=v;Q=B;q=P;for(v=Q;0<v||127<q;)p.push(q&127|128),q=(q>>>7|v<<25)>>>0,v>>>=7;p.push(q)}F=Xa(F);D.call(C,I,F);if(y.M)for(C=0;C<y.M.length;++C)p=y.M[C],q=p.visibility?!0:!1,D=m.data,I=D.addNormalizedLandmark,F=x,p=Object.assign(Object.assign({},p),{visibility:q?p.visibility:0}),q=new sb,X(q,1,p.x),X(q,2,p.y),X(q,3,p.z),p.visibility&&X(q,4,p.visibility),v=p=new Wa,T(v,1,V(q,1)),T(v,2,V(q,2)),T(v,3,V(q,3)),T(v,4,V(q,4)),T(v,5,V(q,5)),p=Xa(p),
I.call(D,F,p);if(y.L)for(C=0;C<y.L.length;++C){D=m.data;I=D.addClassification;F=x;p=y.L[C];q=new nb;X(q,2,p.score);p.index&&X(q,1,p.index);p.label&&X(q,3,p.label);p.displayName&&X(q,4,p.displayName);p=new Wa;v=q;q=p;var G=V(v,1);if(null!=G&&null!=G)if(S(q.g,8),B=q.g,0<=G)S(B,G);else{for(var H=0;9>H;H++)B.push(G&127|128),G>>=7;B.push(1)}T(q,2,V(v,2));B=V(v,3);null!=B&&Ya(q,3,Ea(B));v=V(v,4);null!=v&&Ya(q,4,Ea(v));p=Xa(p);I.call(D,F,p)}}m=m.data;break a;default:m={}}}u=m;w=n.stream;switch(n.type){case "video":e.pushTexture2d(Object.assign(Object.assign({},
u),{stream:w,timestamp:g}));break;case "detections":t=u;t.stream=w;t.timestamp=g;e.pushDetectionList(t);break;default:throw Error("Unknown input config type: '"+n.type+"'");}}f.i.send(e);return M(z,f.B,4);case 4:e.delete(),z.g=0}})})};
function Sb(a,b,c){return Z(a,function f(){var g,e,h,k,l,n,u=this,w,t,z,m,r,x,y,C;return N(f,function(D){switch(D.g){case 1:if(!c)return D.return(b);g={};e=0;h=L(Object.keys(c));for(k=h.next();!k.done;k=h.next())l=k.value,n=c[l],"string"!==typeof n&&"texture"===n.type&&void 0!==b[n.stream]&&++e;1<e&&(u.F=!1);w=L(Object.keys(c));k=w.next();case 2:if(k.done){D.g=4;break}t=k.value;z=c[t];if("string"===typeof z)return y=g,C=t,M(D,Tb(u,t,b[z]),13);m=b[z.stream];if("detection_list"===z.type){if(m){var I=
m.getRectList();for(var F=m.getLandmarksList(),p=m.getClassificationsList(),q=[],B=0;B<I.size();++B){var v=I.get(B);a:{var G=new xb;for(v=new Na(v);Oa(v);)switch(v.i){case 13:var H=R(v.g);X(G,1,H);break;case 21:H=R(v.g);X(G,2,H);break;case 29:H=R(v.g);X(G,3,H);break;case 37:H=R(v.g);X(G,4,H);break;case 45:H=R(v.g);X(G,5,H);break;case 48:for(var O=v.g,K=128,Ga=0,Y=H=0;4>Y&&128<=K;Y++)K=O.h[O.g++],Ga|=(K&127)<<7*Y;128<=K&&(K=O.h[O.g++],Ga|=(K&127)<<28,H|=(K&127)>>4);if(128<=K)for(Y=0;5>Y&&128<=K;Y++)K=
O.h[O.g++],H|=(K&127)<<7*Y+3;if(128>K){O=Ga>>>0;K=H>>>0;if(H=K&2147483648)O=~O+1>>>0,K=~K>>>0,0==O&&(K=K+1>>>0);O=4294967296*K+(O>>>0);H=H?-O:O}else O.l=!0,H=void 0;X(G,6,H);break;default:if(!mb(v))break a}}G={R:{W:W(G,1),X:W(G,2),height:W(G,3),width:W(G,4),rotation:W(G,5,0),V:kb(G,6)},M:hb(wb(F.get(B)),sb).map(Ab),L:zb(rb(p.get(B)))};q.push(G)}I=q}else I=[];g[t]=I;D.g=7;break}if("proto_list"===z.type){if(m){I=Array(m.size());for(F=0;F<m.size();F++)I[F]=m.get(F);m.delete()}else I=[];g[t]=I;D.g=7;
break}if(void 0===m){D.g=3;break}if("proto"===z.type){g[t]=m;D.g=7;break}if("texture"!==z.type)throw Error("Unknown output config type: '"+z.type+"'");r=u.s[t];r||(r=new Cb(u.h,u.C),u.s[t]=r);return M(D,Db(r,m,u.F),12);case 12:x=D.h,g[t]=x;case 7:z.transform&&g[t]&&(g[t]=z.transform(g[t]));D.g=3;break;case 13:y[C]=D.h;case 3:k=w.next();D.g=2;break;case 4:return D.return(g)}})})}
function Tb(a,b,c){return Z(a,function f(){var g=this,e;return N(f,function(h){return"number"===typeof c||c instanceof Uint8Array||c instanceof g.h.Uint8BlobList?h.return(c):c instanceof g.h.Texture2dDataOut?(e=g.s[b],e||(e=new Cb(g.h,g.C),g.s[b]=e),h.return(Db(e,c,g.F))):h.return(void 0)})})}
function Qb(a,b){for(var c=b.name||"$",d=[].concat(ea(b.wants)),f=new a.h.StringList,g=L(b.wants),e=g.next();!e.done;e=g.next())f.push_back(e.value);g=a.h.PacketListener.implement({onResults:function(h){for(var k={},l=0;l<b.wants.length;++l)k[d[l]]=h.get(l);var n=a.listeners[c];n&&(a.B=Sb(a,k,b.outs).then(function(u){u=n(u);for(var w=0;w<b.wants.length;++w){var t=k[d[w]];"object"===typeof t&&t.hasOwnProperty&&t.hasOwnProperty("delete")&&t.delete()}u&&(a.B=u)}))}});a.i.attachMultiListener(f,g);f.delete()}
A.onResults=function(a,b){this.listeners[b||"$"]=a};ya("Solution",Lb);ya("OptionType",{BOOL:0,NUMBER:1,Y:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Ub(a){a=a||{};this.g=new Lb({locateFile:a.locateFile,files:[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"}],graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:Bb},multiHandedness:{type:"proto_list",
stream:"multi_handedness",transform:function(b){return b.map(function(c){return zb(rb(c))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},
maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",
fieldName:"threshold"}}}})}A=Ub.prototype;A.close=function(){this.g.close();return Promise.resolve()};A.onResults=function(a){this.g.onResults(a)};A.initialize=function(){return Z(this,function b(){var c=this;return N(b,function(d){return M(d,c.g.initialize(),0)})})};A.reset=function(){this.g.reset()};A.send=function(a){return Z(this,function c(){var d=this;return N(c,function(f){return M(f,d.g.send(a),0)})})};A.setOptions=function(a){this.g.setOptions(a)};ya("Hands",Ub);
ya("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]);ya("VERSION","0.3.1630010197");}).call(this);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/hands.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mediapipe_drawing_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mediapipe/drawing_utils */ "./node_modules/@mediapipe/drawing_utils/drawing_utils.js");
/* harmony import */ var _mediapipe_drawing_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mediapipe_drawing_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mediapipe_hands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mediapipe/hands */ "./node_modules/@mediapipe/hands/hands.js");
/* harmony import */ var _mediapipe_hands__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mediapipe_hands__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mediapipe_camera_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mediapipe/camera_utils */ "./node_modules/@mediapipe/camera_utils/camera_utils.js");
/* harmony import */ var _mediapipe_camera_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mediapipe_camera_utils__WEBPACK_IMPORTED_MODULE_2__);



const videoElement = document.createElement('video');
const canvasElement = document.createElement('canvas');
videoElement.width = 320;
videoElement.height = 240;
canvasElement.width = 640;
canvasElement.height = 340;
document.body.append(videoElement);
document.body.append(canvasElement);
const canvasCtx = canvasElement.getContext('2d');
function onResults(results) {
    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
    if (results.multiHandLandmarks) {
        console.log(results.multiHandLandmarks);
        for (const landmarks of results.multiHandLandmarks) {
            (0,_mediapipe_drawing_utils__WEBPACK_IMPORTED_MODULE_0__.drawConnectors)(canvasCtx, landmarks, _mediapipe_hands__WEBPACK_IMPORTED_MODULE_1__.HAND_CONNECTIONS, { color: '#00FF00', lineWidth: 5 });
            (0,_mediapipe_drawing_utils__WEBPACK_IMPORTED_MODULE_0__.drawLandmarks)(canvasCtx, landmarks, { color: '#FF0000', lineWidth: 2 });
        }
    }
    canvasCtx.restore();
}
const hands = new _mediapipe_hands__WEBPACK_IMPORTED_MODULE_1__.Hands({ locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
    } });
hands.setOptions({
    maxNumHands: 2,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
});
hands.onResults(onResults);
const camera = new _mediapipe_camera_utils__WEBPACK_IMPORTED_MODULE_2__.Camera(videoElement, {
    onFrame: async () => {
        await hands.send({ image: videoElement });
    },
    width: 1280,
    height: 720
});
camera.start().then(r => {
    console.log(r);
});

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=hands.js.map
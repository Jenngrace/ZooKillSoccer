(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObj = function GameObj(name) {
	_classCallCheck(this, GameObj);

	console.log('in GameObj');

	this.name = name;
};

exports.default = GameObj;

},{}],2:[function(require,module,exports){
'use strict';

var _GameObj = require('./GameObj.js');

var _GameObj2 = _interopRequireDefault(_GameObj);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('loading game.');

// Create a generic GameObj

var obj = new _GameObj2.default('donald trump');

},{"./GameObj.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0dhbWVPYmouanMiLCJtb2R1bGVzL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7SUNBcUIsTyxHQUVwQixpQkFBYyxJQUFkLEVBQXFCO0FBQUE7O0FBRXBCLFNBQVEsR0FBUixDQUFZLFlBQVo7O0FBRUEsTUFBSyxJQUFMLEdBQVksSUFBWjtBQUVBLEM7O2tCQVJtQixPOzs7OztBQ0FyQjs7Ozs7O0FBRUEsUUFBUSxHQUFSLENBQVksZUFBWjs7QUFFQTs7QUFFQSxJQUFJLE1BQU0sc0JBQVksY0FBWixDQUFWIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVPYmoge1xuXG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBHYW1lT2JqJyk7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXG5cdH1cblxufSIsImltcG9ydCBHYW1lT2JqIGZyb20gJy4vR2FtZU9iai5qcyc7XG5cbmNvbnNvbGUubG9nKCdsb2FkaW5nIGdhbWUuJyk7XG5cbi8vIENyZWF0ZSBhIGdlbmVyaWMgR2FtZU9ialxuXG5sZXQgb2JqID0gbmV3IEdhbWVPYmooJ2RvbmFsZCB0cnVtcCcpOyJdfQ==

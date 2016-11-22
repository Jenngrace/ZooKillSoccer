(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Animal = function (_Dynamic) {
	_inherits(Animal, _Dynamic);

	function Animal(name) {
		_classCallCheck(this, Animal);

		console.log('in Animal');
		// end of constructor

		return _possibleConstructorReturn(this, (Animal.__proto__ || Object.getPrototypeOf(Animal)).call(this, name));
	}

	return Animal;
}(_Dynamic3.default); // end of class


exports.default = Animal;

},{"./Dynamic.js":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Static2 = require('./Static.js');

var _Static3 = _interopRequireDefault(_Static2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Cage = function (_Static) {
	_inherits(Cage, _Static);

	function Cage(name) {
		_classCallCheck(this, Cage);

		console.log('in Cage');
		// end of constructor

		return _possibleConstructorReturn(this, (Cage.__proto__ || Object.getPrototypeOf(Cage)).call(this, name));
	} // end of class

	return Cage;
}(_Static3.default);

exports.default = Cage;

},{"./Static.js":12}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dynamic = function (_GameObj) {
	_inherits(Dynamic, _GameObj);

	function Dynamic(name) {
		_classCallCheck(this, Dynamic);

		console.log('in Dynamic');
		// end of constructor

		return _possibleConstructorReturn(this, (Dynamic.__proto__ || Object.getPrototypeOf(Dynamic)).call(this, name));
	}

	return Dynamic;
}(_GameObj3.default); // end of class


exports.default = Dynamic;

},{"./GameObj.js":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameObj = function () {

	// inherits from generic Javascript Object;

	function GameObj(name) {
		_classCallCheck(this, GameObj);

		console.log('in GameObj');

		this.name = name;

		this.id = this.setId();
	} // end of constructor
	/** 
 *get the name assigned to this object
 *@returns {String} the name
 */

	_createClass(GameObj, [{
		key: 'getId',
		value: function getId() {
			return this.Id;
		}
	}, {
		key: 'getName',
		value: function getName() {
			return this.name;
		}
	}, {
		key: 'setName',
		value: function setName(newName) {
			this.name = newName;
		}
	}, {
		key: 'setId',
		value: function setId() {
			var d = new Date().getTime();
			if (window.performance && typeof window.performance.now === "function") {
				d += performance.now(); //use high-precision timer if available
			}
			var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
				var r = (d + Math.random() * 16) % 16 | 0;
				d = Math.floor(d / 16);
				return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
			});
			return uuid;
		}
	}]);

	return GameObj;
}();

exports.default = GameObj;

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GameScreen = function (_Screen) {
	_inherits(GameScreen, _Screen);

	function GameScreen(name) {
		_classCallCheck(this, GameScreen);

		var _this = _possibleConstructorReturn(this, (GameScreen.__proto__ || Object.getPrototypeOf(GameScreen)).call(this, name));

		_this.dom = document.getElementById('game-screen');

		return _this;
	} // end of class

	return GameScreen;
}(_Screen3.default);

exports.default = GameScreen;

},{"./Screen.js":10}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HUD = function (_GameObj) {
	_inherits(HUD, _GameObj);

	function HUD(name) {
		_classCallCheck(this, HUD);

		console.log('in HUD');
		// end of constructor

		return _possibleConstructorReturn(this, (HUD.__proto__ || Object.getPrototypeOf(HUD)).call(this, name));
	} // end of class

	return HUD;
}(_GameObj3.default);

exports.default = HUD;

},{"./GameObj.js":4}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lostscreen = function (_Screen) {
	_inherits(Lostscreen, _Screen);

	function Lostscreen(name) {
		_classCallCheck(this, Lostscreen);

		console.log('in LostScreen');

		var _this = _possibleConstructorReturn(this, (Lostscreen.__proto__ || Object.getPrototypeOf(Lostscreen)).call(this, name));

		_this.dom = document.getElementById('lost-screen');
		return _this;
	} // end of constructor


	return Lostscreen;
}(_Screen3.default);

//end of class


exports.default = Lostscreen;

},{"./Screen.js":10}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Dynamic) {
	_inherits(Player, _Dynamic);

	function Player(name) {
		_classCallCheck(this, Player);

		console.log('in Player');
		// end of constructor

		return _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, name));
	}

	return Player;
}(_Dynamic3.default); // end of class


exports.default = Player;

},{"./Dynamic.js":3}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _HUD2 = require('./HUD.js');

var _HUD3 = _interopRequireDefault(_HUD2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Score = function (_HUD) {
	_inherits(Score, _HUD);

	function Score(name) {
		_classCallCheck(this, Score);

		console.log('in Score');
		// end of constructor

		return _possibleConstructorReturn(this, (Score.__proto__ || Object.getPrototypeOf(Score)).call(this, name));
	} // end of class

	return Score;
}(_HUD3.default);

exports.default = Score;

},{"./HUD.js":6}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Screen = function (_GameObj) {
	_inherits(Screen, _GameObj);

	function Screen(name) {
		_classCallCheck(this, Screen);

		console.log('in Screen');
		// end of constructor

		return _possibleConstructorReturn(this, (Screen.__proto__ || Object.getPrototypeOf(Screen)).call(this, name));
	} // end of class

	_createClass(Screen, [{
		key: 'show',
		value: function show() {

			this.dom.style.display = 'block';
		}
	}, {
		key: 'hide',
		value: function hide() {

			this.dom.style.display = 'none';
		}
	}]);

	return Screen;
}(_GameObj3.default);

exports.default = Screen;

},{"./GameObj.js":4}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StartScreen = function (_Screen) {
	_inherits(StartScreen, _Screen);

	function StartScreen(name) {
		_classCallCheck(this, StartScreen);

		console.log('in StartScreen');
		// end of constructor


		var _this = _possibleConstructorReturn(this, (StartScreen.__proto__ || Object.getPrototypeOf(StartScreen)).call(this, name));

		_this.dom = document.getElementById('start-screen');

		return _this;
	} // end of class

	return StartScreen;
}(_Screen3.default);

exports.default = StartScreen;

},{"./Screen.js":10}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GameObj2 = require('./GameObj.js');

var _GameObj3 = _interopRequireDefault(_GameObj2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Static = function (_GameObj) {
	_inherits(Static, _GameObj);

	function Static(name) {
		_classCallCheck(this, Static);

		console.log('in Static');
		// end of constructor

		return _possibleConstructorReturn(this, (Static.__proto__ || Object.getPrototypeOf(Static)).call(this, name));
	} // end of class

	return Static;
}(_GameObj3.default);

exports.default = Static;

},{"./GameObj.js":4}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Dynamic2 = require('./Dynamic.js');

var _Dynamic3 = _interopRequireDefault(_Dynamic2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Trump = function (_Dynamic) {
	_inherits(Trump, _Dynamic);

	function Trump(name) {
		_classCallCheck(this, Trump);

		console.log('in Trump');
		// end of constructor

		return _possibleConstructorReturn(this, (Trump.__proto__ || Object.getPrototypeOf(Trump)).call(this, name));
	}

	return Trump;
}(_Dynamic3.default); // end of class


exports.default = Trump;

},{"./Dynamic.js":3}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Screen2 = require('./Screen.js');

var _Screen3 = _interopRequireDefault(_Screen2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Wonscreen = function (_Screen) {
	_inherits(Wonscreen, _Screen);

	function Wonscreen(name) {
		_classCallCheck(this, Wonscreen);

		console.log('in WonScreen');

		var _this = _possibleConstructorReturn(this, (Wonscreen.__proto__ || Object.getPrototypeOf(Wonscreen)).call(this, name));

		_this.dom = document.getElementById('won-screen');
		return _this;
	} // end of constructor


	return Wonscreen;
}(_Screen3.default);

//end of class


exports.default = Wonscreen;

},{"./Screen.js":10}],15:[function(require,module,exports){
'use strict';

var _GameObj = require('./GameObj.js');

var _GameObj2 = _interopRequireDefault(_GameObj);

var _Screen = require('./Screen.js');

var _Screen2 = _interopRequireDefault(_Screen);

var _Startscreen = require('./Startscreen.js');

var _Startscreen2 = _interopRequireDefault(_Startscreen);

var _Gamescreen = require('./Gamescreen.js');

var _Gamescreen2 = _interopRequireDefault(_Gamescreen);

var _Wonscreen = require('./Wonscreen.js');

var _Wonscreen2 = _interopRequireDefault(_Wonscreen);

var _Lostscreen = require('./Lostscreen.js');

var _Lostscreen2 = _interopRequireDefault(_Lostscreen);

var _Static = require('./Static');

var _Static2 = _interopRequireDefault(_Static);

var _Dynamic = require('./Dynamic');

var _Dynamic2 = _interopRequireDefault(_Dynamic);

var _Cage = require('./Cage');

var _Cage2 = _interopRequireDefault(_Cage);

var _Animal = require('./Animal');

var _Animal2 = _interopRequireDefault(_Animal);

var _Trump = require('./Trump');

var _Trump2 = _interopRequireDefault(_Trump);

var _Player = require('./Player');

var _Player2 = _interopRequireDefault(_Player);

var _HUD = require('./HUD.js');

var _HUD2 = _interopRequireDefault(_HUD);

var _Score = require('./Score.js');

var _Score2 = _interopRequireDefault(_Score);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('loading game.');

// Create a generic GameObj

window.startScreen = new _Startscreen2.default('Zookill start');

window.gameScreen = new _Gamescreen2.default('Zookill Game');

window.LostScreen = new _Lostscreen2.default('Zookill end');

window.wonScreen = new _Wonscreen2.default('Zookill end');

window.score = new _Score2.default('game score object');

window.static = new _Static2.default('static');

window.Dynamic = new _Dynamic2.default('dynamic');

window.Zoo = new _Static2.default('dynamic');

window.Cage = new _Cage2.default('dynamic');

window.Animal = new _Animal2.default('Animal');

window.Trump = new _Animal2.default('Trump');

window.Player = new _Player2.default('Player');

},{"./Animal":1,"./Cage":2,"./Dynamic":3,"./GameObj.js":4,"./Gamescreen.js":5,"./HUD.js":6,"./Lostscreen.js":7,"./Player":8,"./Score.js":9,"./Screen.js":10,"./Startscreen.js":11,"./Static":12,"./Trump":13,"./Wonscreen.js":14}]},{},[15])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJtb2R1bGVzL2pzL0FuaW1hbC5qcyIsIm1vZHVsZXMvanMvQ2FnZS5qcyIsIm1vZHVsZXMvanMvRHluYW1pYy5qcyIsIm1vZHVsZXMvanMvR2FtZU9iai5qcyIsIm1vZHVsZXMvanMvR2FtZXNjcmVlbi5qcyIsIm1vZHVsZXMvanMvSFVELmpzIiwibW9kdWxlcy9qcy9Mb3N0c2NyZWVuLmpzIiwibW9kdWxlcy9qcy9QbGF5ZXIuanMiLCJtb2R1bGVzL2pzL1Njb3JlLmpzIiwibW9kdWxlcy9qcy9TY3JlZW4uanMiLCJtb2R1bGVzL2pzL1N0YXJ0c2NyZWVuLmpzIiwibW9kdWxlcy9qcy9TdGF0aWMuanMiLCJtb2R1bGVzL2pzL1RydW1wLmpzIiwibW9kdWxlcy9qcy9Xb25zY3JlZW4uanMiLCJtb2R1bGVzL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztJQUVxQixNOzs7QUFFcEIsaUJBQWMsSUFBZCxFQUFxQjtBQUFBOztBQUVyQixVQUFRLEdBQVIsQ0FBWSxXQUFaO0FBQ0M7O0FBSG9CLHlHQUtkLElBTGM7QUFPckI7OztzQkFFRTs7O2tCQVhrQixNOzs7Ozs7Ozs7QUNGckI7Ozs7Ozs7Ozs7OztJQUVxQixJOzs7QUFFcEIsZUFBYyxJQUFkLEVBQXFCO0FBQUE7O0FBRXJCLFVBQVEsR0FBUixDQUFZLFNBQVo7QUFDQzs7QUFIb0IscUdBS2QsSUFMYztBQU9wQixFLENBQUM7Ozs7O2tCQVRrQixJOzs7Ozs7Ozs7QUNGckI7Ozs7Ozs7Ozs7OztJQUVxQixPOzs7QUFFcEIsa0JBQWMsSUFBZCxFQUFxQjtBQUFBOztBQUVyQixVQUFRLEdBQVIsQ0FBWSxZQUFaO0FBQ0M7O0FBSG9CLDJHQUtkLElBTGM7QUFPckI7OztzQkFFRTs7O2tCQVhrQixPOzs7Ozs7Ozs7Ozs7O0lDRkEsTzs7QUFFckI7O0FBRUMsa0JBQWMsSUFB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LFNBQVAsR0FBbUIsd0JBQWMsYUFBZCxDQUFuQjs7QUFFQSxPQUFPLEtBQVAsR0FBZSxvQkFBVSxtQkFBVixDQUFmOztBQUVBLE9BQU8sTUFBUCxHQUFnQixxQkFBVyxRQUFYLENBQWhCOztBQUVBLE9BQU8sT0FBUCxHQUFpQixzQkFBWSxTQUFaLENBQWpCOztBQUVBLE9BQU8sR0FBUCxHQUFhLHFCQUFXLFNBQVgsQ0FBYjs7QUFFQSxPQUFPLElBQVAsR0FBYyxtQkFBUyxTQUFULENBQWQ7O0FBRUEsT0FBTyxNQUFQLEdBQWdCLHFCQUFXLFFBQVgsQ0FBaEI7O0FBRUEsT0FBTyxLQUFQLEdBQWUscUJBQVcsT0FBWCxDQUFmOztBQUVBLE9BQU8sTUFBUCxHQUFnQixxQkFBVyxRQUFYLENBQWhCIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBEeW5hbWljIGZyb20gJy4vRHluYW1pYy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFuaW1hbCBleHRlbmRzIER5bmFtaWMge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdGNvbnNvbGUubG9nKCdpbiBBbmltYWwnKTtcblx0IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdHN1cGVyKCBuYW1lICk7XG5cbn1cblx0XG5cdH0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFN0YXRpYyBmcm9tICcuL1N0YXRpYy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhZ2UgZXh0ZW5kcyBTdGF0aWMge1xuXHRcblx0Y29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdGNvbnNvbGUubG9nKCdpbiBDYWdlJyk7XG5cdCAvLyBlbmQgb2YgY29uc3RydWN0b3JcblxuXHRzdXBlciggbmFtZSApO1xuXG5cdH0gLy8gZW5kIG9mIGNsYXNzXG5cbn0iLCJpbXBvcnQgR2FtZU9iaiBmcm9tICcuL0dhbWVPYmouanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEeW5hbWljIGV4dGVuZHMgR2FtZU9iaiB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0Y29uc29sZS5sb2coJ2luIER5bmFtaWMnKTtcblx0IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdHN1cGVyKCBuYW1lICk7XG5cbn1cblx0XG5cdH0gLy8gZW5kIG9mIGNsYXNzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU9iaiB7XG5cbi8vIGluaGVyaXRzIGZyb20gZ2VuZXJpYyBKYXZhc2NyaXB0IE9iamVjdDtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRcdGNvbnNvbGUubG9nKCdpbiBHYW1lT2JqJyk7XG5cblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXG5cdFx0dGhpcy5pZCA9IHRoaXMuc2V0SWQoKTtcbn0gLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG4vKiogXG4qZ2V0IHRoZSBuYW1lIGFzc2lnbmVkIHRvIHRoaXMgb2JqZWN0XG4qQHJldHVybnMge1N0cmluZ30gdGhlIG5hbWVcbiovXG5cblx0Z2V0SWQgKCkge1xuXHRcdHJldHVybiB0aGlzLklkO1xuXHR9XG5cblx0Z2V0TmFtZSAoKSB7XG5cdCBcdHJldHVybiB0aGlzLm5hbWU7XG5cbn1cblx0c2V0TmFtZSAoIG5ld05hbWUgKSB7XG5cdFx0XHR0aGlzLm5hbWUgPSBuZXdOYW1lO1xuXHRcdH1cblxuXHRcdHNldElkICgpIHtcblx0ICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHQgICAgICAgIGlmICh3aW5kb3cucGVyZm9ybWFuY2UgJiYgdHlwZW9mIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPT09IFwiZnVuY3Rpb25cIikge1xuXHQgICAgICAgICAgICBkICs9IHBlcmZvcm1hbmNlLm5vdygpOyAvL3VzZSBoaWdoLXByZWNpc2lvbiB0aW1lciBpZiBhdmFpbGFibGVcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIHV1aWQgPSAneHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4Jy5yZXBsYWNlKC9beHldL2csIGZ1bmN0aW9uIChjKSB7XG5cdCAgICAgICAgICAgIHZhciByID0gKGQgKyBNYXRoLnJhbmRvbSgpKjE2KSUxNiB8IDA7XG5cdCAgICAgICAgICAgIGQgPSBNYXRoLmZsb29yKGQvMTYpO1xuXHQgICAgICAgICAgICByZXR1cm4gKGM9PSd4JyA/IHIgOiAociYweDN8MHg4KSkudG9TdHJpbmcoMTYpO1xuXHQgICAgICAgIH0pO1xuXHQgICAgICAgIHJldHVybiB1dWlkO1xuXG59XG5cblx0fVxuXG5cdFx0XG4iLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0c3VwZXIoIG5hbWUgKTtcblxuXHR0aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnZ2FtZS1zY3JlZW4nKTtcblxuXHR9IC8vIGVuZCBvZiBjbGFzc1xuXG59IiwiaW1wb3J0IEdhbWVPYmogZnJvbSAnLi9HYW1lT2JqLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSFVEIGV4dGVuZHMgR2FtZU9iaiB7IFxuXG5jb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0Y29uc29sZS5sb2coJ2luIEhVRCcpO1xuXHQgLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cdFxuXHRzdXBlciggbmFtZSApO1xuXG5cdH0gLy8gZW5kIG9mIGNsYXNzXG5cbn0iLCJpbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9zdHNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cbmNvbnN0cnVjdG9yICggbmFtZSApIHtcblx0XG5cdGNvbnNvbGUubG9nKCdpbiBMb3N0U2NyZWVuJyk7XG5cblx0c3VwZXIoIG5hbWUgKTtcblxudGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ2xvc3Qtc2NyZWVuJyk7XG5cdH0gLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cblxufVxuXG4vL2VuZCBvZiBjbGFzc1xuIiwiaW1wb3J0IER5bmFtaWMgZnJvbSAnLi9EeW5hbWljLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheWVyIGV4dGVuZHMgRHluYW1pYyB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0Y29uc29sZS5sb2coJ2luIFBsYXllcicpO1xuXHQgLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cblx0c3VwZXIoIG5hbWUgKTtcblxufVxuXHRcblx0fSAvLyBlbmQgb2YgY2xhc3MiLCJpbXBvcnQgSFVEIGZyb20gJy4vSFVELmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmUgZXh0ZW5kcyBIVUQgeyBcblxuY29uc3RydWN0b3IgKCBuYW1lICkge1xuXG5cdGNvbnNvbGUubG9nKCdpbiBTY29yZScpO1xuXHQgLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cdFxuXHRzdXBlciggbmFtZSApO1xuXG5cdH0gLy8gZW5kIG9mIGNsYXNzXG5cbn0iLCJpbXBvcnQgR2FtZU9iaiBmcm9tICcuL0dhbWVPYmouanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JlZW4gZXh0ZW5kcyBHYW1lT2JqIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRjb25zb2xlLmxvZygnaW4gU2NyZWVuJyk7XG5cdCAvLyBlbmQgb2YgY29uc3RydWN0b3JcblxuXHRzdXBlciggbmFtZSApO1xuXG5cdH0gLy8gZW5kIG9mIGNsYXNzXG5cbnNob3cgKCkgICB7XG5cbnRoaXMuZG9tLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG59XG5cbmhpZGUgKCkgIHtcblxudGhpcy5kb20uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxufVxuXG5cblxuXG59IiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXJ0U2NyZWVuIGV4dGVuZHMgU2NyZWVuIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRjb25zb2xlLmxvZygnaW4gU3RhcnRTY3JlZW4nKTtcblx0IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG5cblx0c3VwZXIoIG5hbWUgKTtcblxudGhpcy5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggJ3N0YXJ0LXNjcmVlbicpO1xuXG5cblxuXHR9IC8vIGVuZCBvZiBjbGFzc1xuXG59IiwiaW1wb3J0IEdhbWVPYmogZnJvbSAnLi9HYW1lT2JqLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhdGljIGV4dGVuZHMgR2FtZU9iaiB7XG5cdFxuXHRjb25zdHJ1Y3RvciAoIG5hbWUgKSB7XG5cblx0Y29uc29sZS5sb2coJ2luIFN0YXRpYycpO1xuXHQgLy8gZW5kIG9mIGNvbnN0cnVjdG9yXG5cblx0c3VwZXIoIG5hbWUgKTtcblxuXHR9IC8vIGVuZCBvZiBjbGFzc1xuXG59IiwiaW1wb3J0IER5bmFtaWMgZnJvbSAnLi9EeW5hbWljLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJ1bXAgZXh0ZW5kcyBEeW5hbWljIHtcblx0XG5cdGNvbnN0cnVjdG9yICggbmFtZSApIHtcblxuXHRjb25zb2xlLmxvZygnaW4gVHJ1bXAnKTtcblx0IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG5cdHN1cGVyKCBuYW1lICk7XG5cbn1cblx0XG5cdH0gLy8gZW5kIG9mIGNsYXNzIiwiaW1wb3J0IFNjcmVlbiBmcm9tICcuL1NjcmVlbi5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdvbnNjcmVlbiBleHRlbmRzIFNjcmVlbiB7XG5cbmNvbnN0cnVjdG9yICggbmFtZSApIHtcblx0XG5cdGNvbnNvbGUubG9nKCdpbiBXb25TY3JlZW4nKTtcblxuXHRzdXBlciggbmFtZSApO1xuXG50aGlzLmRvbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnd29uLXNjcmVlbicpO1xuXHR9IC8vIGVuZCBvZiBjb25zdHJ1Y3RvclxuXG5cbn1cblxuLy9lbmQgb2YgY2xhc3NcbiIsIlxuaW1wb3J0IEdhbWVPYmogZnJvbSAnLi9HYW1lT2JqLmpzJztcblxuXG5pbXBvcnQgU2NyZWVuIGZyb20gJy4vU2NyZWVuLmpzJztcbmltcG9ydCBTdGFydFNjcmVlbiBmcm9tICcuL1N0YXJ0c2NyZWVuLmpzJztcbmltcG9ydCBHYW1lU2NyZWVuIGZyb20gJy4vR2FtZXNjcmVlbi5qcyc7XG5pbXBvcnQgV29uU2NyZWVuIGZyb20gJy4vV29uc2NyZWVuLmpzJztcbmltcG9ydCBMb3N0U2NyZWVuIGZyb20gJy4vTG9zdHNjcmVlbi5qcyc7XG5pbXBvcnQgU3RhdGljIGZyb20gJy4vU3RhdGljJztcbmltcG9ydCBEeW5hbWljIGZyb20gJy4vRHluYW1pYyc7XG5pbXBvcnQgWm9vIGZyb20gJy4vU3RhdGljJztcbmltcG9ydCBDYWdlIGZyb20gJy4vQ2FnZSc7XG5pbXBvcnQgQW5pbWFsIGZyb20gJy4vQW5pbWFsJztcbmltcG9ydCBUcnVtcCBmcm9tICcuL1RydW1wJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9QbGF5ZXInO1xuXG5cbmltcG9ydCBIVUQgZnJvbSAnLi9IVUQuanMnO1xuaW1wb3J0IFNjb3JlIGZyb20gJy4vU2NvcmUuanMnO1xuXG5cbmNvbnNvbGUubG9nKCdsb2FkaW5nIGdhbWUuJyk7XG5cbi8vIENyZWF0ZSBhIGdlbmVyaWMgR2FtZU9ialxuXG53aW5kb3cuc3RhcnRTY3JlZW4gPSBuZXcgU3RhcnRTY3JlZW4oJ1pvb2tpbGwgc3RhcnQnKTtcblxud2luZG93LmdhbWVTY3JlZW4gPSBuZXcgR2FtZVNjcmVlbignWm9va2lsbCBHYW1lJyk7XG5cbndpbmRvdy5Mb3N0U2NyZWVuID0gbmV3IExvc3RTY3JlZW4oJ1pvb2tpbGwgZW5kJyk7XG5cbndpbmRvdy53b25TY3JlZW4gPSBuZXcgV29uU2NyZWVuKCdab29raWxsIGVuZCcpO1xuXG53aW5kb3cuc2NvcmUgPSBuZXcgU2NvcmUoJ2dhbWUgc2NvcmUgb2JqZWN0Jyk7XG5cbndpbmRvdy5zdGF0aWMgPSBuZXcgU3RhdGljKCdzdGF0aWMnKTtcblxud2luZG93LkR5bmFtaWMgPSBuZXcgRHluYW1pYygnZHluYW1pYycpO1xuXG53aW5kb3cuWm9vID0gbmV3IFN0YXRpYygnZHluYW1pYycpO1xuXG53aW5kb3cuQ2FnZSA9IG5ldyBDYWdlKCdkeW5hbWljJyk7XG5cbndpbmRvdy5BbmltYWwgPSBuZXcgQW5pbWFsKCdBbmltYWwnKTtcblxud2luZG93LlRydW1wID0gbmV3IEFuaW1hbCgnVHJ1bXAnKTtcblxud2luZG93LlBsYXllciA9IG5ldyBQbGF5ZXIoJ1BsYXllcicpO1xuIl19


import GameObj from './GameObj.js';


import Screen from './Screen.js';
import StartScreen from './Startscreen.js';
import GameScreen from './Gamescreen.js';
import WonScreen from './Wonscreen.js';
import LostScreen from './Lostscreen.js';
import Static from './Static';
import Dynamic from './Dynamic';
import Zoo from './Static';
import Cage from './Cage';
import Animal from './Animal';
import Trump from './Trump';
import Player from './Player';


import HUD from './HUD.js';
import Score from './Score.js';


console.log('loading game.');

// Create a generic GameObj

window.startScreen = new StartScreen('Zookill start');

window.gameScreen = new GameScreen('Zookill Game');

window.LostScreen = new LostScreen('Zookill end');

window.wonScreen = new WonScreen('Zookill end');

window.score = new Score('game score object');

window.static = new Static('static');

window.Dynamic = new Dynamic('dynamic');

window.Zoo = new Static('dynamic');

window.Cage = new Cage('dynamic');

window.Animal = new Animal('Animal');

window.Trump = new Animal('Trump');

window.Player = new Player('Player');

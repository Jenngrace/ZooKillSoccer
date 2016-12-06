// Master object.
import GameObj from './GameObj.js';

// Screen objects.
import Screen from './Screen.js'; //never directly visible, used to construct visible screens.
import StartScreen from './StartScreen.js';
import GameScreen from './GameScreen.js';
import WonScreen from './WonScreen.js';
import LostScreen from './LostScreen.js';

// HUD objects.
import HUD from './HUD.js'; //never directly visible, used to construct visible screens.
import Score from './Score.js';

// Static Objects.

// Dynamic Objects.

console.log('loading game.');

// Global storage of all screens created.

// NOTE: convert the 'window.' to 'let' since we don't 
// NOTE: want to run globally anymore.
 
window.gameScreens = {};

let startScreen = new StartScreen('start', window.gameScreens );
window.gameScreens[ 'start'] = startScreen;

let gameScreen = new GameScreen('game', window.gameScreens );
window.gameScreens[ 'game' ] = gameScreen; 

let wonScreen = new WonScreen('won', window.gameScreens );
window.gameScreens[ 'won' ] = wonScreen;

let lostScreen = new LostScreen('lost', window.gameScreens );
window.gameScreens[ 'lost' ] = lostScreen;

console.log(" gameScreens:" + typeof window.gameScreens)

window.score = new Score('game score object');

// START THE GAME...

// Attach event listeners to the buttons on the start screen.
// Specify what each button does in code.

// Make the start screen visible
startScreen.show();











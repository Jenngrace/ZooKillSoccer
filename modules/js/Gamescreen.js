import Screen from './Screen.js';

export default class GameScreen extends Screen {
	
	constructor ( name ) {

	super( name );

	this.dom = document.getElementById( 'game-screen');

	} // end of class

}
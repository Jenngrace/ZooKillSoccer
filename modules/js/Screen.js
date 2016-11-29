import GameObj from './GameObj.js';

export default class Screen extends GameObj {
	
	constructor ( name, screenArray ) {

	console.log('in Screen');
	 // end of constructor

	super( name );

	} // end of class

setScreens ( screenArray ) {
this.screens = screenArray; 
}

getStartButton () {
 
 this.startButton = this.dom.getElementByClassName( 'game-start' ) [ 0 ];





}


getExitButton () {

	this.exitButton = this.dom.getElementByClassName( 'game-exit' ) [ 0 ];

}



}
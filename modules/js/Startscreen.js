import Screen from './Screen.js';

export default class StartScreen extends Screen {
	
	constructor ( name ) {

	console.log('in StartScreen');
	 // end of constructor


	super( name );

this.dom = document.getElementById( 'start-screen');



	} // end of class

}
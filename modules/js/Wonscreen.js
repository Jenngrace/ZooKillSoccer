import Screen from './Screen.js';

export default class Wonscreen extends Screen {

constructor ( name ) {
	
	console.log('in WonScreen');

	super( name );

this.dom = document.getElementById( 'won-screen');
	} // end of constructor


}

//end of class

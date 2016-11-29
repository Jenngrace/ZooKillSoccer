import Screen from './Screen.js';

export default class Lostscreen extends Screen {

constructor ( name ) {
	
	console.log('in LostScreen');

	super( name );

this.dom = document.getElementById( 'lost-screen');
	} // end of constructor

	this.getStartButton();

	this.getExitButton();

}
}

//end of class

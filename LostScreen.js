import Screen from './Screen.js';

export default class LostScreen extends Screen {
	
	constructor ( name, screenArray ) {

		console.log('in LostScreen');

		super( name, screenArray );

		this.dom = document.getElementById( 'lost-screen' );

		this.setBackgroundImage( 'img/screens/lost-screen.png');


		this.getStartButton();

		this.getExitButton();

	} // end of constructor
 

} // end of class
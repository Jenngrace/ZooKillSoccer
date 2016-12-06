import Screen from './Screen.js';

export default class WonScreen extends Screen {
	
	constructor ( name, screenArray ) {

		console.log('in WonScreen');

		super( name, screenArray );

		this.setBackgroundImage( 'img/screens/won-screen.png');


		this.dom = document.getElementById( 'won-screen' );

		this.getStartButton();

		this.getExitButton();

	} // end of constructor


} // end of class
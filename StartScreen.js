import Screen from './Screen.js';

export default class StartScreen extends Screen {
	
	constructor ( name, screenArray ) {

		console.log('in StartScreen, name:' + name + " screens:" + screenArray);

		super( name, screenArray );

		this.dom = document.getElementById( 'start-screen' );

		this.getStartButton(); // defined in Screen.js

this.setBackgroundImage( 'img/screens/start-screen.png');

//Wire up the start button to lead the GameScreen
		this.startButton.addEventListener( 'click', () => {

			alert(' I am in screen:' + this.name );

			this.screens[ 'start' ].hide();  // hide myself

			this.screens[ 'game' ].show();   // show the game screen

			this.screens[ 'game' ].build(); // rebuild the game with all its objects

		} );

		this.getExitButton();

	} // end of constructor



} // end of class
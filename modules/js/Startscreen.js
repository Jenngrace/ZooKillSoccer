import Screen from './Screen.js';

export default class StartScreen extends Screen {
	
	constructor ( name ) {

	console.log('in StartScreen');
	 // end of constructor


	super( name );

this.dom = document.getElementById( 'start-screen');

this.getStartButton();


this.startButton.addEventListener( 'click', function () {

window.whatsizt = window.gameScreen 
this.screens[ 'start' ].hide();
this.screens[ 'game' ].show();

});

this.getExitButton();

}

}




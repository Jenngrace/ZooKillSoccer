import GameObj from './GameObj.js';

export default class Screen extends GameObj {
	
	constructor ( name, screenArray ) {

		console.log('in Screen, name:' + name + ' screens:' + screenArray);

		super( name );

		this.setScreens( screenArray );

	} // end of constructor

	setScreens ( screenArray ) {

		console.log("in setScreens, screens:" + screenArray )
		this.screens = screenArray;

	}

	getStartButton () {

		this.startButton = this.dom.getElementsByClassName( 'game-start' )[ 0 ];

	}

	getExitButton() {

		this.exitButton = this.dom.getElementsByClassName( 'game-exit' )[ 0 ];

	}

} // end of class




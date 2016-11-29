import HUD from './HUD.js';

export default class Score extends HUD { 

constructor ( name ) {

	console.log('in Score');
	 // end of constructor
	
	super( name );

	this.dom = document.getElementById( 'game-score' );


	} // end of class

}
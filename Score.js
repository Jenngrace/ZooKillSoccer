import HUD from './HUD.js';

export default class Score extends HUD {
	
	constructor ( name ) {

		console.log('in Score');

		super( name );

		this.dom = document.getElementById( 'game-score' );

	} // end of constructor

} // end of class
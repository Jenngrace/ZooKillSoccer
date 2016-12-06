import Static from './Static.js';

export default class Cage extends Static {
	
	constructor ( name ) {

		console.log('in a Zoo Cage, name:' + name );

		super( name );

this.dom = document.createElement( 'div' );

this.setBackgroundImage( 'img/areas/cage.png');

	



	}


}
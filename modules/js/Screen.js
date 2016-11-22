import GameObj from './GameObj.js';

export default class Screen extends GameObj {
	
	constructor ( name ) {

	console.log('in Screen');
	 // end of constructor

	super( name );

	} // end of class

show ()   {

this.dom.style.display = 'block';

}

hide ()  {

this.dom.style.display = 'none';

}




}
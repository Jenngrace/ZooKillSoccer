import Dynamic from './Dynamic.js';

export default class Animal extends Dynamic {
	
	constructor ( name ) {

		console.log('in Animal object, name:' + name );

		super( name );

	}


}
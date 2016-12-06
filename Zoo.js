import Static from './Static.js';
import Cage from './Cage.js';
import Animal from './Animal.js';

export default class Zoo extends Static {
	
	constructor ( name ) {

	console.log('in Zoo');
	 // end of constructor

	super( name );

this.dom = document.createElement( 'div' );
	}



	}

	build() {

		console.log( 'in Zoo build...' );

		this.cages = [];

		this.cages.push( new Cage( 'Cage #1' ) ); // or, this.cages[0] = new Cage(....)
		this.cages.push( new Cage( 'Cage #2' ) ); // 
		this.cages.push( new Cage( 'Cage #3' ) );
		this.cages.push( new Cage( 'Cage #4' ) );

		for ( let i = 0; i < this.cages.lenght; i++ ) {

			this.dom.appendChild( this.cages[ i ].dom );
		}

		this.animals = [];

		this.animals.push( new Animal( 'lion' ) );
		this.animals.push( new Animal( 'tiger' ) );
		this.animals.push( new Animal( 'bear' ) );
		this.animals.push( new Animal( 'gorilla' ) );



	}

	
} // end of class
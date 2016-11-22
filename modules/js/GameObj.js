export default class GameObj {

// inherits from generic Javascript Object;
	
	constructor ( name ) {

		console.log('in GameObj');

		this.name = name;

		this.id = this.setId();
} // end of constructor
/** 
*get the name assigned to this object
*@returns {String} the name
*/

	getId () {
		return this.Id;
	}

	getName () {
	 	return this.name;

}
	setName ( newName ) {
			this.name = newName;
		}

		setId () {
	        var d = new Date().getTime();
	        if (window.performance && typeof window.performance.now === "function") {
	            d += performance.now(); //use high-precision timer if available
	        }
	        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
	            var r = (d + Math.random()*16)%16 | 0;
	            d = Math.floor(d/16);
	            return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	        });
	        return uuid;

}

	}

		

/* // CALL 
let o = {
    carId: 123,
    getId: function(){
	 return this.carId;
    } 
};

let newCar = { carId: 456 };
console.log(o.getId.call(newCar));
//456
*/

// APPLY
let o = {
    carId: 123,
    getId: function(prefix){
	 return prefix + this.carId;
    } 
};
let newCar = { carId: 456 };

console.log(o.getId.apply(newCar, ['ID: '])); //456


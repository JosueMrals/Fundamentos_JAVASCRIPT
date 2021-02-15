/*let fn = function (){ 
    console.log(this === window);
};

fn(); // true
*/

let o = {
    carId: 123,
    getId: function(){
	 return this.carId;
    } 
};

 console.log( o.getId()); // 123


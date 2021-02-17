class Carro {
    constructor(id){
      this.id = id;
    }
    identificar(){
      return `Carro Id: ${this.id}`;
    }
}

let carro = new Carro(123);
console.log( carro.id ); // 123
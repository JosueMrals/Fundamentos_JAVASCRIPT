class Vehiculo {
    constructor(id){
      this.tipo = 'carro';
    }
    iniciar(){
      return `Iniciando: ${this.tipo}`;
    }
}

class Carro extends Vehiculo {

}

let carro = new Carro();
console.log( carro.tipo ); //carro

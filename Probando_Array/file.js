let ids = [
    { idCarro: 123, estilo: 'sedan' },
    { idCarro: 456, estilo: 'convertible' },
    { idCarro: 789, estilo: 'sedan' }
];
let resultado = ids.every(
    car => car.idCarro > 0
);
console.log(resultado);

let ids = [
    { idCarro: 123, estilo: 'sedan' },
    { idCarro: 456, estilo: 'convertible' },
    { idCarro: 789, estilo: 'sedan' }
];
let car = ids.find(
    car => car.idCarro > 500
);
console.log(car);
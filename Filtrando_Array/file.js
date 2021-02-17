let ids = [
    { idCarro: 123, estilo: 'sedan' },
    { idCarro: 456, estilo: 'convertible' },
    { idCarro: 789, estilo: 'sedan' }
];
let convertibles = ids.filter(
    car => car.estilo === 'convertible'
);
console.log(convertibles);

let ids = [
    { idCarro: 123, estilo: 'sedan' },
    { idCarro: 456, estilo: 'convertible' },
    { idCarro: 789, estilo: 'sedan' }
];

ids.forEach(car => console.log(car));

ids.forEach((car,index) => console.log(car,index));

/*function enviarCarros(...idCarros)
{ 
   idCarros.forEach(id => console.log(id));
}

enviarCarros(100,200,300);

//100 200 300*/

function enviarCarros(dia,...idCarros)
{ 
   idCarros.forEach(id => console.log(id));
}

enviarCarros('Miercoles',100,200,300);

//100 200 300

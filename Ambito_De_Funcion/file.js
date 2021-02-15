/*function iniciarCarro(idCarro)
{ 
   let mensaje = 'Iniciando...';
}
iniciarCarro(123);
console.log(mensaje); // mensaje is not undefined
*/
function iniciarCarro(idCarro){ 
    let mensaje = 'Iniciando...';
    let iniciarFn = function iniciarCarro(){
        let mensaje = 'Reemplazando'; 
    };
    iniciarFn();
    console.log(mensaje); // ‘Iniciando’
 } 
iniciarCarro(123);
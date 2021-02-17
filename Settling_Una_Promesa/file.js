let promesa = new Promise(
    function(resolve,reject){
       setTimeOut(resolve,100,'Otro Valor');
    }
 );
 promesa.then(
   value => console.log("resuelto:" + value);
   error => console.log("rechazado:" + error);
 );
 
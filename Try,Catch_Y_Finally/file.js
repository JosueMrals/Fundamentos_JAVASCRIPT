try {
    let car = new Car;
}
catch(error){
    console.log('error: ',error);
}
finally{
    console.log('Esto siempre se ejecuta');
}

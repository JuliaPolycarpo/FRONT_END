const vizualizador = (algo) => console.log(algo);

let promessa = new Promise((resolve, reject) => {
    let ok = false;

    setTimeout(() => ok = true, 3000);

    if(ok){
        resolve("Ok!");
    }else {
        reject("Erro!");
    }
});

promessa.then((valor) => vizualizador(valor), (razao) => vizualizador(razao));
const fs = require("fs");


const listas = (listNum)=>{

    return JSON.parse(fs.readFileSync(`./data/figuras${listNum}.json`, 'utf-8'))

}


const importar = function (marca){
    const figuras = [...listas(1), ...listas(2), ...listas(3)];
    const figurasSegunMarca = figuras.filter(figura=>figura.marca.toLowerCase() === marca.toLowerCase())

    return figurasSegunMarca

}

module.exports = importar

// console.log(importar("Bandai"))
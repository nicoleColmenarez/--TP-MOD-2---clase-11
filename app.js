const fs = require('fs');
const arrayFiguras = require('./collectibles');

const hotToys = arrayFiguras('hot toys')
const bandai = arrayFiguras('bandai')
const starWars = arrayFiguras('star wars')
const unifiedCollectibles = [...hotToys, ...bandai, ...starWars]
const collectables = {
    figuras : unifiedCollectibles,

    listFigures : function(figArray = this.figuras){
        figArray.forEach(function ({marca, nombre, precio, stock}) {
            console.log(`
            -----------------------------
            MARCA:${marca}
            NOMBRE:${nombre}
            PRECIO:${precio}
            STOCK:${stock}
            -----------------------------
            `)
        })
    },

    figuresByBrand : function(marcas){
        const figuraSegunMarca = this.figuras.filter((marca)=>marca.marca === marcas)
        return this.listFigures(figuraSegunMarca)
    }
}

// collectables.listFigures()
// console.log(collectables.figuras)
console.log(collectables.figuresByBrand("Bandai"))
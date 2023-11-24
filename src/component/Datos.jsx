import enemigo from "../assets/img/enemigo.png"
import rutini from "../assets/img/rutini.png"
import catena from "../assets/img/catena.png"
const datos = {
    productos: [
        { id: 1, title: "El Enemigo",descripcion:"Vineyard Gualtallary, Tupungato, 1470 masl / 4822 ftTipo de Suelo Suelo pedregoso, profundo, calcáreo.",sku:"VIENEMI-MALV-42",precio:9000,disponible:74, url: enemigo }, 
        { id: 2, title: "Dv Catena", descripcion:"DV Catena Cabernet Sauvignon-Malbec es un vino elegante y complejo, de color rojo rubí con reflejos violetas.",sku:"VIDVCAT-CABE-52",precio:12000,disponible:94, url: catena }, 
        { id: 3, title: "Rutini",descripcion:"Rojo violáceo, con matices azulados.Notas de ciruelas especias que recuerdan a vainilla, anís, pimienta negra",sku:"VIRUTIN-MALV-62",precio:14000,disponible:144, url: rutini }
    ]



}

export default datos
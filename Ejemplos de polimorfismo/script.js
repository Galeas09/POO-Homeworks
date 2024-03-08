
class Plato {
    constructor(nombre, tipo, calorias){
        this.nombre = nombre
        this.tipo = tipo
        this.calorias = calorias
    }

    descrip() {
        return console.log(`El plato ${this.nombre} es un ${this.tipo} que contiene ${this.calorias} calorías.`)
    }
}

class Entrante extends Plato {
    descripcion(){
        return console.log(`El entrante ${this.nombre} es un ${this.tipo} que contiene ${this.calorias} calorías.`)
    }
}

class PlatoPrincipal extends Plato {
    descripcion(){
        return console.log(`El plato principal ${this.nombre} es un ${this.tipo} que contiene ${this.calorias} calorías.`)
    }
}

class Postre extends Plato {
    descripcion(){
        return console.log(`El postre ${this.nombre} es un ${this.tipo} que contiene ${this.calorias} calorías.`)
    }
}

let ensalada = new Entrante('Nachos con salsa', 'entrante', 250)
let pasta = new PlatoPrincipal('Tacos al pastor', 'plato principal', 800)
let helado = new Postre('Cheesecake', 'postre', 400)

ensalada.descrip()
pasta.descrip()
helado.descrip() 

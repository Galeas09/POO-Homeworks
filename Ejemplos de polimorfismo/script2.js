class Juego {
    constructor(titulo, plataforma, precio){
        this.titulo = titulo
        this.plataforma = plataforma
        this.precio = precio
    }

    detalles() {
        return console.log(`El videojuego ${this.titulo} está disponible en ${this.plataforma} por un precio de ${this.precio} dólares.`)
    }
}

class Consola extends Juego {
    detalles(){
        return console.log(`La consola ${this.titulo} está disponible en ${this.plataforma} por un precio de ${this.precio} dólares.`)
    }
}

class Accesorio extends Juego {
    detalles(){
        return console.log(`El accesorio ${this.titulo} está disponible para ${this.plataforma} por un precio de ${this.precio} dólares.`)
    }
}

let videojuego = new Juego('Cyberpunk2077', 'PC, PS4, Xbox Series', 69.99)
let ps5 = new Consola('PlayStation 5', 'PS5', 699.99)
let headset = new Accesorio('Logitech X Super Light', 'PC', 120.99)

videojuego.detalles()
ps5.detalles()
headset.detalles() 
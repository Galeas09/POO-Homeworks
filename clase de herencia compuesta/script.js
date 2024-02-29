/*
class a {
    constructor(nombre){
        this.nombre = nombre
    }

}

class b {
    constructor(apellido){
        this.apellido = apellido
    }

}

class c {
    constructor(nombre, apellido){
        this.a= new a(nombre)
        this.b= new b(apellido)
    }
    invocar (){
        return `${this.a.nombre} + ${this.b.apellido}`
    }
}
let obj = new c ('Gustavo', 'Merlos')
alert(obj.invocar())
*/

class a {
    constructor(cliente){
        this.cliente = cliente
    }
}

class b {
    constructor(carro){
        this.carro = carro
    }
}

class c {
    constructor(credito){
        this.credito = credito
    }
}

class d {
    constructor(cliente, carro, credito){
        this.a= new a(cliente)
        this.b= new b(carro)
        this.c= new c(credito)
    }
    invocar(){
        return `El cliente ${this.a.cliente} recibio un  ${this.b.carro} al credito por el ${this.c.credito}`
    }
}
let obj =new d('Carlos Galeas', 'Honda civic', 'Banco Agricola')
alert(obj.invocar())
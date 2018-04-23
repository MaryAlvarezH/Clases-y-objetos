//Lo mas abastracto posible(molde/generico)

class Perro{ 
    //Atributos 
    /*color
    tamano
    peso*/
    //constructor metodo que las clases siempre van a tener, sirven para inicializar un objeto con los valores dados
    //cuando quieres que cree un metodo necesito que me pases estos parametros
     
 
    constructor(color,tamano,peso){
        console.log("Perro creado")
        console.log("El color es:"+color)
    }
    
    //Metodos
    ladrar(){

    }
    correr(){

    }
    morder(){

    }
}

var ayudanteSanta=new Perro("Cafe", "Grande", "Gordo")
console.log(ayudanteSanta)
console.log(typeof(ayudanteSanta))
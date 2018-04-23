//Crear un objeto de tipo cuadrado con antributos base y altura y tener los metodos area y perimetro

class Cuadrado{

    constructor(lado){
        this.lado=lado

    }
area(){
    return (this.lado*this.lado)
    }

perimetro(){
    return (4*this.lado)
    }
}
var c1=new Cuadrado(6)

var x=c1.area()
console.log("Area:" + x) //escupira el valor en cualquier archivo en cualquier lugar 

var y=c1.perimetro()
console.log("Perimetro:" +y) //escupira el valor en cualquier archivo en cualquier lugar 
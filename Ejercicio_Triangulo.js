class Triangulo{
    constructor (lado1, altura, base){
    this.lado1=lado1
    this.altura=altura
    this.base=base
    }

    perimetro(){
        return (this.lado1+this.lado1+this.base)
    }
    area(){
        return((this.base*this.altura)/2)
    }
}
t1=new Triangulo(4,6,3)

var x=t1.area()
console.log("Area:" + x) //escupira el valor en cualquier archivo en cualquier lugar 

var y=t1.perimetro()
console.log("Perimetro:" +y) //escupira el valor en cualquier archivo en cualquier lugar 
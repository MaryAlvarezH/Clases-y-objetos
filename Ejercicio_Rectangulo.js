//Crear un objeto de tipo rectangulo con antributos base y altura y tener los metodos area y perimetro

class Rectangulo{

    constructor(base, altura){
        this.base=base;
        this.altura=altura;

    }
area(){
    var cal=this.base*this.altura
    return cal
    }

perimetro(){
    var cal2=(this.base*2)+(this.altura*2)
    return cal2
    }
}
var t1=new Rectangulo(8,2)

var x=t1.area()
console.log("Area:" + x) //escupira el valor en cualquier archivo en cualquier lugar 

var y=t1.perimetro()
console.log("Perimetro:" +y) //escupira el valor en cualquier archivo en cualquier lugar 
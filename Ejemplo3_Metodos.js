
class Perro{ 
   
    constructor(color,tamano,peso){
        this.color=color //la materia prima para construir un perro el this es alcanzable en cualquier metodo por eso si se iutilizan los atributos en los metodos es necesario emplearlo
        this.tamano=tamano
        this.peso=peso
        console.log("El perro se hizo")
      
    }
    
    //Metodos
    ladrar(){
        return "Guaaau"
    }
    correr(){

    }
   getColor(){
       console.log(this.color)
   }

   setColor(newColor){ 
    this.color=newColor
   }

   suma(){
       let suma=this.peso+12
       console.log(suma)

   }
}

var ayudanteSanta=new Perro("Cafe", "Grande", "Gordo") //se crea una instancia nueva hacia perro
var pug=new Perro("Blanco", "Chico", "Gordo")
pug.ladrar() //con esto no hara nada 
var x=pug.ladrar()
console.log(x) //escupira el valor en cualquier archivo en cualquier lugar 

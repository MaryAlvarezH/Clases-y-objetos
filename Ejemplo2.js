//Lo mas abastracto posible(molde/generico)
//lenguaje fuertemente equipado, los datos mutan siempre concatena valores si son de diferenre tipo
class Perro{ 
   
    constructor(color,tamano,peso){
        this.color=color //la materia prima para construir un perro el this es alcanzable en cualquier metodo por eso si se iutilizan los atributos en los metodos es necesario emplearlo
        this.tamano=tamano
        this.peso=peso
        console.log("El perro se hizo")
      
    }
    
    //Metodos
    ladrar(){
        console.log("Guaaau")
    }
    correr(){

    }
   getColor(){
       console.log(this.color) //this referencia que se asi asi mismo this. se convierte en ayudanteSanta o pug obten el color del objeto y damelo
   }

   setColor(newColor){ //modifica el dato original 
    this.color=newColor
   }

   suma(){
       let suma=this.peso+12
       console.log(suma)

   }
}

var ayudanteSanta=new Perro("Cafe", "Grande", "Gordo") //se crea una instancia nueva hacia perro
var pug=new Perro("Blanco", "Chico", "Gordo")
console.log(ayudanteSanta) //dice los datos del objeto
console.log(typeof(ayudanteSanta))
ayudanteSanta.getColor()
ayudanteSanta.setColor("Negro")
ayudanteSanta.getColor()
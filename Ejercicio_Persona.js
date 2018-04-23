/*Haz una clase llamada Persona que siga las siguientes condiciones:
    Sus atributos son: nombre, edad, DNI, sexo, peso y altura.
    calcularIMC()
    esMayorDeEdad()
    El constructor pide nombre, edad,sexo,peso y altura
    Generar el DNI a partir de el nombre, edad y sexo*/
    
class Persona{
    constructor (nombre,edad,sexo,peso,altura){
        this.nombre=nombre
        this.edad=edad
        this.peso=peso
        this.sexo=sexo
        this.altura=altura
    }

 CalcularIMC(){
  var imc=(this.peso/(this.altura*this.altura))
  return (imc)
 }
 esMayorDeEdad(){
     if (this.edad>=18){
         return ("Mayor de edad")
     }
     else {
         return ("Menor de edad")
     }
 }
 ObtenerDNI(){

 }

}

var p1=new Persona("Mary", "23", "Femenino", 56, 1.57)

var x=p1.CalcularIMC()
console.log(x)

var y=p1.esMayorDeEdad()
console.log(y)
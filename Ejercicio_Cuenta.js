/*Crear un objeto Cuenta que tenga los siguientes atributos y metodos:
Titular y cantidad
ingresar(cantidad)
retirar(cantidad)
Hacer las validaciones previas
Como regla de negocio no debe de tener más de $900 y menos de $10*/

class Cuenta{
    constructor(titular,cantidad){
    this.titular=titular
    this.cantidad=cantidad

    }

    Ingresar(ingreso){
        if ((ingreso+this.cantidad)<=900){
            this.cantidad=this.cantidad+ingreso
            return ("Tu saldo actual es:" + this.cantidad)
        }
        else{
            return ("No puedes exceder tu saldo de 900")
        }
    }
    Retirar(retiro){
        if ((this.cantidad>10) && (retiro<this.cantidad)){
           this.cantidad=this.cantidad-retiro
           return ("Tu saldo actual es:" + this.cantidad)
        }
        else if (this.cantidad<10){
            return("No puede realizarse ninguna transaccion con un saldo menor a 10")
        }

        else if (retiro>this.cantidad){
            return ("Saldo insuficiente para la transaccion")
        }
    
    }
    GetCantidad(){
        return ("Tu saldo actual es:"+this.cantidad)

    }

    
}

var c1=new Cuenta("Isabel", 300)

a=c1.GetCantidad()
console.log(a)

x=c1.Ingresar(300)
console.log(x)

y=c1.Retirar(100)
console.log(y)
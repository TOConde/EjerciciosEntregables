import { Cuenta } from '../ejercicoCuenta/cuenta'; 

class CuentaCorriente extends Cuenta {
  private sobreGiro: number;

  constructor(titular: string, saldo: number, id: number, sobreGiro: number) {
    super(titular, saldo, id);
    this.sobreGiro = sobreGiro;
  }

  aplicarInteres(): void {
    const interes: number =  0.06;
    const interesGanado = this.getSaldo() * interes;
    const nuevoSaldo = this.getSaldo() + interesGanado;
    
    this.setSaldo(nuevoSaldo);
  }

  aplicarSobregiro(monto: number): void {
    let nuevoSaldo: number;
    if (monto <= this.sobreGiro) {
      nuevoSaldo = this.getSaldo() - monto;
      this.sobreGiro -= monto;
      this.setSaldo(nuevoSaldo);
    } else {
      console.log("Sobregiro maximo excedido.");
    }
  }
}

class CuentaAhorro extends Cuenta {
  /* no me parecio correcto poner el interes como una propiedad para poder calcular el interes, como pedia el ejercicio.
  * private interes: number;
  */
  constructor(titular: string, saldo: number, id: number, /*interes: number*/) {
    super(titular, saldo, id);
    //this.interes = interes;
  }

  calcularInteres(interesMensual: number): void { //me parece mejor pedirlo como parametro del metodo.
    const interesGanadoMensual = this.getSaldo() * interesMensual;

    console.log(`Se calculo el interes mensual de ${this.getTitular()}, con un saldo de ${this.getSaldo()} tendra un interes de: ${interesGanadoMensual} mensuales.`)
  }
}

console.clear(); //si no limpiaba la consola me imprimia las cosas del archivo de "cuenta.ts"
console.log("*********Ejercicio Cuentas Bancarias***********");
console.log("");

const cuentaCorriente = new CuentaCorriente('lucas', 5000, 15, 500);
const cuentaAhorro = new CuentaAhorro('martin', 100000, 150);

cuentaCorriente.mostrar();
cuentaAhorro.mostrar();

cuentaCorriente.aplicarInteres();
cuentaCorriente.mostrar();

cuentaCorriente.aplicarSobregiro(200);
cuentaCorriente.mostrar();
cuentaCorriente.aplicarSobregiro(350);
cuentaCorriente.mostrar();

cuentaAhorro.calcularInteres(0.05)


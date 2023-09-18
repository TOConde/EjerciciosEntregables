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

  aplicarSobreGiro(): void {

  }
}

class CuentaAhorro extends Cuenta {
  private interes: number;

  constructor(titular: string, saldo: number, id: number, interes: number) {
    super(titular, saldo, id);
    this.interes = interes;
  }

  calcularInteres(): void {

  }
}

console.clear(); //si no limpiaba la consola me imprimia las cosas del archivo de "cuenta.ts"
console.log("*********Ejercicio Cuentas Bancarias***********");
console.log("");

const cuentaCorriente = new CuentaCorriente('pepe', 5000, 15, 500);
cuentaCorriente.mostrar();

cuentaCorriente.aplicarInteres();

cuentaCorriente.mostrar();
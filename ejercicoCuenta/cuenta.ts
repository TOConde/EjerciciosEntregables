export class Cuenta {
  private titular: string;
  private saldo: number;
  private id: number;

  constructor(titular: string, saldo: number, id: number) {
    this.titular = titular;
    this.saldo = saldo;
    this.id = id
  }

  getTitular(): string {
    return this.titular
  }

  getSaldo(): number {
    return this.saldo
  }

  setSaldo(saldoNuevo): void {
    this.saldo = saldoNuevo;
  }

  getId() :number {
    return this.id
  }

  mostrar() {
    console.log("*****");
    console.log(`Titular: ${this.titular}, Saldo: ${this.saldo}, ID: ${this.id}`);
    console.log("*****");
  }

  ingresar(monto: number) {
    if (monto > 0) {
      this.saldo += monto;
      console.log("*****");
      console.log(`Se registro el ingreso por ${monto}$ a la cuenta de titular: ${this.titular}`)
      console.log("*****");
    } else {
      console.log("*****");
      console.log(`Ingrese un monto mayor a cero`);
      console.log("*****");
    }
  }

  retirar(monto: number) {
    if (monto > 0 && monto <= this.saldo) {
      this.saldo -= monto;
      console.log("*****");
      console.log(`Se registro el retiro por ${monto}$ de la cuenta de titular: ${this.titular}`)
      console.log("*****");
    } else {
      console.log("*****");
      console.log(`Ingrese un monto mayor a cero o saldo insuficiente`);
      console.log("*****");
    }
  }

  transferir(monto: number, cuentaDestino: Cuenta) {
    if (monto > 0 && monto <= this.saldo) {
      this.retirar(monto);
      cuentaDestino.ingresar(monto);
      console.log(`Se ha transferido ${monto} a la cuenta de ${cuentaDestino.getTitular()}.`);
    } else {
      console.log('Monto de transferencia no válido o saldo insuficiente.');
    }
  }
}

const cuenta1 = new Cuenta("pepe", 20050, 1025);
const cuenta2 = new Cuenta("carlos", 10000, 1026);

cuenta1.mostrar();
cuenta2.mostrar();

cuenta1.transferir(1000, cuenta2)

cuenta1.mostrar();
cuenta2.mostrar();
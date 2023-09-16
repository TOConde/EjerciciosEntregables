// Ejercicio 3 de patrones
// log de transacciones de una cuenta

class TransaccionLog {
  private static me: TransaccionLog | null = null;
  private transacciones: string[] = [];

  public static getInstance(): TransaccionLog {
    if (!TransaccionLog.me) {
      TransaccionLog.me = new TransaccionLog();
    }    
    return TransaccionLog.me;
  }

  public registrarTransaccion(monto: number, moneda: string, saldo: number): void {
    const mensaje = `Transaccion reegistrada: Monto: ${monto} ${moneda}, Saldo: ${saldo} U$D`
    this.transacciones.push(mensaje);
  }

  public mostrarTransacciones(): void {
    console.log ('Transacciones registradas:')
    this.transacciones.forEach((transaccion, index) => {
      console.log(`${index + 1}. ${transaccion}`)
    })
  }

}

class Cuenta {
  private numeroCuenta: number;
  private saldo: number;
  private transaccionLog: TransaccionLog;

  constructor(numeroCuenta: number, saldo: number) {
    this.numeroCuenta = numeroCuenta;
    this.saldo = saldo;
    this.transaccionLog = TransaccionLog.getInstance();
  }

  private conversorMoneda(monto: number, moneda: string): number {
    const USD: number = 1;
    const EUR: number = 1.07;
    const ARS: number = 0.0029 //el oficial
    let montoUSD: number;

    if (moneda === 'EUR') {
      montoUSD = monto * EUR;
    } else if (moneda === 'ARS') {
      montoUSD = monto * ARS;
    } else {
      montoUSD = monto * USD;
    }
    return montoUSD
  }

  public realizarTransaccion(monto: number, moneda: string): void {
    const montoUSD = this.conversorMoneda(monto, moneda)
    const nuevoSaldo = this.saldo + montoUSD

    if (nuevoSaldo >= 0) {
      this.saldo = nuevoSaldo;
      this.transaccionLog.registrarTransaccion(monto, moneda, this.saldo);
    } else {
      console.log(`Saldo insuficiente al querer retirar ${montoUSD}U$D`)
    }    
  }

  public consultarSaldo(): number {
    return this.saldo;
  }

}

const log = TransaccionLog.getInstance();
const cuenta = new Cuenta(123, 1000);

cuenta.realizarTransaccion(200, "EUR");
cuenta.realizarTransaccion(-100, "USD");
cuenta.realizarTransaccion(10000, "ARS");
cuenta.realizarTransaccion(-10000, "USD");
cuenta.realizarTransaccion(20000, "ARS");

log.mostrarTransacciones();
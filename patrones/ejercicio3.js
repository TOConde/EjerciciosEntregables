// Ejercicio 3 de patrones
// log de transacciones de una cuenta
var TransaccionLog = /** @class */ (function () {
    function TransaccionLog() {
        this.transacciones = [];
    }
    TransaccionLog.getInstance = function () {
        if (!TransaccionLog.me) {
            TransaccionLog.me = new TransaccionLog();
        }
        return TransaccionLog.me;
    };
    TransaccionLog.prototype.registrarTransaccion = function (monto, moneda, saldo) {
        var mensaje = "Transaccion reegistrada: Monto: ".concat(monto, " ").concat(moneda, ", Saldo: ").concat(saldo, " U$D");
        this.transacciones.push(mensaje);
    };
    TransaccionLog.prototype.mostrarTransacciones = function () {
        console.log('Transacciones registradas:');
        this.transacciones.forEach(function (transaccion, index) {
            console.log("".concat(index + 1, ". ").concat(transaccion));
        });
    };
    TransaccionLog.me = null;
    return TransaccionLog;
}());
var Cuenta = /** @class */ (function () {
    function Cuenta(numeroCuenta, saldo) {
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
        this.transaccionLog = TransaccionLog.getInstance();
    }
    Cuenta.prototype.conversorMoneda = function (monto, moneda) {
        var USD = 1;
        var EUR = 1.07;
        var ARS = 0.0029; //el oficial
        var montoUSD;
        if (moneda === 'EUR') {
            montoUSD = monto * EUR;
        }
        else if (moneda === 'ARS') {
            montoUSD = monto * ARS;
        }
        else {
            montoUSD = monto * USD;
        }
        return montoUSD;
    };
    Cuenta.prototype.realizarTransaccion = function (monto, moneda) {
        var montoUSD = this.conversorMoneda(monto, moneda);
        var nuevoSaldo = this.saldo + montoUSD;
        if (nuevoSaldo >= 0) {
            this.saldo = nuevoSaldo;
            this.transaccionLog.registrarTransaccion(monto, moneda, this.saldo);
        }
        else {
            console.log("Saldo insuficiente al querer retirar ".concat(montoUSD, "U$D"));
        }
    };
    Cuenta.prototype.consultarSaldo = function () {
        return this.saldo;
    };
    return Cuenta;
}());
var log = TransaccionLog.getInstance();
var cuenta = new Cuenta(123, 1000);
cuenta.realizarTransaccion(200, "EUR");
cuenta.realizarTransaccion(-100, "USD");
cuenta.realizarTransaccion(10000, "ARS");
cuenta.realizarTransaccion(-10000, "USD");
cuenta.realizarTransaccion(20000, "ARS");
log.mostrarTransacciones();

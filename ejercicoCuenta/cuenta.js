"use strict";
exports.__esModule = true;
exports.Cuenta = void 0;
var Cuenta = /** @class */ (function () {
    function Cuenta(titular, saldo, id) {
        this.titular = titular;
        this.saldo = saldo;
        this.id = id;
    }
    Cuenta.prototype.getTitular = function () {
        return this.titular;
    };
    Cuenta.prototype.getSaldo = function () {
        return this.saldo;
    };
    Cuenta.prototype.setSaldo = function (saldoNuevo) {
        this.saldo = saldoNuevo;
    };
    Cuenta.prototype.getId = function () {
        return this.id;
    };
    Cuenta.prototype.mostrar = function () {
        console.log("*****");
        console.log("Titular: ".concat(this.titular, ", Saldo: ").concat(this.saldo, ", ID: ").concat(this.id));
        console.log("*****");
    };
    Cuenta.prototype.ingresar = function (monto) {
        if (monto > 0) {
            this.saldo += monto;
            console.log("*****");
            console.log("Se registro el ingreso por ".concat(monto, "$ a la cuenta de titular: ").concat(this.titular));
            console.log("*****");
        }
        else {
            console.log("*****");
            console.log("Ingrese un monto mayor a cero");
            console.log("*****");
        }
    };
    Cuenta.prototype.retirar = function (monto) {
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto;
            console.log("*****");
            console.log("Se registro el retiro por ".concat(monto, "$ de la cuenta de titular: ").concat(this.titular));
            console.log("*****");
        }
        else {
            console.log("*****");
            console.log("Ingrese un monto mayor a cero o saldo insuficiente");
            console.log("*****");
        }
    };
    Cuenta.prototype.transferir = function (monto, cuentaDestino) {
        if (monto > 0 && monto <= this.saldo) {
            this.retirar(monto);
            cuentaDestino.ingresar(monto);
            console.log("Se ha transferido ".concat(monto, " a la cuenta de ").concat(cuentaDestino.getTitular(), "."));
        }
        else {
            console.log('Monto de transferencia no válido o saldo insuficiente.');
        }
    };
    return Cuenta;
}());
exports.Cuenta = Cuenta;
var cuenta1 = new Cuenta("pepe", 20050, 1025);
var cuenta2 = new Cuenta("carlos", 10000, 1026);
cuenta1.mostrar();
cuenta2.mostrar();
cuenta1.transferir(1000, cuenta2);
cuenta1.mostrar();
cuenta2.mostrar();

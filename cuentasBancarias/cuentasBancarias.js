"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var cuenta_1 = require("../ejercicoCuenta/cuenta");
var CuentaCorriente = /** @class */ (function (_super) {
    __extends(CuentaCorriente, _super);
    function CuentaCorriente(titular, saldo, id, sobreGiro) {
        var _this = _super.call(this, titular, saldo, id) || this;
        _this.sobreGiro = sobreGiro;
        return _this;
    }
    CuentaCorriente.prototype.aplicarInteres = function () {
        var interes = 0.06;
        var interesGanado = this.getSaldo() * interes;
        var nuevoSaldo = this.getSaldo() + interesGanado;
        this.setSaldo(nuevoSaldo);
    };
    CuentaCorriente.prototype.aplicarSobregiro = function (monto) {
        var nuevoSaldo;
        if (monto <= this.sobreGiro) {
            nuevoSaldo = this.getSaldo() - monto;
            this.sobreGiro -= monto;
            this.setSaldo(nuevoSaldo);
        }
        else {
            console.log("Sobregiro maximo excedido.");
        }
    };
    return CuentaCorriente;
}(cuenta_1.Cuenta));
var CuentaAhorro = /** @class */ (function (_super) {
    __extends(CuentaAhorro, _super);
    /* no me parecio correcto poner el interes como una propiedad para poder calcular el interes, como pedia el ejercicio.
    * private interes: number;
    */
    function CuentaAhorro(titular, saldo, id) {
        return _super.call(this, titular, saldo, id) || this;
        //this.interes = interes;
    }
    CuentaAhorro.prototype.calcularInteres = function (interesMensual) {
        var interesGanadoMensual = this.getSaldo() * interesMensual;
        console.log("Se calculo el interes mensual de ".concat(this.getTitular(), ", con un saldo de ").concat(this.getSaldo(), " tendra un interes de: ").concat(interesGanadoMensual, " mensuales."));
    };
    return CuentaAhorro;
}(cuenta_1.Cuenta));
console.clear(); //si no limpiaba la consola me imprimia las cosas del archivo de "cuenta.ts"
console.log("*********Ejercicio Cuentas Bancarias***********");
console.log("");
var cuentaCorriente = new CuentaCorriente('lucas', 5000, 15, 500);
var cuentaAhorro = new CuentaAhorro('martin', 100000, 150);
cuentaCorriente.mostrar();
cuentaAhorro.mostrar();
cuentaCorriente.aplicarInteres();
cuentaCorriente.mostrar();
cuentaCorriente.aplicarSobregiro(200);
cuentaCorriente.mostrar();
cuentaCorriente.aplicarSobregiro(350);
cuentaCorriente.mostrar();
cuentaAhorro.calcularInteres(0.05);

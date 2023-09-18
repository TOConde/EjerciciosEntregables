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
    CuentaCorriente.prototype.aplicarSobreGiro = function () {
    };
    return CuentaCorriente;
}(cuenta_1.Cuenta));
var CuentaAhorro = /** @class */ (function (_super) {
    __extends(CuentaAhorro, _super);
    function CuentaAhorro(titular, saldo, id, interes) {
        var _this = _super.call(this, titular, saldo, id) || this;
        _this.interes = interes;
        return _this;
    }
    CuentaAhorro.prototype.calcularInteres = function () {
    };
    return CuentaAhorro;
}(cuenta_1.Cuenta));
console.clear();
console.log("");
console.log("");
console.log("*********Ejercicio Cuentas Bancarias***********");
console.log("");
var cuentaCorriente = new CuentaCorriente('pepe', 5000, 15, 500);
cuentaCorriente.mostrar();
cuentaCorriente.aplicarInteres();
cuentaCorriente.mostrar();

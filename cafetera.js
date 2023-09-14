// ejercicio pagina 6, desarrolla una clase Cafetera
var Cafetera = /** @class */ (function () {
    function Cafetera(capacidadMaxima, cantidadActual) {
        if (capacidadMaxima === void 0) { capacidadMaxima = 1000; }
        if (cantidadActual === void 0) { cantidadActual = 0; }
        this._capacidadMaxima = capacidadMaxima;
        this._cantidadActual = cantidadActual;
    }
    Cafetera.prototype.llenarCafetera = function () {
        this._cantidadActual = this._capacidadMaxima;
    };
    Cafetera.prototype.servirTaza = function (capacidadTaza) {
        if (capacidadTaza <= this._cantidadActual) {
            this._cantidadActual = this._cantidadActual - capacidadTaza;
            console.log("Se sirvio una taza de ".concat(capacidadTaza, " cc, queda ").concat(this._cantidadActual, " cc de cafe"));
        }
        else {
            console.log("Se intento servir una taza de ".concat(capacidadTaza, " cc pero no hay tanto cafe! Se sirvio una taza de ").concat(this._cantidadActual, " cc, no queda cafe!"));
            this._cantidadActual = 0;
        }
    };
    Cafetera.prototype.vaciarCafetera = function () {
        this._cantidadActual = 0;
    };
    Cafetera.prototype.agregarCafe = function (cantidad) {
        this._cantidadActual = cantidad;
    };
    return Cafetera;
}());
var cafetera1 = new Cafetera;
var cafetera2 = new Cafetera(1250, 1000);
console.log(cafetera1);
console.log(cafetera2);
cafetera1.llenarCafetera();
cafetera2.vaciarCafetera();
console.log("");
console.log("");
console.log(cafetera1);
console.log(cafetera2);
cafetera2.agregarCafe(250);
console.log(cafetera2);
cafetera1.servirTaza(250);
console.log(cafetera1);
cafetera1.servirTaza(1000);
console.log(cafetera1);

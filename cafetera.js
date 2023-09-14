// ejercicio pagina 6, desarrolla una clase Cafetera
var Cafetera = /** @class */ (function () {
    function Cafetera(capacidadMaxima, cantidadActual) {
        if (capacidadMaxima === void 0) { capacidadMaxima = 1000; }
        this._capacidadMaxima = capacidadMaxima;
        if (typeof cantidadActual === 'number') {
            this._cantidadActual = Math.min(cantidadActual, capacidadMaxima);
        }
        else if (capacidadMaxima === 1000) {
            this._cantidadActual = 0;
        }
        else {
            this._cantidadActual = capacidadMaxima;
        }
    }
    Cafetera.prototype.llenarCafetera = function () {
        this._cantidadActual = this._capacidadMaxima;
        console.log("Se lleno la cafetera a su m\u00E1xima capacidad ".concat(this._cantidadActual, "cc"));
    };
    Cafetera.prototype.servirTaza = function (capacidadTaza) {
        if (capacidadTaza <= this._cantidadActual) {
            this._cantidadActual = this._cantidadActual - capacidadTaza;
            console.log("Se sirvio una taza de ".concat(capacidadTaza, "cc, queda ").concat(this._cantidadActual, "cc de cafe"));
        }
        else {
            console.log("Se intento servir una taza de ".concat(capacidadTaza, "cc pero no hay tanto cafe! Se sirvio una taza de ").concat(this._cantidadActual, "cc, no queda cafe!!!"));
            this._cantidadActual = 0;
        }
    };
    Cafetera.prototype.vaciarCafetera = function () {
        this._cantidadActual = 0;
        console.log("Se vaci\u00F3 la cafetera!");
    };
    Cafetera.prototype.agregarCafe = function (cantidad) {
        this._cantidadActual = cantidad;
        console.log("Se agrego ".concat(cantidad, "cc de cafe."));
    };
    return Cafetera;
}());
var cafetera1 = new Cafetera;
var cafetera2 = new Cafetera(1250);
var cafetera3 = new Cafetera(1000, 200);
var cafetera4 = new Cafetera(1000, 2000);
console.log(cafetera1);
console.log(cafetera2);
console.log(cafetera3);
console.log(cafetera4);

// Ejercicio 2 de patrones
// fabrica de vehiculos(autos, camionetas..)
// vehiculos tienen: marca, modelo y detalles, como cantidad de asientos, capacidad de carga, ruedas...
var FabricarVehiculo = /** @class */ (function () {
    function FabricarVehiculo(builder) {
        this.builder = builder;
    }
    FabricarVehiculo.prototype.fabricarVehiculo = function (marca, modelo, color, cantidadAsientos) {
        this.builder.setMarca(marca);
        this.builder.setModelo(modelo);
        this.builder.setColor(color);
        this.builder.setAsientos(cantidadAsientos);
        return this.builder.build();
    };
    return FabricarVehiculo;
}());
var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca, modelo, color, cantidadAsientos) {
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.cantidadAsientos = cantidadAsientos;
    }
    return Vehiculo;
}());
var VehiculoBuilderEspecifico = /** @class */ (function () {
    function VehiculoBuilderEspecifico() {
        this.vehiculo = new Vehiculo('', '', '', 0);
    }
    VehiculoBuilderEspecifico.prototype.setMarca = function (marca) {
        this.vehiculo.marca = marca;
    };
    VehiculoBuilderEspecifico.prototype.setModelo = function (modelo) {
        this.vehiculo.modelo = modelo;
    };
    VehiculoBuilderEspecifico.prototype.setColor = function (color) {
        this.vehiculo.color = color;
    };
    VehiculoBuilderEspecifico.prototype.setAsientos = function (cantidadAsientos) {
        this.vehiculo.cantidadAsientos = cantidadAsientos;
    };
    VehiculoBuilderEspecifico.prototype.build = function () {
        return this.vehiculo;
    };
    return VehiculoBuilderEspecifico;
}());
// Prueba de fabricar vehiculos
var fabrica1 = new FabricarVehiculo(new VehiculoBuilderEspecifico());
var auto1 = fabrica1.fabricarVehiculo('Fiat', '147', 'Blanco', 3);
var fabrica2 = new FabricarVehiculo(new VehiculoBuilderEspecifico());
var auto2 = fabrica2.fabricarVehiculo('Volkswagen', 'gol trend', 'Gris', 4);
console.log(auto1);
console.log(auto2);

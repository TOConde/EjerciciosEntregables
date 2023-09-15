// Ejercicio 2 de patrones
// fabrica de vehiculos(autos, camionetas..)
// vehiculos tienen: marca, modelo y detalles, como cantidad de asientos, capacidad de carga, ruedas...


class FabricarVehiculo {
  private builder: VehiculoBuilder;

  constructor(builder: VehiculoBuilder) {
    this.builder = builder;
  }

  fabricarVehiculo(marca: string, modelo: string, color: string, cantidadAsientos: number) {
    this.builder.setMarca(marca);
    this.builder.setModelo(modelo);
    this.builder.setColor(color);
    this.builder.setAsientos(cantidadAsientos);

    return this.builder.build();
  }
}

class Vehiculo {
  constructor(public marca: string, public modelo: string, public color: string, public cantidadAsientos: number) {
    
  }
}

interface VehiculoBuilder {
  setMarca(marca: string): void;
  setModelo(modelo: string): void;
  setColor(color: string): void;
  setAsientos(cantidadAsientos: number): void;
  build(): Vehiculo;
}

class VehiculoBuilderEspecifico implements VehiculoBuilder {
  private vehiculo: Vehiculo;

  constructor() {
    this.vehiculo = new Vehiculo('', '', '', 0)
  }

  setMarca(marca: string): void {
    this.vehiculo.marca = marca; 
  }

  setModelo(modelo: string): void {
    this.vehiculo.modelo = modelo;
  }

  setColor(color: string): void {
    this.vehiculo.color = color;
  }

  setAsientos(cantidadAsientos: number): void {
    this.vehiculo.cantidadAsientos = cantidadAsientos;
  }

  build(): Vehiculo {
    return this.vehiculo;
  }
}

// Prueba de fabricar vehiculos

const fabrica1 = new FabricarVehiculo(new VehiculoBuilderEspecifico());
const auto1 = fabrica1.fabricarVehiculo('Fiat', '147', 'Blanco', 3);

const fabrica2 = new FabricarVehiculo(new VehiculoBuilderEspecifico());
const auto2 = fabrica2.fabricarVehiculo('Volkswagen', 'gol trend', 'Gris', 4)

console.log(auto1);
console.log(auto2);

// No estoy seguro de si usar el patron builder es lo mas apropiado.
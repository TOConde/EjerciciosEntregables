// Ejercicio 2 de patrones
// fabrica de vehiculos(autos, camionetas..)
// vehiculos tienen: marca, modelo y detalles, como cantidad de asientos, capacidad de carga, ruedas...


class FabricarVehiculo {
  constructor() {

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

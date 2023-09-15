// Ejercicio 2 de patrones
// fabrica de vehiculos(autos, camionetas..)
// vehiculos tienen: marca, modelo y detalles, como cantidad de asientos, capacidad de carga, ruedas...


class FabricarVehiculo {
  constructor() {

  }
}

class Vehiculo {
  constructor(marca: string, modelo: string, color: string, cantidadAsientos: number) {
    
  }
}

interface VehiculoBuilder {
  setMarca(marca: string): void;
  setModelo(modelo: string): void;
  setColor(color: string): void;
  setAsientos(cantidadAsientos: number): void;
  build(): Vehiculo;
}

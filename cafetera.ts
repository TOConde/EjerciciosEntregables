// ejercicio pagina 6, desarrolla una clase Cafetera

class Cafetera {
  private _capacidadMaxima: number;
  private _cantidadActual: number;

  constructor(capacidadMaxima: number = 1000, cantidadActual?: number) {
    this._capacidadMaxima = capacidadMaxima;

    if (typeof cantidadActual === 'number') {
      this._cantidadActual = Math.min(cantidadActual, capacidadMaxima);
    } else if(capacidadMaxima === 1000) {
      this._cantidadActual = 0;
    } else {
      this._cantidadActual = capacidadMaxima;
    }
  }

  llenarCafetera() {
    this._cantidadActual = this._capacidadMaxima;
    console.log(`Se lleno la cafetera a su máxima capacidad ${this._cantidadActual}cc`)
  }

  servirTaza(capacidadTaza: number) {
    if (capacidadTaza <= this._cantidadActual) {
      this._cantidadActual = this._cantidadActual - capacidadTaza;
      console.log(`Se sirvio una taza de ${capacidadTaza}cc, queda ${this._cantidadActual}cc de cafe`)
      
    } else {
      console.log(`Se intento servir una taza de ${capacidadTaza}cc pero no hay tanto cafe! Se sirvio una taza de ${this._cantidadActual}cc, no queda cafe!!!`)
      this._cantidadActual = 0;
    }
  }

  vaciarCafetera() {
    this._cantidadActual = 0;
    console.log(`Se vació la cafetera!`)
  }

  agregarCafe(cantidad: number) {
    if (cantidad <= this._capacidadMaxima) {
      this._cantidadActual = cantidad;
      console.log(`Se agrego ${cantidad}cc de cafe.`)
    } else {
      console.log(`Trataste de sobrepasar la capacidad de la cafetera! Te sobro ${cantidad - this._cantidadActual}cc de cafe`)
      this._cantidadActual = this._capacidadMaxima;      
    }
    
  }

}

// creo las cafeteras comprobando que los requerimientos del constructor se cumplan
const cafetera1 = new Cafetera; //constructor predeterminado (1000,0)
const cafetera2 = new Cafetera(1250); //constructor solo capacidad maxima y la actual se iguala a esa capacidad proporcionada (1250,1250)
const cafetera3 = new Cafetera(1000, 200); // se dan los 2 parametros
const cafetera4 = new Cafetera(1000, 2000); // se dan los 2 parametros pero la cantidad actual excede la capacidad maxima, se iguala la cantidad a la capacidad (1000,1000)

console.log(cafetera1);
console.log(cafetera2);
console.log(cafetera3);
console.log(cafetera4);

// lleno la cafetera
cafetera1.llenarCafetera();

// sirvo una taza y trato de servir una taza cuando no tengo tanto cafe
cafetera3.servirTaza(100);
cafetera3.servirTaza(200); // sirve la cantidad que puede de cafe

// vacio la cafetera
cafetera4.vaciarCafetera();
console.log(cafetera4);
console.log("");

// agrego cafe
cafetera4.agregarCafe(200);
console.log(cafetera4);

cafetera4.agregarCafe(2000);
console.log(cafetera4);


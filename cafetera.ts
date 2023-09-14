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
    this._cantidadActual = cantidad;
    console.log(`Se agrego ${cantidad}cc de cafe.`)
  }

}

const cafetera1 = new Cafetera;
const cafetera2 = new Cafetera(1250);
const cafetera3 = new Cafetera(1000, 200);
const cafetera4 = new Cafetera(1000, 2000);

console.log(cafetera1);
console.log(cafetera2);
console.log(cafetera3);
console.log(cafetera4);


export default class Precio {
  constructor(valor){
      this._valor = valor
  }
  getPrecio(){
      return`$${this._valor.toFixed(2)}`
  }
}
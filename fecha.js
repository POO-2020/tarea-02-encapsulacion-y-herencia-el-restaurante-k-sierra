export default class Fecha{
  constructor(año, mes, dia){
      this._fecha = new Date(año, mes-1, dia)
      this._nombreMes = [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre"
      ]
      this._nombreDia = [
          "Domingo",
          "Lunes",
          "Martes",
          "Miercoles",
          "Jueves",
          "Viernes",
          "Sabado"
      ]
      this._fechaActual = new Date(Date.now())
  }
  getFecha(){
      return`${this._fecha.getDate()}/${this._nombreMes[this._fecha.getMonth()]}/${this._fecha.getFullYear()}`
  }
  getAños(){
      return`${(this._fechaActual.getFullYear()-this._fecha.getFullYear())} años desde ${this._fecha.getFullYear()}`
  }
  getMeses(){
      return`${(this._fechaActual.getFullYear()-this._fecha.getFullYear())* 12} meses desde ${this._fecha.getFullYear()}`
  }
  getSemanas(){
      return`${(this._fechaActual.getFullYear()-this._fecha.getFullYear()) * 52} semanas desde ${this._fecha.getFullYear()}`
    }
  getDias(){
      return`${(this._fechaActual.getFullYear()-this._fecha.getFullYear())* 365} dias desde ${this._fecha.getFullYear()}`
  }
  getDiaFecha(){
      return`${this._nombreDia[this._fecha.getDay()]}`
  }
}
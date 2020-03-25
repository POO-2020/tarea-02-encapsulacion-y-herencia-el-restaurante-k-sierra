import Precio from './precio.js'
import Tiempo from './tiempo.js'
import Fecha from './fecha.js'
import Pedido from './pedido.js'
import Restaurante from './restaurante.js'
import Cliente from './cliente.js'
import Producto from './producto.js'
import ElementoPedido from './elemento-pedido.js'
import Direccion from './direccion.js'
import ClienteFrecuente from './cliente-frecuente.js'

const direccion1 = new Direccion("Dr. Miguel Galindo", 709, 0, "Villa de Oro", 28985, "Colima", "Villa de Alvarez")
const cliente1 = new Cliente ("Karla Sierra", direccion1, "312-10-30-659")
const datosClienteFrec1 = {
    nombre: "Loki Sierra",
    direccion: new Direccion ("Dr. Miguel Galindo",711, 2, "Villa de Oro", 28985, "Colima", "Villa de Alvarez"),
    telefono: "312-30-95-330" ,
    numeroCliente: 5,
    fechaRegistro: new Fecha (2020, 5, 5)  
}
const datosPedido1 = {
    fecha: new Fecha(2020, 5, 4),
    hora: new Tiempo(4,20,"PM"),
    cliente: cliente1,
    numPedido: 11
} 
const datosPedido2 = {
    fecha: new Fecha(2020, 4, 5),
    hora: new Tiempo (1, 30, "PM"),
    cliente: cliente1,
    numPedido: 12
}
class Main {
    constructor(){
      this.producto1 = new Producto("Pizza peperoni", new Precio(85))
      this.producto2 = new Producto("Pizza de piña", new Precio(80))
      this.elementoPedido1 = new ElementoPedido(this.producto1, 4)
      this.elementoPedido2 = new ElementoPedido(this.producto2, 5)
      this.restaurante = new Restaurante ({
        nombre: "El Loki asado",
        telefono: "312-638-123",
        direccion: new Direccion("Av. Pino Suarez", 190, 0, "Patria", 28000, "Colima", "Colima")
      })
      this.pedido1 = new Pedido(datosPedido1)
      this.pedido2 = new Pedido(datosPedido2) 
      this.clienteFrec1 = new ClienteFrecuente (datosClienteFrec1) 
    }
    probarPrecio(){
      let precio1 = new Precio(145)
      console.log(precio1.getPrecio())
    }
    probarProducto(){
      console.log(this.producto1.getDescripcion())
    }
    probarElementoPedido(){
      console.log(this.elementoPedido1.getDescripcion())
    }
    probarDireccion(){
      console.log(direccion1.getFormatoCorto())
      console.log(direccion1.getFormatoExtendido())
    }
    probarCliente(){
      console.log(cliente1.getPerfil())
    }
    probarTiempo(){
      let hora1 = new Tiempo(8,12,"PM")
      console.log(hora1.getFormato24())
    }
    probarFecha(){
      let fecha1 = new Fecha(2001, 5, 5)
      console.log(fecha1.getFecha())
      console.log(fecha1.getAños())
      console.log(fecha1.getMeses())
      console.log(fecha1.getSemanas())
      console.log(fecha1.getDias())
      console.log(fecha1.getDiaFecha())
    }
    probarPedido(){
      this.pedido1.agregarElemento(this.elementoPedido1)
      this.pedido1.agregarElemento(this.elementoPedido2)
      this.pedido1.listarElementos()
      console.log(this.pedido1.getProductos())
      console.log(this.pedido1.getNumeroElementos())
      console.log(this.pedido1.getCostoTotal())
      console.log(this.pedido1.getResumen())

      this.pedido2.agregarElemento(this.elementoPedido1)
      this.pedido1.agregarElemento(this.elementoPedido2)
      console.log(this.pedido2.getResumen())
    }
    probarRestaurante(){
      console.log(this.restaurante._nombre)
      console.log(`${this.restaurante._telefono}`)
      console.log(this.restaurante._direccion.getFormatoCorto())
      this.restaurante.registrarProductos(this.producto1)
      this.restaurante.registrarProductos(this.producto2)
      this.restaurante.listarProductos(this.producto1)
      this.restaurante.registrarPedido(this.pedido1)
      this.restaurante.registrarPedido(this.pedido2)
      this.restaurante.listarPedidos()

      console.log(this.restaurante.encontrarPedido(this.pedido2))
      console.log(this.restaurante.registrarPedido(this.pedido1))
      console.log(this.restaurante.eliminarPedido(this.pedido2))
      this.restaurante.listarPedidos()

      console.log(this.restaurante.actualizarPedido(this.pedido2, this.pedido1))
      this.restaurante.listarPedidos()
    }
    probarClienteFrecuente(){
      console.log(this.clienteFrec1.getPerfil())
    }
}
let app = new Main
app.probarPrecio()
app.probarProducto()
app.probarElementoPedido()
app.probarDireccion()
app.probarCliente()
app.probarTiempo()
app.probarFecha()
app.probarPedido()
app.probarRestaurante()
app.probarClienteFrecuente()
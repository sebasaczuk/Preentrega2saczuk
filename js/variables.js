const IVA = 1.21 //Impuesto al valor agregado / TAX
const recuperarCarrito = ()=> {
       const carritoAlmacenado = JSON.parse(localStorage.getItem("carritoFrutas"))
       return carritoAlmacenado
}

const datosPropiedad = [{id: 1, tipo: 'Radiografias', factor: 100},
                        {id: 2, tipo: 'Tomografias', factor: 200},
                        {id: 3, tipo: 'Electrocardiogramas', factor: 300},
                        {id: 4, tipo: 'Resonancias', factor: 400}]

const guardarCarrito = ()=> {
  if (carrito.length > 0) {
     localStorage.setItem("carritoFrutas", JSON.stringify(carrito))
}}
const carrito = recuperarCarrito() || []
let categorias = parseInt (prompt ('Bienvenido a PROMOCIONES JUST. Elija la categoría: 1-Aceites Esenciales Puros- 2-Blends de Aceites Esenciales- 3-Aromablends'))
let pedido


if (categorias === 1){ pedido = 3000;}
else if (categorias === 2) { pedido = 4000;}
else if  (categorias === 3) { pedido = 5000;}
else { pedido = 0;}

let continuarPedido = true
let totalPedido = 0
let decision

alert (`Hasta aquí tu pedido es de ${pedido}`)

while (continuarPedido === true) {
    if (categorias === 1) { totalPedido = totalPedido + 3000; } 
    else if (categorias === 2) { totalPedido = totalPedido + 4000; } 
    else if (categorias === 3) { totalPedido = totalPedido + 5000; }
    else { totalPedido = totalPedido;}
    
decision = parseInt (prompt('Quieres seguir comprando? 1.Si / 2.No'))
    if (decision === 1) { categorias = parseInt( prompt( 'Elija la categoría: 1-Aceites Esenciales Puros- 2-Blends de Aceites Esenciales- 3-Aromablends')) } 
    else { continuarPedido = false; }
}  

function costoEnvio(costo) {
    let envio = 0;
    if (costo >0 && costo <= 7000) { envio = 800; }
    else { envio = 0; }

let costoEnvio = envio
let pedidoFinal = totalPedido + envio
return pedidoFinal    
}
 
const pedidoConEnvio = costoEnvio (totalPedido)
alert (`El TOTAL de tu pedido es de ${pedidoConEnvio} - MUCHAS GRACIAS POR TU COMPRA !!!`)
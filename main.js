let entrada = "";
let cantidad = 0;
let precio = 0;
let precioTotal = 0;
let cantidadTotal = 0;
let nombre = ""
let fin = "";

alert("Bienvenidos a nuestras plataforma de CineSpace");
 nombre = prompt( "Ingresa tu Nombre" );
if ( nombre == ""){
 alert("NO Ingresaste tu nombre ");
}
else{
    alert(" Excelente " + nombre);
}

alert(" Bienvenido A Nuestra plataforma ");
let pelicula = prompt( "Que pelicula deseas ver?");


do {
  entrada = prompt( "Que tamaño de pochoclos quieres? grandes, medianos o chicos").toLowerCase();
  cantidad = parseInt(prompt("Cuántos deseas comprar?"));

  while (isNaN(cantidad) || cantidad <= 0) {
    alert("Verifica la cantidad de entradas que deseas");
  }
  switch (entrada) {
    case "grandes":
      precio = 5000;
      break;
    case "medianos":
      precio = 3000;
      break;
    case "chicos":
      precio = 2000;
      break;
   
  }

  precioTotal += precio * cantidad;
  cantidadTotal += cantidad;

alert(" Has comprado " +cantidadTotal +" productos y el monto apagar es de $" +precioTotal);

} while (fin);


alert("Gracias por tu compra. Disfruta la funcion");


console.log(precioTotal);
console.log(cantidadTotal);
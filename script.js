// Función que calcula el promedio
// function calcularPromedio(nota1, nota2, nota3, nota4) {
//   return (nota1 + nota2 + nota3 + nota4) / 4;
// }

function calcularConPorcentaje(nota1, nota2, nota3, nota4, porcentaje1, porcentaje2, porcentaje3, porcentaje4){
  return (nota1 * (porcentaje1/100) + nota2 * (porcentaje2/100) + nota3 * (porcentaje3/100) + nota4 * (porcentaje4/100))/4;
}

// Capturamos los elementos del HTML
const btn = document.getElementById("btnCalcular");
const resultado = document.getElementById("resultado");

// Cuando el usuario hace click en el botón
btn.addEventListener("click", function() {
  // Leemos los valores y los convertimos a número
  const n1 = parseFloat(document.getElementById("nota1").value);
  const n2 = parseFloat(document.getElementById("nota2").value);
  const n3 = parseFloat(document.getElementById("nota3").value);
  const n4 = parseFloat(document.getElementById("nota4").value);

  const porc1 = parseFloat(document.getElementById("porcentaje1").value);
  const porc2 = parseFloat(document.getElementById("porcentaje2").value);
  const porc3 = parseFloat(document.getElementById("porcentaje3").value);
  const porc4 = parseFloat(document.getElementById("porcentaje4").value);
  // Validamos que se hayan ingresado
  if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4)) {
    resultado.textContent = "Debes ingresar las cuatro notas";
    return;
  } else if (n1 <= 0 || n2 <= 0 || n3 <= 0 || n1 > 7 || n2 > 7 || n3 > 7){
    resultado.textContent = "La nota debe estar entre 1 a 7";
    return;
  }else if (isNaN(porc1) || isNaN(porc2) || isNaN(porc3) || isNaN(porc4)){
    resultado.textContent = "Debes ingresar los cuatro porcentajes"
  }

  // Llamamos a la función
  //const promedio = calcularPromedio(n1, n2, n3, n4);
  const promedioConPorcentaje = calcularConPorcentaje(porc1, porc2, porc3, porc4);
  
  // Mostramos el resultado
  const estado = promedioConPorcentaje >= 4.0 ? "Aprobado" : "Reprobado";
  resultado.textContent = `Promedio: ${promedio.toFixed(1)} — ${estado}`;
});
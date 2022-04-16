// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "HelloWorld!!";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 20;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  return str;
  
}

devolverString("Hola");

function suma(x, y) {

var suma = x + y;
return suma;

  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  
}

suma( 8 , 7);

function resta(x, y) {

  var resta = x - y;
  return resta;
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  
}

resta(8 , 5);

function multiplica(x, y) {

  var multiplica = x * y;
  return multiplica;
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  
}

multiplica(5 , 8);

function divide(x, y) {

  var divide = x / y;
  return divide;
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  
}

divide(50 , 5);

function sonIguales(x, y) {

  if(x == y){
    return true;
  }

  return false;
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

sonIguales( 25 , 68);

function tienenMismaLongitud(str1, str2) {

  if(str1.length == str2.length){
    return true;
  }

  return false;
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

tienenMismaLongitud("Carlos" , "Martin");

function menosQueNoventa(num){

  if(num < 90){
    return true;
  }

  return false;
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

menosQueNoventa(85);

function mayorQueCincuenta(num) {

  if(num > 50){
    return true;
  }

  else return false;
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

mayorQueCincuenta(70);

function obtenerResto(x, y)
{

  var resto= x % y;
  return resto;
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  
}

obtenerResto(45 , 4);

function esPar(num) {

  if( (num%2) === 0){
    return true;
  }
  return false;
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

esPar(23);

function esImpar(num) {

  if( (num%2) > 0){
    return true;
  }

  return false;
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  
}

esImpar(85);

function elevarAlCuadrado(num) {

  var num = num * num;
  return num;
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  
}

elevarAlCuadrado(3);

function elevarAlCubo(num) {

  var num = num * num * num;
  return num;
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  
}

elevarAlCubo(2);

function elevar(num, exponent) {

  var num = Math.pow(num , exponent);
  return num;
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  
}

elevar(3 , 5);

function redondearNumero(num) {

  num = Math.round(num);
  return num;
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  
}

redondearNumero(7.6);

function redondearHaciaArriba(num) {

  num = Math.ceil(num);
  return num;
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  
}

redondearHaciaArriba(6.002);

function numeroRandom() {

  return Math.random()
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  
}

numeroRandom();

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false

  if (numero > 0 ){
    return "Es positivo";
  }else if (numero < 0){
    return "Es negativo";
  }else{
    return false;
  }
  
}



function agregarSimboloExclamacion(str) {

  var str = str + "!";
  return str;
}

agregarSimboloExclamacion("Hello World");

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var nombreApellido = nombre + ' ' + apellido;
  return nombreApellido;

  
}

combinarNombres("Eduardo" , "Leaño");

function obtenerSaludo(nombre) {

  var saludo = "Hola"+ " " + nombre + "!";
  return saludo;
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  
}

obtenerSaludo("Estefania");

function obtenerAreaRectangulo(alto, ancho) {

  area = alto * ancho;
  return area;
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  
}
obtenerAreaRectangulo(30 , 20);


function retornarPerimetro(lado){

  perimetro = lado * 4;
  return perimetro;
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  
}

retornarPerimetro(10);


function areaDelTriangulo(base, altura){

  area = (base * altura) / 2;
  return area;
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí

}

areaDelTriangulo(45 , 30);


function deEuroAdolar(euro){

  cambio = euro * 1.2;
  return cambio;
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  
}

deEuroAdolar(50);


function esVocal(letra){

  if (letra.length > 1){
  return "Dato incorrecto";
  }
  if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    return "Es vocal";
  }
  return "Dato incorrecto";
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};

function calcularSueldoLiquido(sueldoBruto) {
  const descuento = 0.8;
  return sueldoBruto * descuento;
}

function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

function sumar(num1, num2) {
  const resultado = num1 + num2;
  return resultado;
}

function contarVocales(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}

// Ejercicio 1

function esPar(num) {
  if (num % 2 === 0) {
    return "true";
  } else {
    return "false";
  }
}

// Ejercicio 2

function maximoDeDos(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Ejercicio 3

function maximoDeTres(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

// Ejercicio 4

function halfNumber(num) {
  if (num % 2 === 0) {
    return num / 2;
  } else {
    return Math.round(num / 2);
  }
}

// Ejercicio 5

function validarNombre(str) {
  if (str === null || str === undefined || str === "") {
    return false;
  } else if (typeof str === "string") {
    return true;
  } else {
    return false;
  }
}

// Ejercicio 6

function validarAnioNacimiento(anio) {
  if (typeof anio === "number" && anio >= 1920 && anio <= 2024) {
    return true;
  } else {
    return false;
  }
}

// Ejercicio 7

function mostrarArray(arr) {
  for (const obj of arr) {
    console.log(obj);
  }
}

// Ejercicio 8

function estaElElemento(arr, obj) {
  console.log(arr.includes(obj));
}

// Ejercicio 9

function maximo(arr) {
  let max = 0;
  for (const num of arr) {
    if (max < num) max = num;
  }
  console.log(max);
}

// Cantidad de letras

function cantidadDeLetras(str) {
  let contador = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      contador += 1;
    }
  }
  return contador;
}

// Cuenta regresiva

function cuentaRegresiva() {
  let count = 11;
  while (count > 0) {
    count--;
    console.log(count);
  }
}

// Ejercicio es par o impar

function esParOImpar(arr) {
  for (const obj of arr) {
    if (obj % 2 === 0) {
      console.log(obj + " es par");
    } else {
      console.log(obj + " es impar");
    }
  }
}

// Contar vocales

const vocales = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];

function cantidadDeVocales(str) {
  let contador = 0;
  for (const char of str) {
    if (vocales.includes(char)) {
      contador += 1;
    }
  }
  return contador;
}

// Listado de frutas

function listadoDeFrutas1(arr) {
  for (const fruta of arr) {
    console.log(fruta);
  }
}

function listadoDeFrutas2(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Multiplo de 7

function multiploDe7(num) {
  if (num % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

function esMultiploDe7(num) {
  num = Math.abs(num);
  if (num < 7) {
    return num === 0;
  }
  return esMultiploDe7(num - 7);
}

// Digitos

function digits() {
  let str = "";
  for (let i = 0; i <= 9; i++) {
    str += i;
  }
  return str;
}

// Borrar vocales

function removeVowels(str) {
  let resultado = "";
  for (const char of str) {
    if (!vocales.includes(char)) {
      resultado += char;
    }
  }
  return resultado;
}

// buzzfizz

function buzzfizz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("buzzfizz");
    } else if (i % 3 === 0) {
      console.log("buzz");
    } else if (i % 5 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}

// verificar edad

function verificarEdad(num) {
  if (num >= 18) {
    return "Es mayor";
  } else {
    return "Es menor";
  }
}

function verificacionEdad(num) {
  let esMayor = Number(num >= 18);
  let respuestas = [false, "Es mayor"];
  return respuestas[esMayor];
}

// Puntaje

function puntuacion(num) {
  if (num >= 90 && num <= 100) {
    console.log("A");
  } else if (num >= 80 && num <= 89) {
    console.log("B");
  } else if (num >= 70 && num <= 79) {
    console.log("C");
  } else if (num >= 60 && num <= 69) {
    console.log("D");
  } else if (num >= 0 && num <= 59) {
    console.log("F");
  } else {
    alert("Valor no permitido");
  }
}

// Suma de multiplos

function sumMultiplos(num) {
  let suma = 0;
  for (let i = 0; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      suma += i;
    }
  }
  return suma;
}

// convert

function convert(num, str) {
  let conversion = 1.60934;
  if (str === "km") {
    let millas = num / conversion;
    return millas;
  } else if (str === "mi") {
    let kilometros = num * conversion;
    return kilometros;
  } else {
    console.log("Unidad no valida. Debe ser km o mi");
  }
}

// passOrFail

function passOrFail(students) {
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    if (student.grade >= 5) {
      student.result = "pass";
    }
  }
  return students;
}

// delValue

function deleteValue(arr, num) {
  let nuevoArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== num) {
      nuevoArray.push(arr[i]);
    }
  }
  return nuevoArray;
}

// invertir

function invertirFrase(frase) {
  let separarFrase = frase.split("");
  let invertirFrase = separarFrase.reverse();
  let unirFrase = invertirFrase.join("");
  return unirFrase;
}

// Play

function play(opcion) {
  const opciones = ["Piedra", "Papel", "Tijeras"];
  const computadora = opciones[Math.floor(Math.random() * opciones.length)];
  if (opcion === computadora) {
    console.log("Empate");
  } else if (
    (opcion === "Piedra" && computadora === "Tijeras") ||
    (opcion === "Papel" && computadora === "Piedra") ||
    (opcion === "Tijeras" && computadora === "Papel")
  ) {
    console.log("Ganaste");
  } else {
    console.log("Perdiste");
  }
}

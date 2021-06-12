
//Problema numero 1
/* const nombre = prompt('Cual es su nombre:');
const ape = prompt('Cual es su apellido:');
const edad = Number(prompt('¿Qué edad tienes?'));
const infoPersonal = (nombre, ape, edad) => {
    return `Tu nombre es: ${nombre} ${ape} y tienes ${edad} años`;
}

alert(infoPersonal(nombre, ape, edad)); */

//Problema numero 2
/* const valorA = Number(prompt('Ingrese el primer numero'));
const valorB = Number(prompt('Ingrese el segundo numero'));
const valorC = Number(prompt('Ingrese el tercer numero'));
const sumaCubo = (valorA, valorB, valorC) => {
    resultado = Math.pow(valorA,3) + Math.pow(valorB,3) + Math.pow(valorC,3);
    return `La suma de cubos de ${valorA}, ${valorB}, ${valorC}: ${resultado}`;
}

alert(sumaCubo(valorA,valorB,valorC)) */

//Problema numero 3
/* const valor = prompt('Ingrese el dato:');

const queDato = (valor) => {
    if(valor >= 0 || valor <= 0 ){
        valor = typeof(Number(valor));
        tipoDato = valor;
        console.log(`El tipo de dato es ${tipoDato}`);
    }else if(valor === 'true' || valor === 'false'){
        valor = typeof(Boolean(valor));
        tipoDato = valor;
        console.log(`El tipo de dato es ${tipoDato}`);
    }else{
        valor = typeof(valor);
        tipoDato = valor;
        console.log(`El tipo de dato es ${tipoDato}`);
    };
}
queDato(valor); */

//Problema numero 4

/* function sum(...argumentos) {
    return argumentos.reduce(( init,argumento) => {
        return init + argumento;
    });
}

alert(sum(1, 3, 3)); */

//Problema numero 5 
/* 
const arrays = [12,'numero', 16,'echo' ];

const eliminarString = arrays.filter(array => typeof(array) !== 'string');

console.log(eliminarString); */

//Problema 6 
/* const newArrays = [12,5, 16,2 ];
let max = Math.max(...newArrays);
let min = Math.min(...newArrays);

const minMax = (max , min) => {
    resultado = [max, min];
    console.log(`los valores maximos son: ${resultado}`);
}
minMax(max, min); */


//PROBLEMA 7

const conteoNum = function(){
    let valores = new Array(10);
    let i = 0;
    let cadena = "";
    while(i<10){
        valores[i]  = Number(prompt('los numeros:'));
        i++;
    }
    valores.forEach(el => {
        console.log(el);
    });
    for (const valor in valores) {
        cadena = cadena.concat(valor);
    }
    console.log(`(${cadena.substring(0,3)}) ${cadena.substring(3,6)} - ${cadena.substring(6,10)}`);
    
}
conteoNum();













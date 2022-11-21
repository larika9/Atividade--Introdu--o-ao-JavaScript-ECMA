import {soma} from "./lib/soma.js"
import {calcular} from "./lib/calculadora.js"
console.log('soma')
console.log(soma(1, 2));

console.log(soma(3, 2));

console.log('calculadora')
console.log('soma')
console.log(calcular(1, 1, '+'))
console.log('subtrair')
console.log(calcular(1, 1, '-'))
console.log('multiplicar')
console.log(calcular(1, 1, '*'))
console.log('dividir')
console.log(calcular(1, 1, '/'))
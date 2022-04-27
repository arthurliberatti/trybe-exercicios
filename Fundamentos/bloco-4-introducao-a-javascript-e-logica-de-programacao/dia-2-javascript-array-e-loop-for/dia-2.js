// Exercicio 1 ao 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}
// 2-3
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let index = 0; index < numbers.length; index += 1) {
    resultado += numbers[index];
}
console.log(resultado/(numbers.length))
// 4
let mediaAritimetica = (resultado/(numbers.length))
if (mediaAritimetica > 20) {
    console.log("valor maior que 20");
}else {
    console.log("Valor menor ou igual a 20");
};
//5
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}

console.log(higherNumber);
//6
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaImpares = 0

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        somaImpares += 1;
    }
}
if (somaImpares === 0) {
    console.log("nenhum valor ímpar encontrado");

} else {
    console.log('Quantidade numeros impares: ' + somaImpares);
}

//7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0];

for (index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < menorValor) {
        menorValor = numbers[index];
    }
}

console.log(menorValor);

//8
// Exercicio 1

const a = 20
const b = 10

console.log('Soma:' + (a + b));
console.log('Subtração:' + (a - b));
console.log('Multiplicação:' + (a * b));
console.log('Divisão:' + (a / b));
console.log('Modulo:' + (a % b));

// Exercicio 2

const a = 20 
const b = 10

if (a > b) {
    console.log(" A é maior que B ");
}   else {
        console.log("B é maior que A");
    };

// Exercicio 3

const a = 6;
const b = 4;
const c = 2;

if (a > b && a > c) {
  console.log('O maior número é: ' + a + ' (a)');
} else if (b > a && b > c) {
  console.log('O maior número é: ' + b + ' (b)');
} else {
  console.log('O maior número é: ' + c + ' (c)');
};

// Exercicio 4

const number = 0

if (number > 0) {
    console.log('O numero é positivo');
} else if (number < 0) {
    console.log('O numero é negativo');
} else {
    console.log('Zero');
};  

// Exercicio 5

const a = 60
const b = -10
const c = 60
let somaAngulos = false

if (a + b + c === 180) {
    somaAngulos = true
    console.log('Verdadeiro');
} else if (a < 0 || b < 0 || c < 0) {
    console.log("Erro no sistema");
} else {
    console.log('Falso');
} ;
 // Exercicio 6

 const chessPiece = 'bispo';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
    break;
};

// Exercicio 7

const grade = 49;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
};

// Exercicio 8

const a = 5
const b = 7
const c = 9

let contemPar = false

if (a % 2 === 0 || c % 2 === 0 || b % 2 === 0 ) {
     contemPar = true;
}; 
console.log(contemPar)

// Exercicio 9 

const a = 3;
const b = 5;
const c = 10;

let contemImpar = false;

if ((a % 2 !== 0 || c % 2 !== 0 || b % 2 !== 0)) {
     contemImpar = true;
}; 
console.log(contemImpar);

// Exercicio 10

const custo = 300
const venda = -1

if (custo >=0 && venda >= 0) {
    const custoTotal = (custo * 1.2);
    const lucroTotal = ((venda - custoTotal) * 1000);
    console.log('Lucro total: ' + lucroTotal);
}else {
    console.log('Erro');
};

// Exercicio 11

let inss;
let ir;

let salarioBruto = 3000.00;




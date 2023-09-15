// 3 primeira parte

// let idade = 33;
// let peso = 60;
// console.log('idade = ', idade, ' peso = ', peso);

// let PI = 3.14;
// console.log('PI = ', PI, );

// const numeroMaximo = Number.MAX_VALUE;
// console.log('numeroMaximo = ', numeroMaximo);

// const numeroMinimo = Number.MIN_VALUE;
// console.log('numeroMinimo = ', numeroMinimo);

// const nome = 'robervan';
// const sobreNome= 'silva souza';
// const nomeCompleto = nome + ' ' + sobreNome;
// console.log('nomeCompleto = ', nomeCompleto);

// let numero1 = 10;
// let numero2 = 20;
// let soma = numero1 + numero2;
// console.log('soma = ', soma);

// let booleano = true;
// let booleano2 = false;
// console.log('And', booleano && booleano2);
// console.log('OR', booleano || booleano2);
// console.log('NOT', !booleano2);

// let num1 = 2;
// let num2 = 33;
// let num3 = 3;
// console.log('Number', num1 > num2 ? num2 : num1);
// console.log('Number', num1 < num2 );
// console.log('Number igual', num1 = num2 );
// console.log('Number maior ', num1 >= num2 );
// console.log('Number menor', num1 <= num2 );

// let num = 12;
// num++;
// console.log('Number', num);

// 3 segunda parte

function verificarnumero(num) {
    if (num > 0) {
        console.log('positivo')
    } else if (num < 0) {
        console.log('negativo')
    }
    else {
        console.log('igual a zero');
    }
}
verificarnumero(-0)

let num2 = 22;
const resultado = num2 > 0 ? 'positivo' : num2 < 0 ? 'negativo' : 'igual a zero';
console.log(resultado);

function notas(pri, seg) {
    let media = (pri + seg) / 2;
    if (media >= 7) {
        console.log('aprovado', media)
    } else {
        console.log('reprovado', media)
    }
}
notas(6, 8);


// function votar(idade) {
//     if ((idade >= 16 && idade < 18) || idade >= 70) {
//         console.log('voto facultativo', idade)
//     } else if (idade >= 18 && idade <= 70) {
//         console.log('voto obrigatorio', idade)
//     } else {
//         console.log('não pode votar', idade)
//     }
// }

function votar(idade) {
    const idadee = ((idade >= 16 && idade < 18) || idade >= 70) ? 'Voto facultativo' : (idade >= 18 && idade <= 70) ? 'voto obrigatorio' : 'não pode votar'
    console.log(idadee, idade);
}
votar(2)


function calculaIMC(altura, peso) {
    const media = peso / (altura * altura);
    if (media < 18.5) {
        console.log(media.toFixed(2), 'Abaixo do peso');
    } else
        if (media >= 18.5 && media < 25) {
            console.log(media.toFixed(2), 'Peso Normal');
        } else
            if (media >= 25 && media < 30) {
                console.log(media.toFixed(2), 'Sobre peso');
            } else {
                console.log(media.toFixed(2), 'Obesidade');
            }

}
calculaIMC(1.7, 98)

function anoBissexto(ano) {
    if (ano % 4 == 0 && ano % 100 != 0 || (ano % 400 == 0)) {
        console.log(anoBissexto, 'anoBissexto')
    } else {
        console.log(anoBissexto, 'não e bissexto')
    }
}
anoBissexto(2100)

function poligano(palavra) {
    const letras = palavra.split('').reverse().join('');
    if (palavra === letras) {
        console.log(letras, "e um poligano")
    } else {
        console.log(letras, "não poligano")

    }
}

poligano('ara');

function numero(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log(n1, "n1 e maior")
    }
    if (n2 > n1 && n2 > n3) {
        console.log(n2, "n2 e maior")
    } else if (n3 > n1 && n3 > n2) {
        console.log(n3, " n3")

    }
}
numero(2, 2, 5)

function numeroMaior(n1, n2, n3) {
    const numeros = [ n1, n2, n3 ];

    const maiorNumero = numeros.reduce((maior, numero) => {
        return numero > maior ? numero : maior;
    });

    console.log(maiorNumero, "é o maior número");
}

numeroMaior(22, 2, 5);

const array = [2, 3, 4, 5, 5,6,7, ]

const maiorNumero = array.reduce((anterior, atual) => {
    return atual > anterior ? atual : anterior
}, -Infinity)

console.log(maiorNumero)

function par(num) {
    if (num % 2 === 0) {
        console.log(num, 'par')
    } else{
        console.log(num, 'impar')
    }
}
par(2, 5)

function dirigir(num, halilitacao) {
    if(num < 18){
        console.log(num, 'não pode dirigir')
    } else if(num > 18 && halilitacao === 'sim'){
        console.log(num, 'pode dirigir')
    } else if (num > 18 && halilitacao === 'nao') {
        console.log(num, 'não tem habilitação, então não pode dirigir')
    }
}
dirigir( 44, 'nao')

// 
function intervalo(inferior, dentro, superior) {
    if( inferior >= dentro && inferior <= superior){
        console.log(inferior, 'numero dentro')

    } else{
        console.log(inferior, 'numero fora')

    }

}

intervalo(52, 54, 45)

function Nota(prova) {
    if(prova >= 90){
        console.log(prova, 'A')
    } else if (prova >= 80) {
        console.log(prova, 'B')
    }
     else if (prova >= 70) {
        console.log(prova, 'C')
    }else{
        console.log(prova, 'abaixo do esperado')
    }
}
Nota(96)
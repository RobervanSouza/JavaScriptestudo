let sum = 0; // Inicializa a variável sum com o valor zero, que será usado para armazenar a soma dos números primos.

for (let num = 2; num <= 1000; num++) { // Inicia um loop que itera de 2 até 1000 (inclusive).
    let primo = true; // Inicializa uma variável booleana primo como verdadeira, assumindo que num é primo até ser provado o contrário.

    for (let div = 2; div < num; div++) { // Inicia um loop interno que verifica divisibilidade de num por div, onde div varia de 2 até num - 1.
        if (num % div == 0) { // Verifica se num é divisível por div (ou seja, não é primo).
            primo = false; // Define primo como falso se num for divisível por div.
            break; // Sai do loop interno, pois já sabemos que num não é primo.
        }
    }

    if (primo) { // Verifica se num é primo com base no valor de primo.
        sum += num; // Se num é primo, adiciona num a sum.
    }
}

//console.log(sum); // Imprime a soma dos números primos no console.

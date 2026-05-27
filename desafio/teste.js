// Desafios:

// alert("Boas vindas ao nosso site!");
// let nome = "Lua";
// let idade = 25;
// let numeroDevendas = 50;
// let saldoDisponivel = 1000;
// alert("Erro! Preencha todos os campos");
// let mensagemDeErro = "Erro! Preencha todos os campos";
// alert (mensagemDeErro);

// let nomeUsuario = prompt ("Qual é o seu nome?");
// let idade = prompt ("digite a sua idade:");


// if(idade >= 18) {
//     console.log("Pode tirar a habilitação!");
// }
//-------------------------------------------------
// 1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

// diaDaSemana = prompt("Hoje é que dia da semana?")
// if (diaDaSemana == "sábado") {
//     alert("Bom fim de semana!");
//    }   else if (diaDaSemana == "domingo") {
//     alert("Bom fim de semana!");
//    } else {
//     alert("Ótima semana!");
//    }

// 2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

// numero = prompt('Digite uma número positivo ou negativo');
// if (numero > 0) {
//     alert('número positivo');
// } else {
//     alert('número negativo');
// }

// 3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

// pontuacao = prompt('Digite a pontuação do jogo:');
// if (pontuacao >= 100) {
//     alert('Parabéns, você venceu!');
// } else {
//     alert('Tente novamente para ganhar ;(');
// }

// 4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

// let saldoDaConta = 500;
// alert(`Você possui R$${saldoDaConta} em sua conta`);

// 5. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.

// nomeDoUsuario = prompt('insira o seu nome');
// alert(`Boas-Vindas ${nomeDoUsuario}`);
//------------------------------------------
// Desafio
// 1.Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

// let contador = 1;
// while (contador <= 10) {
//     console.log(contador);
//         contador++;
// }

// 2.Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

// let contador = 10;
// while (contador>= 0) {
//     console.log(contador);
//         contador--
// }

// 3.Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

// let nMax = prompt('Digite um número para a contagem regressiva:');

// while (nMax >= 0) {
//     console.log(nMax);
//     nMax--;
// }

// 4.Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

// let numeroMax = prompt('Digite um número para contar até o 0:');
// let contador = 0;

// while (contador <= numeroMax) {
//     console.log(contador);
//     contador++;
// }
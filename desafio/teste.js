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

// Desafios finais

//1. Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

// console.log ("Boas-Vindas!");

//2. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

// let nome = "Yasmim";
// console.log (`Olá, ${nome}!`);

//3. Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" 

// let nome = 'Yasmim';
//     alert (`Olá, ${nome}!`);

//4. Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

// let lingFav = prompt('Qual a linguagem de programação que você mais gosta?');
// console.log (lingFav);

//5. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

// let valor1 = 2;
// let valor2 = 3;
// let resultado = valor1 + valor2;
// console.log (`A soma de ${[valor1]} e ${[valor2]} é igual a ${[resultado]}.`);

//6. Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

// let valor1 = 90;
// let valor2 = 1;
// let resultado = valor1 - valor2;
// console.log (`A diferença entre ${[valor1]} e ${[valor2]} é igual a ${[resultado]}.`);

//7. Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

// let idade = prompt('Qual a sua idade?');
// if(idade >= 18) {
//     console.log('você é maior de idade');
// }else {
//         console.log('vocÊ é menor de idade');
//     }

//8. Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

// let numero = prompt('Escolha um valor');
// if (numero > 0) {
//     console.log('seu número é positivo');
// }else if(numero < 0) { 
//     console.log('seu número é negativo');
// }else {
//     console.log('seu número é zero');
// }

//9. Use um loop while para imprimir os números de 1 a 10 no console.

// let numero = 1;
// while (numero <= 10) {
// console.log (numero);
// numero++;
// }

//10. Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

// let nota = 3;
// if(nota >= 7) {
//     console.log('aprovado');
// }else{
//         console.log('reprovado');
//     }

//11. Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

// let numero = Math.random();
// console.log (numero);

//12. Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

// let numeroInteiro = parseInt(Math.random() * 10) + 1;
// console.log (numeroInteiro);

//13. Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

// let numero = parseInt(Math.random() * 1000) + 1;
// console.log (numero);
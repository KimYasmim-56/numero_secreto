alert("Boas vindas ao jogo do número secreto");

let chute = prompt('Escolha um número entre 1 e 10');
// um console.log para verificar o valor de "chute" após a entrada do usuário
console.log('Valor do chute:', chute);

let numeroSecreto = 4;
console.log(numeroSecreto);

// um console.log para verificar a comparação entre "chute" e "numeroSecreto"
console.log('Resultado da comparação:', chute == numeroSecreto);

//se chute for igual ao numero secreto
if(chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o nùmero secreto ${numeroSecreto}`);
} else {
    // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
    console.log('Valor do número secreto:', numeroSecreto);
    alert('O número secreto era ' + numeroSecreto);
}
 
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
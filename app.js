alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 5;

// um console.log para verificar o valor de "chute" após a entrada do usuário
// console.log('Valor do chute:', chute);

console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');
// um console.log para verificar a comparação entre "chute" e "numeroSecreto"
// console.log('Resultado da comparação:', chute == numeroSecreto);

//se chute for igual ao numero secreto
if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o nùmero secreto ${numeroSecreto}`);
} else {
    // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
    // console.log('Valor do número secreto:', numeroSecreto);
    // alert('O número secreto era ' + numeroSecreto);
    if (chute > numeroSecreto) {
        alert (`O número secreto é menor que ${chute}`);
    } else {
        alert (`O número secreto é maior que ${chute}`);
    }
}
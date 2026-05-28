alert("Boas vindas ao jogo do número secreto");
let numeroSecreto = 5;

// um console.log para verificar o valor de "chute" após a entrada do usuário
// console.log('Valor do chute:', chute);

console.log(numeroSecreto);
let chute;
let tentativas = 1;
// um console.log para verificar a comparação entre "chute" e "numeroSecreto"
// console.log('Resultado da comparação:', chute == numeroSecreto);

// enquanto o chute não for igual ao numero secreto 
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');
    //se chute for igual ao numero secreto
    if (chute == numeroSecreto) {

        //pq colocar "com ${tentativas} tentativas`);" na linha 18?
        //Os valores das variáveis substituem aquele ${} automaticamente. É uma forma bem prática de misturar texto com valores de variáveis.

        // para que o while pare, não continue, há uma solução
        break;
    } else {
    // Adicione um console.log para verificar o valor de "numeroSecreto" quando o jogador erra
    // console.log('Valor do número secreto:', numeroSecreto);
    // alert('O número secreto era ' + numeroSecreto);
        if (chute > numeroSecreto) {
            alert (`O número secreto é menor que ${chute}`);
        } else {
            alert (`O número secreto é maior que ${chute}`);
        }
        //aqui seria, quando a gente sabe q a pessoa errou
        //tentativas = tentativas + 1;
        tentativas++
    }
}

if(tentativas > 1) {
    alert(`Isso aí! Você descobriu o nùmero secreto ${numeroSecreto} com ${tentativas} tentativas`);
}else {
    alert(`Isso aí! Você descobriu o nùmero secreto ${numeroSecreto} com ${tentativas} tentativa`);
}
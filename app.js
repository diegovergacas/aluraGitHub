/**
 * fgfdhh
 * ghgfjghjhg
 * gjhgjhjhg
 * hjhgj
 * hjhgjkhg
 */



alert("Boas vindas ao jogo do número secreto");
let numeroMax = 1000;

let numeroSecreto = parseInt(Math.random() * numeroMax + 1);
console.log (numeroSecreto);
let chute;
let tentativas = 1;

while  (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMax}`);
    if (numeroSecreto == chute) {
        break;               
    } else {
        if ( chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`); 
        }    
        tentativas ++;
    }
}

let palavraTentativas  = tentativas > 1 ? `tentativas` : `tentativa`
alert(`Isso ai! Você descobriu o número ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);

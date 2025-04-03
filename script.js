function jogar() {
  let idade = prompt("Quantos anos você tem?");

  if (idade < 18) {
    alert("você NÄO pode jogar jokenpo");
    return;
  }

  alert("Vamos começar a jogar!");

  let escolhajogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura?");
  let escolhaComputador = Math.floor(Math.random() * 3) + 1;

  if (escolhajogador == escolhaComputador) {
    alert("Empate!! EscolhaComputador: " + escolhaComputador);
    return;
  }

  if (escolhajogador == 1) {
    if (escolhaComputador == 2) {
      alert("Computador venceu, escolheu papel");
    }
    if (escolhaComputador == 3) {
      alert("Jogador vence!, Computador tesoura");
    }
  }

  if (escolhajogador == 2) {
    if (escolhaComputador == 1) {
      alert("Jogador vence!, computador Pedra");
    }
    if (escolhaComputador == 3) {
      alert("Computador venceu!, escolheu Tesoura");
    }
  }

  if (escolhajogador == 3) {
    if (escolhaComputador == 2) {
      alert("Jogador vence!, escolheu Papel");
    }
    if (escolhaComputador == 1) {
      alert("Computador venceu!, escolheu Pedra");
    }
  }
}

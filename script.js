//             jogador=argumento/parâmetro
function calculaPontos(jogador) {
  var pontos = (jogador.vitorias * 3) + jogador.empates
  return pontos;
}


function criarJogadores (nome) {
  return (jogador = {
    nome: nome,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  });
}

var jogadores = [];

function exibeJogadoresNaTela(jogadores) {
  var elemento = ""
    
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td>" + `<img src="${jogadores[i].emoji}">` + "</td>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
  
var elemento = document.getElementById("nomeJogador").value = ""
var elemento = document.getElementById("emojiJogador").value = "" 
}


exibeJogadoresNaTela(jogadores)

function adicionarVitoria(i) {
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
  var jogador = jogadores[i]
  jogador.derrotas++
  exibeJogadoresNaTela(jogadores)
}
  
function addJogador() {
  var nome = document.getElementById("nomeJogador");
  var emoji = document.getElementById("emojiJogador");
  jogadores.push({
    emoji: emoji.value,
    nome: nome.value,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0 
  });
  
exibeJogadoresNaTela(jogadores);
}

function removerJogador() {
    jogadores = [];
    exibeJogadoresNaTela(jogadores);
  }

function zerarPontos() {
    for (var i = 0; i < jogadores.length; i++) {
      jogadores[i].vitorias = 0;
      jogadores[i].empates = 0;
      jogadores[i].derrotas = 0;
      jogadores[i].pontos = 0;
    }
    exibeJogadoresNaTela(jogadores);
  }

// jogador.pontos = calculaPontos(jogador) não precisa porque não vai somar nem subtrair nenhum ponto.
// sergio.pontos = calculaPontos(sergio);
// aisa.pontos = calculaPontos(aisa);
// pandora.pontos = calculaPontos(pandora);

// var jogadores = [sergio, aisa, pandora]



//           .chave  .valor
// var sergio = { nome: "Sergio", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
// var aisa = { nome: "Aisa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };
// var pandora = { nome: "Pandora", vitorias: 0, empates: 0, derrotas: 0, pontos: 0 };

// function = bloco de código que pode vir a ser chamado/envocado mais ainda não executa o calculo dos pontos nesse caso, ou seja, esta criando a função.
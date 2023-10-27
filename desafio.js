function calcularVitorias(vitorias, derrotas) {
  return vitorias - derrotas;
}

function verificarRanking(ranking) {
    if(saldoVitorias <= 10) {
        ranking = "Ferro"
    } else if (saldoVitorias <= 20) {
        ranking = "Bronze"
    } else if (saldoVitorias <= 50) {
        ranking = "Prata"
    } else if (saldoVitorias <= 80) {
        ranking = "Ouro"
    } else if (saldoVitorias <= 90) {
        ranking = "Diamante"
    } else if (saldoVitorias <= 100) {
        ranking = "Lendário"
    } else {
        ranking = "Imortal"
    }

    return ranking
}
let saldoVitorias = calcularVitorias(191, 100)
let ranking = verificarRanking(saldoVitorias)

console.log(`O Herói tem de saldo ${saldoVitorias} está no nível de ${ranking}`);



function calculadoPontos(vitoria, derrotas) {
    return (vitoria - derrotas)
}

function determinarStatus(pontuacao) {
    if (pontuacao >= 101) {
        return "Imortal"
    } else if (pontuacao >= 91 && pontuacao <= 100) {
        return "Lendário"
    } else if (pontuacao >= 81 && pontuacao <= 90) {
        return "Diamante"
    } else if (pontuacao >= 51 && pontuacao <= 80) {
        return "Ouro"
    } else if (pontuacao >= 21 && pontuacao <= 50) {
        return "Prata"
    } else if (pontuacao >= 11 && pontuacao <= 20) {
        return "Bronze"
    } else {
        return "Ferro"
    }
}

let numeroVitoria = 101;
let numeroDerrotas = 27;

let pontuação = calculadoPontos(numeroVitoria, numeroDerrotas);

let status = determinarStatus(pontuação);

console.log(`"O Herói tem de saldo de vitorias ${pontuação}  está no nível de ${status}"`)


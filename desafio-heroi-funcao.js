
function CalculadoraRankeada(qtdVitorias, qtdDerrotas){
    let saldoRankeada = qtdVitorias - qtdDerrotas
    return saldoRankeada;
 }
 let nivel = "";
 let saldoVitorias = CalculadoraRankeada(120, 5);

 if(saldoVitorias < 10){
    nivel = "Ferro"
 }else if(saldoVitorias > 11 && saldoVitorias <= 20){
    nivel = "Bronze"
 }else if(saldoVitorias > 21 && saldoVitorias <= 50){
    nivel = "Prata"
 }else if(saldoVitorias > 51 && saldoVitorias <= 80){
    nivel = "Ouro"
 }else if(saldoVitorias > 81 && saldoVitorias <= 90){
    nivel = "Diamante"
 }else if(saldoVitorias > 91 && saldoVitorias <= 100){
    nivel = "Lendário"
 }else  {
    nivel = "Imortal"
 }

 console.log(`O Herói tem saldo de ${saldoVitorias} está no nivel de ${nivel}`);
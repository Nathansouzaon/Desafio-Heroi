let nomeHeroi = "nathan";
let quantidadeXP = 12000;
let nivelHeroi = "";

if(quantidadeXP < 1000){
    nivelHeroi = "Ferro";
}else if(quantidadeXP > 1001 && quantidadeXP < 2000){
    nivelHeroi = "Bronze";
}else if(quantidadeXP > 2001 && quantidadeXP < 5000){
    nivelHeroi = "Prata";
} else if(quantidadeXP > 6001 && quantidadeXP < 7000){
    nivelHeroi = "Ouro";
} else if(quantidadeXP > 7001 && quantidadeXP < 8000){
    nivelHeroi = "Platina";
} else if(quantidadeXP > 8001 && quantidadeXP < 9000){
    nivelHeroi = "Ascendente";
} else if(quantidadeXP > 9001 && quantidadeXP < 10000){
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}

console.log(`O Herói de Nome ${nomeHeroi} Está no Nivel de ${nivelHeroi}`);
//forma
class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`);
    }

    assar(){
        console.log(`Bolo assando de ${this.saborDaMassa}`);
    }
}
//quando eu instancio minha classe quando eu uso minha classe se torna um objeto
//o metodo construtor vai guardar isso em variaveis
let boloFesta = new formaDeBolo("chocolate", "nutela");
let boloPremium = new formaDeBolo("baunilha", "leite ninho");

boloPremium.escrever();
boloPremium.assar();
console.log(boloPremium);

class Heroi{
    constructor(nome, idade, tipo){
        this.nome=nome
        this.idade=idade
        this.tipo=tipo
    }
    
    atacar(){
        let ataque = "";
        if(this.tipo === "mago"){   
            ataque = "magia"
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
        }else if(this.tipo === "guerreiro"){
            ataque = "espada"
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
        } else if(this.tipo === "monge"){
            ataque = "artes marciais"
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
        } else if(this.tipo === "ninja"){
            ataque = "artes marciais"
            console.log(`O ${this.tipo} atacou usando ${ataque}`)
        }
    }
}

    let heroiNinja = new Heroi("nathan", 45, "ninja");
    let heroiMago = new Heroi("Trevas", 50, "mago");
    let heroiGuerreiro = new Heroi("LordGuerreiro", 25, "guerreiro");
    let heroiMonge = new Heroi("LordMonge", 35, "monge");

    // heroiNinja.atacar()
    // heroiMago.atacar()
    // heroiGuerreiro.atacar()
    heroiNinja.atacar()
    
  console.log(heroiNinja);
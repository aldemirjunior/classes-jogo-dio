class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;
    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
    }
    console.log(`Ataque do ${this.tipo} atacou usando ${ataque}`);
  }
}

let heroi1 = new Heroi("Gandalf", 153, "mago");
heroi1.atacar();
let heroi2 = new Heroi("Aragorn", 87, "guerreiro");
heroi2.atacar();
let heroi3 = new Heroi("Ipman", 32, "monge");
heroi3.atacar();
let heroi4 = new Heroi("Naruto", 25, "ninja");
heroi4.atacar();

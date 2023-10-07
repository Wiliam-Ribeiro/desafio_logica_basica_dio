class Hero{
    constructor(nome, idade, tipo){
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
    ataque(){
      if(this.tipo === "guerreiro")
         console.log(this.tipo+' atacou usando espada');
      else if(this.tipo === "mago")
         console.log(this.tipo+' atacou usando magia');
      else if(this.tipo === "monge")
         console.log(this.tipo+' atacou usando artes maciais');
       else if(this.tipo === "ninja")
         console.log(this.tipo+' atacou usando shuriken');
    }
}
  // instancia
  const mago = new Hero('Milady', 25, 'mago');
  const guerreiro = new Hero('Arthur', 30, 'guerreiro');
  // usando metodo
  mago.ataque();
  guerreiro.ataque();
  

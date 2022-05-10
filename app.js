class PokemonDresse {
    constructor(name, hp, atk, def, spd, head, face, back) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spd = spd;
        this.head = head;
        this.face = face;
        this.back = back;
    }
}
class PokemonSauvage {
    constructor(name, hp, atk, def, spd, face) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spd = spd;
        this.face = face;
    }
}


let pokemonDresses = [
    new PokemonDresse('Pikachu', 100, 100, 100, 100, 'img/pika.png', 'img/pika.gif', 'img/pikab.gif'),
    new PokemonDresse('Tortank', 100, 100, 100, 100, 'img/tortank.png', 'img/tortank.gif', 'img/tortankb.gif'),
    new PokemonDresse('Dracaufeu', 100, 100, 100, 100, 'img/dracau.png', 'img/dracau.gif', 'img/dracaub.gif'),
    new PokemonDresse('Florizarre', 100, 100, 100, 100, 'img/flo.png', 'img/flo.gif', 'img/flob.gif')
]

let pokemonSauvage = [
    new pokemonSauvage('Becaglacon', 100, 100, 100, 100, 'img/eiscue.gif')
]
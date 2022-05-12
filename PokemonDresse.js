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

};
class PokemonSauvage {
    constructor(name, hp, atk, def, spd, face) {
        this.name = name;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spd = spd;
        this.face = face;
    }
};



let pokemonDresses = [
    new PokemonDresse('Pikachu', 100, 100, 100, 100, 'img/pika.png', 'img/pika.gif', 'img/pikab.gif'),
    new PokemonDresse('Tortank', 100, 100, 100, 100, 'img/tortank.png', 'img/tortank.gif', 'img/tortankb.gif'),
    new PokemonDresse('Dracaufeu', 100, 100, 100, 100, 'img/dracau.png', 'img/dracau.gif', 'img/dracaub.gif'),
    new PokemonDresse('Florizarre', 100, 100, 100, 100, 'img/flo.png', 'img/flo.gif', 'img/flob.gif')
];

let pokemonSauvage = [
    new PokemonSauvage('Becaglacon', 100, 100, 100, 100, 'img/eiscue.gif'),
];

let field = [];

function selectPokemon(n) {
    document.getElementById("nomPokémon").innerHTML = pokemonDresses[n].name;
    document.getElementById("imagePokémon").src = pokemonDresses[n].face;
    document.getElementById("pokémonSelectionner").src = pokemonDresses[n].back;
    document.getElementById("hp").innerHTML = `HP : ${pokemonDresses[n].hp}`;
    document.getElementById("attack").innerHTML = `Attaque : ${pokemonDresses[n].atk}`;
    document.getElementById("defense").innerHTML = `Defense : ${pokemonDresses[n].def}`;
    document.getElementById("speed").innerHTML = `Vitesse : ${pokemonDresses[n].spd}`;
    document.getElementById("hero").innerHTML = pokemonDresses[n].name;
    document.getElementById("heroHp").max = pokemonDresses[n].hp;
    document.getElementById("heroHp").value = pokemonDresses[n].hp;
    field.push(pokemonDresses[n]);

};

function setFight() {
    document.getElementById("vilain").innerHTML = pokemonSauvage[0].name;
    document.getElementById("vilainHp").max = pokemonSauvage[0].hp;
    document.getElementById("vilainHp").value = pokemonSauvage[0].hp;
    document.getElementById("vilainImg").src = pokemonSauvage[0].face;
    field.push(pokemonSauvage[0]);

}

let vilainHp = parseInt(pokemonSauvage[0].hp);
let heroHp = parseInt(pokemonDresses[0].hp);

function second() {
    document.getElementById("heroHp").value = heroHp;
    document.getElementById("vilainImg").className = "pl-2";
}

function fight() {
    vilainHp -= 10;
    heroHp -= 10;
    document.getElementById("vilainHp").value = vilainHp;
    setTimeout(second, 500);

}
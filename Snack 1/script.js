const bici = [
    {
        nome: "specialized",
        peso: 15
    },
    {
        nome: "norco",
        peso: 12
    },
    {
        nome: "cannondale",
        peso: 18
    },
    {
        nome: "trek",
        peso: 7
    },
    {
        nome: "yeti",
        peso: 13
    },
    {
        nome: "santa cruz",
        peso: 9
    },
]

console.log(bici);

let pesoMinore = bici[0].peso;
let indexPesoMinore = 0;

bici.forEach((item, index) => {
    const {nome, peso} = item;

    if (peso < pesoMinore) {
        pesoMinore = peso;
        indexPesoMinore = index;
    }

    console.log(nome, peso);
});

const container = document.querySelector(".container");

const winner = document.createElement("div");
winner.innerHTML = `<h2>${bici[indexPesoMinore].nome}</h2>`;

container.append(winner);
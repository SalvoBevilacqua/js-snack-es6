const squadre = [
    {
        nome: "fiorentina",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "juventus",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "inter",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "palermo",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "cagliari",
        punti_fatti: 0,
        falli_subiti: 0
    },
    {
        nome: "roma",
        punti_fatti: 0,
        falli_subiti: 0
    },
]

console.log(squadre);

squadre.forEach((item) => {
    // const {punti_fatti, falli_subiti} = item; perchè non funge???
    item.punti_fatti = randomize();
    item.falli_subiti = randomize();
});

console.log(squadre);

const array = [];

squadre.forEach((item) => {
    const {nome, falli_subiti} = item;
    array.push(nome);
    array.push(falli_subiti);
});

console.log(array);

// FUNCTION

function randomize() {
    const pcNumber = Math.floor(Math.random() * 101);
    return pcNumber;
}
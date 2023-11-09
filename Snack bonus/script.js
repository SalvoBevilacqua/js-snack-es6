const myArray = ["gigi", "carlo", "marcolino", "gabriello", "giulianona", "pietrino"]

console.log(myArray);

const min = 1;
const max = 3;

const newArray= subArray(myArray, min, max);

console.log(newArray);

function subArray (array, start, end) {
    const result = [];
    array.forEach((elem, index) => {
        if(index >= start && index <= end) {
            result.push(elem);
        }
                
    });
    return result;
}

// UTILIZZANDO IL FILTER:
// function subArray (array, start, end) {
//     return array.filter((elem, index) => index >= start && index <= end);
// }
function toUpper(string){
    return string.toUpperCase();
}

const cats = ["Lion","Zebra","Tiger","Bufallo"];

const  newCats = cats.map(toUpper);

console.log(newCats);


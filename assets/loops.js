

function lCat(cats){
    return  cats.startsWith("L");
}
const cats = ["Lion","Elephant","Lizard","Bufallo"];

const filtered = cats.filter(lCat);

console.log(filtered);

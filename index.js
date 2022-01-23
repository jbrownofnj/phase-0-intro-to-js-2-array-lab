// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const newAppendedCats = [...cats.slice(),name];
    return newAppendedCats;
}

function prependCat(name){
    const newPrependedCats = [name, ...cats.slice()];
    return newPrependedCats;
}

function removeLastCat(){
    const newRemovedLastCat = [...cats.slice(0,cats.length-1)];
    return newRemovedLastCat;
}

function removeFirstCat(){
    const newRemovedFirstCat = [...cats.slice(1,cats.length)];
    return newRemovedFirstCat;
}
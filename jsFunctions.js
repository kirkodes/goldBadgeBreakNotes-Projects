// function declaration
function findArea(radius) {
    return 3.14 * radius**2;
}
findArea(5)
console.log(findArea(5))

//function expression
const areaOfCircle = function(radius){
    return 3.14 * radius**2
}; //fxn expressions put ; after curly brace
areaOfCircle(6)
console.log(areaOfCircle(6))

//arrow function
//1
const findCircleArea = (radius) => {
    return 3.14 * radius**2
}
//2 same thing ^^ if you only have one parameter, you dont need ()
const findCircleArea = radius => {
    return 3.14 * radius**2
}
//3 block body arrow function, one line, require return keyword
const findCircleArea = radius => {return 3.14 * radius**2}
//4 same function as above, but written on one line // concise body... does not require return keyword, it still returns and is implied
const findCircleArea = radius => 3.14 * radius**2;

//ARROW FUNCTIONS can't utilize the this keyword


// Practice turning regular functions into arrow functions

const greet = function(){
    return 'hello, world';
}
const greet = () => 'hello world';


const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};
const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
};



const name = 'kir';

// functions
const greet = () => 'hello';

let resultOne = greet();
console.log(resultOne)

// methods (basically functions but diff on how we call and use them)
//invoked using dot notation; called on the back of something
name.toUpperCase();
let resultTwo = name[0].toUpperCase() + name.slice(1);
console.log(resultTwo);



// callbacks

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value){
    console.log(value);
});

myFunc(value => {
    console.log(value)
}); // same thing just rewritten


// forEach
let people = ['kir', 'stephen', 'zion', 'taylor', 'kaiden'];
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`)
};
people.forEach(logPerson);

people.forEach(function(person){
    console.log(person);
})
//as an arrow fxn
people.forEach((person, index) => {
    console.log(person, index);
});

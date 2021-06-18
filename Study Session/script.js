// 1) 
//Class

//Create a class called Animal, incorporate a constructor function, and give the class three properties.
    //Add a method to the class that console logs a string that uses interpolation with two or all three of the properties.
    //Finally, create a variable that is a new instance of the class object and call the method.


class Animal {
    constructor(snuggliness, color, name) {
        this.snuggliness = snuggliness;
        this.color = color;
        this.name = name;
    }

    logIt() {
        console.log(`This animal is a ${this.name}, who's got ${this.color} hair. Expert's rank this bud a solid ${this.snuggliness} out of 10 for snuggliness!`)
    }
}

let meow = new Animal(9, 'tabby', 'cat');
console.log(meow);
console.log(meow.canCuddle);
console.log(meow.breedName);
meow.logIt();
console.log(meow.logIt());

// 1B) Additional Challenge for Class 
// Create a subclass that extends Animal. 
//Create one additional property and one method.  
//Finally, create a variable that is a new instance of the class and call the method.

class Dog extends Animal {
    constructor(snuggliness, color, name, speed) {
        super(snuggliness, color, name)
        this.speed = speed;
    }

    zoomies() {
        console.log(`This bud's speed is ${this.speed}`)
    }
}

let Ixtoco = new Dog(8, 'tan', 'dog', 'super fast');
Ixtoco.zoomies()
Ixtoco.logIt()
// methods rely on an object in order to run
// children can access parents but parents cant access children


// 2)
// OBJECTS
//Take object of Princess Bride cast and do the following:
    //- add the character Fezzik (played by Andre the Giant) to the cast list
    //- correct spelling of Robin Wright
    //- console log a list of only the characters names
    //- console log list of only actors names
    //** Challenge - capitalize the first letter in the list of character names */

let princessBride = {
    cast: {
        westley: 'Cary Elwes',
        buttercup: 'Robin Right',
        inigo_Montoya: 'Mandy Patinkin',
        vizzini: 'Wallace Shaw',
        miracle_Max: 'Billy Crystal',
        count_Rugen: 'Christopher Guest',
        }
    }

princessBride.cast.Fezzick = 'Andre the Giant';
// princessBride.cast['Fezzik'] = 'Andre the Giant';
princessBride.cast.buttercup = 'Robin Wright';
console.log(Object.keys(princessBride.cast));
console.log(Object.values(princessBride.cast));

let characters = Object.keys(princessBride.cast);
console.log(characters)
characters.forEach(character => console.log(character[0].toUpperCase()+ character.substring(1)))
// targeted the keys and saved them into variable; an array of strings; can iterate through it; substring


// 3)
// DOM Manipulation
// utilize the index.html file, but code in JS
// Create a variable that holds the button element
    // Using that variable, make the button toggle between red and blue when clicked.

const button = document.querySelector('button');

let red = true;
button.addEventListener('click', event => {
    event.target.style.backgroundColor = red ? 'blue' : 'red';
    red = !red;
});


// 4)
// Array + DOM Manipulation
//Create an array of food items.
    // Create a button in HTML labeled 'Get First'. Then add the following JS functionality: gets the first item in the food array and adds it to the end of the array. Then console log the array;
    // Create a button in HTML labeled 'Get Last'. Then add the following JS functionality: gets the last item in the food array and adds it to the beginning of the array. Then console log the array;

let food = ['spaghetti', 'cannoli', 'ravioli', 'calzone'];
let getFirstBtn = document.querySelector('.getFirstBtn');
let getLastBtn = document.querySelector('.getLastBtn');

getFirstBtn.addEventListener('click', getFirst) // you don't add the () on event listeners, because it invokes the function before

function getFirst(){
    let firstItem = food.shift();
    food.push(firstItem);
    console.log(food);
}

function getLast(){
    let lastItem = food.pop();
    food.unshift(lastItem);
    console.log(food);
}


// 5)
// Array
//Create a function called 'pres'. Inside the function, do the following:
    //Using the .forEach method, loop over all of the presidents. Then, add the president's name and year they were born to a new array as individual objects containing key/value pairs of each president's last name and date of birth.
    //Finally, return the new array from the function.
    //*Challenge - Create a new variable whos value is an array of only the presidents born after 1900. Console log the new variable. Hint: Use .filter()

const presidents = [
    { first: 'George', last: 'Washington', year: 1732 },
    { first: 'John', last: 'Adams', year: 1735 },
    { first: 'Thomas', last: 'Jefferson', year: 1743 },
    { first: 'James', last: 'Madison', year: 1751 },
    { first: 'James', last: 'Monroe', year: 1758 },
    { first: 'Franklin', last: 'Pierce', year: 1804 },
    { first: 'James', last: 'Buchanan', year: 1791 },
    { first: 'Abraham', last: 'Lincoln', year: 1809 },
    { first: 'William', last: 'McKinley', year: 1843 },
    { first: 'Theodore', last: 'Roosevelt', year: 1858 },
    { first: 'William', last: 'Taft', year: 1857 },
    { first: 'Herbert', last: 'Hoover', year: 1874 },
    { first: 'Franklin', last: 'Roosevelt', year: 1882 },
    { first: 'Harry', last: 'Truman', year: 1884 },
    { first: 'Dwight', last: 'Eisenhower', year: 1890 },
    { first: 'John', last: 'Kennedy', year: 1917 },
    { first: 'Lyndon', last: 'Johnson', year: 1908 },
    { first: 'Richard', last: 'Nixon', year: 1913 },
    { first: 'Ronald', last: 'Reagan', year: 1911 },
    { first: 'George', last: 'Bush', year: 1924 },
    { first: 'Bill', last: 'Clinton', year: 1946 },
    { first: 'George', last: 'Bush', year: 1946 },
    { first: 'Barack', last: 'Obama', year: 1961 }
];

function pres(){
    let newArray = [];
    presidents.forEach(prez => {
        newArray.push({
            lastName: prez.last,
            yearBorn: prez.year
        });
    })
    return newArray;
}

// let copyArray = pres();
// console.log(copyArray);

let filterPrez = presidents.filter(person => person.year > 1900);
console.log(filterPrez)
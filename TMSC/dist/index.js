"use strict";
// Type Basics
let age = 30;
let firstName = 'Mario';
let isFictional;
age = 31;
firstName = 'Luigi';
isFictional = true;
let planet = 'Earth';
let moons = 1;
let isLarge = false;
planet = 'Saturn';
moons = 145;
isLarge = true;
// null & undefined
let something;
let anotherThing;
something = null;
anotherThing = undefined;
console.log('Hello');
// -------------------------------------------------------------
// Arrays
let names = ['Mario', 'Luigi', 'Peach'];
let ages = [25, 28, 24];
names.push('Bowser');
ages.push(35);
// Type inference with arrays
let fruits = ['apples', 'pears', 'bananas', 'mangoes'];
fruits.push('Peaches');
const f = fruits[3];
let things = [1, true, 'Hello'];
const t = things[0]; // t can be any of the 3 data types
// Object litreals
let user = {
    firstName: 'Mario',
    age: 25,
    id: 1
};
user.firstName = 'Paach';
user.id = 2;
// Type inference with object literals
let person = {
    name: 'Luigi',
    score: 35
};
person.name = 'Bowser';
person.score = 40;
const score = person.score;
// -----------------------------------------------------------------
// Functions
function addTwoNumbers(a, b) {
    return a + b;
}
const subtractTwoNumbers = (a, b) => {
    return a - b;
};
addTwoNumbers(3, 9);
subtractTwoNumbers(10, 7);
function addAllNumbers(items) {
    const total = items.reduce((a, c) => a + c, 0);
    console.log(total);
}
addAllNumbers([5, 7, 9, 11, 3, 2, 1]);
// return type inference
function formatGreeting(name, greeting) {
    return `${greeting}, ${name}`;
}
const result = formatGreeting('Mario', 'Hello');
console.log(result);
// -------------------------------------------------------------------
// Any Type
let myAge;
let title;
myAge = 19;
myAge = false;
title = 25;
title = {
    hello: 'World'
};
// Any Type in arrays
let stuff = ['hello', true, 30, null];
stuff.push({ id: 123 });
// Functions with Any Type
function addTogether(value) {
    return value + value;
}
const results1 = addTogether('hello');
const results2 = addTogether(3);
// useful when migrating from js to ts
// because using any won't cause errors initially
// -------------------------------------------------------------
// Tuples
let person1 = ['mario', 30, true];
// Tuple examples
let hsla;
hsla = [200, '100%', '50%', 1];
let xy;
xy = [94.7, 20.1];
function useCoords() {
    //get coords
    const lat = 100;
    const long = 50;
    return [lat, long];
}
const [lat, long] = useCoords();
// Named Tuples
let user1;
user1 = ['peach', 25];
console.log(user1[0]);
const authorOne = { name: 'mario', avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-hjsjt&psig=AOvVaw3G9sR2PlX2zjSqteYlzyLM&ust=1737008808224000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIj-j6CM94oDFQAAAAAdAAAAABAJ' };
const newPost = {
    title: 'My first post',
    body: 'something interesting',
    tags: ['gaming, tech'],
    create_at: new Date(),
    author: authorOne
};
// as function argument types
function createPost(post) {
    console.log(`Create post ${post.title} by ${post.author.name} `);
}
createPost(newPost);
// with arrays
let posts = [];
posts.push(newPost);
console.log(posts);
function getRandomColour() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colourOne = getRandomColour();
const colourTwo = getRandomColour();
console.log(colourOne, colourTwo);
const firstUser = { name: 'mario', score: 75 };
function formatUser(user) {
    console.log(`${user.name} has a score of ${user.score}.`);
}
formatUser(firstUser);
formatUser({ name: 'Yoshi', score: 100 });
// --------------------------------------------------------------------
// Union Types
let someId;
someId = 1;
someId = '2';
let email = null;
email = 'mario@netninja.dev';
email = null;
let anotherId;
anotherId = '2387e23v7f';
anotherId = 5;
function swapIdType(id) {
    if (typeof id === 'string') {
        // can use string methods
        return parseInt(id);
    }
    else {
        // can use number methods and properties
        return id.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType('2');
console.log(idOne, idTwo);
function loginDetails(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    if (value.type === 'person') {
        console.log(value.firstname, value.age);
    }
}

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
//Functions
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
// Any Type

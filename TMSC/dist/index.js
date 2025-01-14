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
// let user: [string, number]

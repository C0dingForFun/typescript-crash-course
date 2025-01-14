// Type Basics

let age:number = 30;
let firstName:string = 'Mario';
let isFictional:boolean;

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

let something: null;
let anotherThing: undefined;

something = null;
anotherThing = undefined;

console.log('Hello');

// Arrays

let names: string[] = ['Mario','Luigi', 'Peach'];
let ages: number[] = [25, 28, 24];

names.push('Bowser');
ages.push(35);

// type inference with arrays

let fruits = ['apples', 'pears', 'bananas', 'mangoes'];

fruits.push('Peaches');

const f = fruits[3]

let things = [1, true, 'Hello']

const t = things[0]  // t can be any of the 3 data types

// object litreals

let user: { firstName: string, age: number, id: number} = {
    firstName: 'Mario',
    age: 25,
    id: 1
}

user.firstName = 'Paach';
user.id = 2

// type inference with object literals

let person = {
    name: 'Luigi',
    score: 35
}

person.name = 'Bowser';
person.score = 40;

const score = person.score;
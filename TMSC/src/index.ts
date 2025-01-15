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

// -------------------------------------------------------------
// Arrays

let names: string[] = ['Mario','Luigi', 'Peach'];
let ages: number[] = [25, 28, 24];

names.push('Bowser');
ages.push(35);

// Type inference with arrays

let fruits = ['apples', 'pears', 'bananas', 'mangoes'];

fruits.push('Peaches');

const f = fruits[3]

let things = [1, true, 'Hello']

const t = things[0]  // t can be any of the 3 data types

// Object litreals

let user: { firstName: string, age: number, id: number} = {
    firstName: 'Mario',
    age: 25,
    id: 1
}

user.firstName = 'Paach';
user.id = 2;

// Type inference with object literals

let person = {
    name: 'Luigi',
    score: 35
}

person.name = 'Bowser';
person.score = 40;

const score = person.score;

// -----------------------------------------------------------------
// Functions

function addTwoNumbers(a:number, b:number): number{
    return a + b;
}

const subtractTwoNumbers = (a: number, b: number): number =>{
    return a - b;
}

addTwoNumbers(3, 9);

subtractTwoNumbers(10, 7);

function addAllNumbers(items: number[]): void{
    const total = items.reduce((a, c) => a + c, 0)
    console.log(total);
}

addAllNumbers([5, 7, 9, 11, 3, 2, 1])

// return type inference

function formatGreeting(name: string, greeting: string): string{
    return `${greeting}, ${name}`
}

const result = formatGreeting('Mario', 'Hello') 
console.log(result);

// -------------------------------------------------------------------
// Any Type

let myAge: any;
let title: any;

myAge = 19;
myAge = false

title = 25;
title = {
    hello:'World'
}

// Any Type in arrays

let stuff: any[] = ['hello', true, 30, null];

stuff.push({id: 123});

// Functions with Any Type

function addTogether(value: any): any {
    return value + value;
}

const results1 = addTogether('hello');
const results2 = addTogether(3);

// useful when migrating from js to ts
// because using any won't cause errors initially

// -------------------------------------------------------------
// Tuples

let person1: [string, number, boolean] = ['mario', 30, true];

// Tuple examples

let hsla : [number, string, string, number]

hsla = [200, '100%', '50%', 1];

let xy: [number, number];
xy = [94.7, 20.1];

function useCoords():[number, number]{
    //get coords

    const lat = 100;
    const long = 50;

    return [lat, long]
}

const [lat, long] = useCoords();

// Named Tuples

let user1: [name: string, age: number];

user1 = ['peach', 25];

console.log(user1[0]);

// ------------------------------------------------------------
// Interfaces

interface Author {
    name: string,
    avatar: string
}

const authorOne: Author = {name: 'mario', avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Ffree-png-hjsjt&psig=AOvVaw3G9sR2PlX2zjSqteYlzyLM&ust=1737008808224000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIj-j6CM94oDFQAAAAAdAAAAABAJ'};

interface Post {
    title: string,
    body: string,
    tags: string[],
    create_at: Date,
    author: Author
}

const newPost = {
    title: 'My first post',
    body: 'something interesting',
    tags: ['gaming, tech'],
    create_at: new Date(),
    author: authorOne 
}

// as function argument types

function createPost(post: Post): void{
    console.log(`Create post ${post.title} by ${post.author.name} `);
}

createPost(newPost);

// with arrays

let posts: Post[] = [];

posts.push(newPost)

console.log(posts);

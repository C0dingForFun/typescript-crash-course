// Type Basics | Primitive Types

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

user.firstName = 'Peach';
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
// Tuples - is an array with fixed size and known datatypes.

let person1: [string, number, boolean] = ['mario', 30, true];

// Tuple examples

let hsla : [number, string, string, number];

hsla = [200, '100%', '50%', 1];

let xy: [number, number];
xy = [94.7, 20.1];

function useCoords():[number, number]{
    //get coords

    const lat = 100;
    const long = 50;

    return [lat, long];
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

posts.push(newPost);

console.log(posts);

// ---------------------------------------------------------------------
// Type Aliases - allow you to create custom names for complex types, making your code more readable and maintainable.

// example 1 - tuple

type Rgb = [number, number, number];

function getRandomColour(): Rgb{
    const r = Math.floor(Math.random() * 255); // floor() - Round numbers down to the nearest integer
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return [r, g, b];
}

const colourOne = getRandomColour();
const colourTwo = getRandomColour();

console.log(colourOne, colourTwo);

// Example 2 - object literals

type User = {
    name: string
    score: number
}

const firstUser: User = {name: 'mario', score: 75};

function formatUser(user: User): void{
    console.log(`${user.name} has a score of ${user.score}.`);
}

formatUser(firstUser);
formatUser({name: 'Yoshi', score: 100});

// --------------------------------------------------------------------
// Union Types - is a type of variable that can be assigned more than one type.

let someId: number | string;

someId = 1;
someId = '2';

let email: string | null = null;

email = 'mario@netninja.dev';
email = null;

type Id = number | string;

let anotherId: Id;

anotherId = '2387e23v7f';
anotherId = 5;


// Union Type pitfalll

// function swapIdType(id: Id): Id{
    // can only use props and methods common to 
    // both number and string types
    // parseInt(id) --> not allowed

//     return id;
// }

// swapIdType(5);

// -----------------------------------------------------------------
// Type Guards

type Id2 = number | string;

function swapIdType(id: Id2){
    if(typeof id === 'string'){
        // can use string methods
        return parseInt(id)
    } else {
        // can use number methods and properties
        return id.toString()
    }
}

const idOne = swapIdType(1);
const idTwo = swapIdType('2');

console.log(idOne, idTwo);

// Tagged Interfaces

interface NewUser {
    type: 'user'
    username: string
    email: string
    id: Id2
}

interface NewPerson {
    type: 'person'
    firstname: string 
    age: number
    id: Id2
}

function loginDetails(value: NewUser | NewPerson): void {
    if(value.type === 'user'){
        console.log(value.email, value.username);        
    }
    if(value.type === 'person'){
        console.log(value.firstname, value.age)
    }
}


// ----------------------------------------------------------------
// Enums - allow you to define or declare a collection of related values, that can be numbers or strings, as a set of named constants.

// enum ResourceType {
//     BOOK,
//     AUTHOR, 
//     FILM,
//     DIRECTOR, 
//     PERSON,
// }

// console.log(ResourceType.BOOK); // 0 
// console.log(ResourceType.AUTHOR); // 1

// To start from 1
enum ResourceType{
    BOOK = 1,
    AUTHOR, 
    FILM,
    DIRECTOR, 
    PERSON,
}

console.log(ResourceType.BOOK); // 1
console.log(ResourceType.AUTHOR); // 2

// They can also be stored as strings
enum Direction {
    Up = 'Up',
    Right = 'Right',
    Down = 'Down',
    Left = 'Left'
}

console.log(Direction.Right); // Right
console.log(Direction.Down); // Down

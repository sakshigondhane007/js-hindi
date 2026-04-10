//  Primitive

//  7 types:- String , Number , Boolean , Null , Symbol , BigInt

const score = 100     //number define
const scoreValue = 100.3

const isLoggedIn = false    // boolean
const outsideTemp = null   // null
let userEmail;            // undefined

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);   //symbol

// const bigNumber = 343453456782345n   // bigInt



//Refrences ( Non-Primitive) 
//( data type of all non-primitive types is actually called functions, the return of function is special, it is called an object function)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];  //array
let myObj ={
    name: "sakshi",
    age: 22,
}
console.log(myObj.name);  //object

const myFunction = function(){
    console.log("Hello World");
}                                      //function


// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);
// console.log(typeof heros);



//++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive),  Heap (Non-Primitive)

let myYoutubename = "sakshigondhanedotcom"

let anothername = myYoutubename
anothername = "chaiorcode"

console.log(myYoutubename);
console.log(anothername);  //stack

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
    userTwo.email = "sakshi@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);   
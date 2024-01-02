//primitive data-type
//String, number, bigint, symbol, undefined, null, boolean
const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id === anotherId)
const bigNumber=123456789123456789n   //for bigger input we will use n which is symbol of bigint

//Non-Primitive Data Types:
//Array, Objects, Functions
const heros=["shaktiman","naagraj","doga"];
let myObj={
    name:"sakshi",
    age:22,
}
console.log(heros);
console.log(myObj);

//functions
const myFunction= function(){
    console.log("Hello World");
}
console.log(typeof bigNumber)
console.log(typeof scoreValue);
console.log(typeof myFunction);

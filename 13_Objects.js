//OBJECT LITERALS:-

const mySym=Symbol("key1")
const jsUser={
    name:"Hitesh",
    age:18,
    email:"hitesh@google.com",
    location:"Jaipur",
    isLoggedIn:false,
    LastLoggedInDays:["Monday", "Saturday"],
    "full name":"Hitesh Choudhary",
    [mySym]:"Key1"
}
// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// jsUser.email="hitesh@google.com"
// Object.freeze(jsUser);
// jsUser.email="hitesh@microsoft.com"
// console.log(jsUser);
jsUser.greeting=function(){
    console.log("Hello js User");
}
jsUser.greetingTwo=function(){
    console.log(`Hello js User, ${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
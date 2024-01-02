let myDate=new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toUTCString());
console.log(myDate.getTimezoneOffset());
console.log("---------------------------------");
console.log(typeof myDate);
console.log("---------------------------------");
let myCreatedDate=new Date(2023, 0, 23)
console.log( myCreatedDate.toDateString());
let myCreatedDate1=new Date(2023, 0, 23, 5, 3)
console.log( myCreatedDate1.toLocaleString());
let myCreatedDate2=new Date("2023-01-23")
console.log( myCreatedDate2.toLocaleString());
let myCreatedDate3=new Date("01-23-2023")
console.log( myCreatedDate3.toLocaleString());
console.log("---------------------------------");
// 
// // console.log(myTimeStamp.getTime());
// console.log(Math.floor(Date.now()/1000));
console.log("---------------------------------");
let newDate=new Date();
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());
console.log("---------------------------------");
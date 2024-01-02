const name="hitesh"
const repoCount=50
console.log(name+" "+repoCount+" "+"value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName=new String("hitesh hc choudhary");
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString=gameName.substring(0, 5);
console.log(newString);
const anotherString=gameName.slice(-8,6);
console.log(anotherString);
const oneString="   hitesh    "
console.log(oneString);
console.log(oneString.trim());
const url="https://www.asthavlog/astha%2001vlog"
console.log(url.replace('%2001','-'));
console.log(url.includes('astha'));
console.log(url.includes('ram'));
console.log(gameName.split(' '));
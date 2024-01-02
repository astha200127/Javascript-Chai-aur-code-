const marvel_heroes=["spiderman", "batman", "ironman"]
const dc_heroes=["superman", "flash", "thor"]

// marvel_heroes.push(dc_heroes)   //HERE WE THINK THAT IT HAS PUSHED ARR INTO OLD ARR BUT IT IS NOT TRUE IT WILL NOT ADD IT WILL ADD IT AS A SINGLE ELEMENT LIKE BRACKET KE ANDER BRACKET
// console.log(marvel_heroes);

// const allHeroes=marvel_heroes.concat(dc_heroes)
// console.log(allHeroes); //It will add as an array not like push

// const allNewHeroes=[...marvel_heroes, ...dc_heroes]
// console.log(allNewHeroes);  //it will work sam as concat but difference is that here by adding 3 dots we can add array and we can add more than 2 arrays so, it's more preferable

// const new_Arr=[1,2,3,[4,5],[6,7,[8,9]]]
// const anoNew_Arr=new_Arr.flat(Infinity)
// console.log(anoNew_Arr);  //IT WILL CONCAT ALL THE ARRAYS INTO A SINGLE ARAY BECAUSE OF INFINITY IF WE WILL GIVEWN ANOTHER DEPTH THEN IT WILL MERGE TILL THERE SO AS MUCH AS WE WANT WE CAN CONCAT TILL THERE USING FLAT


console.log(Array.isArray("ASTHA"));  //IT WILL CHECK WHETHER THE GIVEN ARRAY IS PRESENT OR NOT
console.log(Array.from("ASTHA"));  //IT WILL CREATE THE GIVEN ELEMENT INTO ARRAY JUST BY USING .from EITHER IT IS STRING, NUMBERS OR ANYTHING.
console.log(Array.from({name:"ASTHA"})); //IF IT WILL NOT BE ABLE TO CREATE AN ARRAY IT WILL GIVE AN EMPTY SET  ///THIS IS VERY INTERESTING CASE FOR INTERVIEW

let a1=100
let a2=200
let a3=300
console.log(Array.of(a1, a2, a3));  //Array.of will convert the given elemlents into array 
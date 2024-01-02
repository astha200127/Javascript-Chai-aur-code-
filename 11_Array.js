const myArr=[0, 1, 2, 3, 4, 5]
const myArr1=["Shaktiman", "Naagraaj"]
const myArr2=new Array(1,2,3,4)
console.log(myArr[0]);

//Array Methods
myArr.push(6)  //It adds value inside array at the end
console.log(myArr);
myArr.pop();   //It will remove the last number of the array
console.log(myArr);
myArr.unshift(9)  //Unshift will add number at the starting of the array
console.log(myArr);
myArr.shift()  //It will remove the number from the starting of the array
console.log(myArr);
console.log(myArr.includes(9)); //includes will check whether the given number is present int the array or not
console.log(myArr.indexOf(9)); //it will givr the index if available then the index if not then -1
const newArr=myArr.join()  //it will convert the array into string and in o/p brackets will be removed and when we will check its type it will give String
console.log(newArr);
console.log(typeof newArr);

//Slice and Splice
console.log('A', myArr);
const myN1=myArr.slice(1,3)   //It will give arr between 1 and 3
console.log(myN1);
console.log('B', myArr);
const myN2=myArr.splice(1,3)
console.log('C', myArr);   //It will create the new array by removing the array between 1 to 3 and print only the remaining elements
console.log(myN2);  //It will print elements from (1,3) i.e. 1,2,3
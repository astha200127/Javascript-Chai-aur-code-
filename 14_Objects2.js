const tinderUser= new Object()
//const tinderUser= {}
//console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn= false
console.log(tinderUser);

const regularUser={
  email:"some@gmail.com",
  fullname:{
    userfullname:{
      firstname:"hitesh",
      lastname:"choudhary"
    }
  }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}
const obj3={5:"a", 6:"b"}

const obj4= {obj1, obj2}
const obj5= Object.assign({}, obj1, obj2, obj3)

const obj6={...obj1, ...obj2}
console.log(obj6);

const Users=[
  {
    id:1,
    email:"h@gmail.com"
  },
  {
    id:2,
    email:"a@gmail.com"
  },
  {
    id:3,
    email:"s@gmail.com"
  }
  ]
  Users[1].email;
  console.log(tinderUser);
  console.log(Object.keys(tinderUser));
  console.log(Object.values(tinderUser));
  console.log(Object.entries(tinderUser));
  console.log(tinderUser.hasOwnProperty('isLoggedIn'));
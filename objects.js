//objects {} in javaScript
// An object is a collection of named values. It's a common practice to declare objects with 'const' keyword.

const Person = {
    name : 'hamza',
    age : 22
}
console.log(Person);
//accessing object: dot notation
console.log(Person.name);
console.log(Person.age);

//accessing object: bracket notation
console.log(Person['name']);
console.log(Person['age']);

//assigning new values to an already created object
Person.phone = '03xx-52416xx';
console.log(Person);

const Person2 = {
    name : 'Qazi',
    shirt : 'black'
}

console.log(Person2);

//function that will print hi i am qazi i am wearing a black shirt.
function print(){
    let str = `Hi i am ${Person2.name}. I am wearing a ${Person2.shirt} shirt`;
    return str;
}
console.log(print());

//this function has three concepts -> Es6 arrow functions -> object -> template literals 
const arrowIntro = () => {
    const person = {
        name: 'Ali',
        age : '22'
    }
    
    let str = `Hi my name is ${person.name}. My age is ${person.age}`;
    return str;
}
console.log(arrowIntro())


//for instance now you want to add value in runtime

const arrowFunc = (name, gender) => {
    const info = {
        name: name,
        gender : gender
    }
    
    let str = `Hi my name is ${info.name}. I am a ${info.gender}`;
    return str;
}
console.log(arrowFunc('Afzaal', 'male'));
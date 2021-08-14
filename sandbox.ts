//explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = "kuba"
age = 30;

// isLoggedIn = 30;
isLoggedIn = false;

// character = true;
character = "kub";



//arrays
let ninjas: string[] = [];

// ninjas = [10, 23]
ninjas.push('kub')
// ninjas = ['mario', 'yoshi']
console.log(ninjas)



//union types
let mixed: (string | number | boolean)[] = [];
mixed.push('helo')
mixed.push(20);
mixed.push(true)

console.log(mixed);

let uid: string|number;
uid = '1222';
uid = 123;
// uid = false;




//objects

let ninjaOne: object;
ninjaOne = {name: 'kub', age:30};
// ninjaOne = 'kba'

let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string,
}

ninjaTwo = {name: 'mar', age:20, beltColor: 'black'}
console.log(ninjaTwo)
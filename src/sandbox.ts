// let greet = () => {
//     console.log('hello world')
// }

// greet();

let greet: Function;

// greet = "hello"

greet = () => {
    console.log("hello, again")
}
greet();



const add = (a:number, b:number, c: number | string = 10 ) => {
    console.log(a+b);
    console.log(c)
}

add(5,7)


const minus = (a: number, b:number): number => {
    return a + b;
}

let result = minus(4, 5)
console.log(result)
// result = 'kub';


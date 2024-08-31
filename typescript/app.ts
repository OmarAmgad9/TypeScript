

console.log("Hello TypeScript")

// Created object 

const user0 = {
    id: 0,
    name: "Omar"
}
// Interface 
interface User{
    readonly id: number; // readOnly => can not change value of id
    name: string;
    email?: string; // ? => option can Not added
    gender: Gender;
}
type Gender = 'male' | 'female'
// this Object using data type interface
const user:User = {
    id:0,
    name: 'Omar',
    gender: 'male'
}

interface Profile extends User{}

//  Defintion class
@first()
class UserAccount{
    
    constructor(protected message: string) {
        console.log(this.message)
    }
    
}

console.log('test');

// object of class UserAccount
let user1 = new UserAccount('Omar');


// this mean this obj canbe type string or array of string
function getLength(obj: string | string[]){
    return obj.length
}
console.log(getLength('TEST Length'));

// Generics 

// interface Backpack<Type>{
//     add: (obj:Type)=>void;
//     get: ()=>Type;
// }

// declare const backpack: Backpack<string>;
// const object = backpack.get();
// backpack.add('Generics TEST')

const hello = <testmessage = string>(message: testmessage):testmessage=>{
    return message
}
const test = <messageType = number>(num1:messageType, num2:messageType): string=>{
    return num1 + ' ' + num2
}

console.log(test<number>(10, 20));
console.log(typeof(test<number>(10, 20))); // return String



// Decorators => class declaration, method, accessor, property or parameter.
// Decorators => Evalute => Function that will be called at runtime with information
function first(value?: string ){
    if(value){
        console.log(`value: ${value}`)
    }else{
        console.log("first Decorator Test");
    }
    return function(target: any){
        console.log("first Called")
    }
}

const array:any[] = ['ahmed', 'omar', 1, 3]
console.log(array)

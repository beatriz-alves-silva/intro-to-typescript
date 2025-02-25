// string, boolean, number,...
let x: number = 10;
x = 7;
console.log(x);

let y = 12; // inferencia
// y = "teste";
let z: number = 12; // annotation

// tipos básicos
let nome: string = "Beatriz";
let idade: number = 20;
const isADM: boolean = true;

// object 
const myNumber: number[] = [1, 2, 3,];
console.log(myNumber);
console.log(myNumber.length);

// tuplas
let myTuple: [number, string, string[]]
myTuple = [5, "Olá", ["a", "b", "c"]];

// object literals -> {prop: value}
const usuario: {name: string, age: number} = {
    name: "Beatriz",
    age: 20,
};

console.log(usuario);

// union type
let id: string | number = "10";
id = 200;
//id = true;

// type alias
type myIDType = number | string;
const userID: myIDType = 10;

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size{
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
};

const camisa = {
    nome: "Camisa gola V",
    size: Size.M,
};

console.log(camisa);

// literal types
let cor: "Vermelho" | "Azul" | "Verde";

cor = "Vermelho"; // válido
cor = "Azul"; // válido
//cor = "Roxo"; // erro: 'amarelo' não é um valor permitido

// funções
function soma(a: number, b: number){
    return a + b;
};

console.log(soma(11, 3)); 

// interfaces
interface Planta{
    id: number;
    nome: string;
    estadoCrescimento: string;
    regar(): void;
};

const plataMilho: Planta = {
    id: 1,
    nome: "Milho",
    estadoCrescimento: "Estado 1",
    regar(){
        console.log(`${this.nome} foi regado.`);
    },
};

plataMilho.regar();

// narrowing
// checagem tipos
function doSomething(info: number | boolean){
    if(typeof info === "number"){
        console.log(`O número é ${info}.`);
        return;
    }
    console.log("Não foi passado um número.");
}

doSomething(5);
doSomething(true);

// generics 
function showArrayItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    })
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"]

showArrayItems(a1);
showArrayItems(a2);

// classes
class User{
    name;
    age;
    isApproved;

    constructor(name: string, age: number, isApproved: boolean){
        this.name = name;
        this.age = age;
        this.isApproved = isApproved;
    };

    showUserName(){
        console.log(`O nome de usário é: ${this.name}`);
    }
};

const joao = new User("João Alves", 23, true);

console.log(joao);
joao.showUserName();

// interfaces em classes
interface IVehicle {
    brand: string;
    showBrand(): void;
}

class Car implements IVehicle{
    brand;
    wheels;

    constructor(brand: string, wheels: number){
        this.brand = brand;
        this.wheels = wheels;
    }
    
    showBrand(): void {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}

const fusca = new Car("VW", 6);

// herança
class SuperCar extends Car{
    engine;

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels);
        this.engine = engine;
    };
}

const a4 = new SuperCar("Audi", 3, 2.0);
console.log(a4);

a4.showBrand();

// decorators
function BaseParamters(){
    return function <T extends {new (...args: any[]): {}}>(constructor: T){
        return class extends constructor{
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@BaseParamters()
class Person{
    nome;
    constructor(nome: string){
        this.nome = nome;
    }
};

const sam = new Person("Sam");

console.log(sam);



## Comandos

### Criar o arquivo de configuração do TypeScript: *"tsconfig.json"*
```tsc --init```

### Configurar a pasta de entrada e saída

```tsc --rootDir src --outDir dist```

<span style="color:green">Configurar manualmente no arquivo *tsconfig.json*:</span>

```"rootDir": "./src"```

```"outDir": "./build/js/"```

### Transpilar os arquivos TypeScript -> JavaScript
```tsc```

### Compilação automática
```tsc -w```

## Anotações
### Inference (Inferência):
Quando o TypeScript deduz automaticamente o tipo de uma variável, função ou expressão, sem precisar declarar explicitamente.

Exemplo: 
```javascript
let x = 10; // TypeScript infere que 'x' é do tipo number
```

### Inference (Inferência):
Quando é especificado explicitamente o tipo de uma variável ou função.
Exemplo: 
```javascript
let x: number = 10; // anotação explícita que 'x' é do tipo number
```

### Tuple (Tupla):
São tipos de dados que permitem armazenar um conjunto de valores de tipos diferentes em uma única variável (semelhante a arrays).
Exemplo: 
```javascript
let pessoa: [string, number] = ["Beatriz", 25];
```

### Object Literals:
Objetos que são definidos diretamente no código, sem a necessidade de criar uma classe ou função.
Exemplo:
```javascript
let pessoa: { nome: string, idade: number } = {
  nome: "Beatriz",
  idade: 25
};
```

### Type Alias:
É uma maneira de dar um nome a um tipo existente, permitindo o uso desse nome em vez de repetir o tipo completo em várias partes do código.
Exemplo:
```javascript
type Pessoa = {
  nome: string;
  idade: number;
};

let pessoa: Pessoa = {
  nome: "Beatriz",
  idade: 25
};
```

### Enum (Enumeration):
É uma maneira de criar um conjunto de valores nomeados. Ele é usado para representar uma coleção de constantes de forma legível e estruturada.
Exemplo:
```javascript
enum Size{
    P = "Pequeno",
    M = "Médio",
    G = "Grande",
};

const camisa = {
    nome: "Camisa gola V",
    size: Size.M,
};
```

### Literal Types:
São tipos que representam valores específicos e imutáveis.
Exemplo: 
```javascript
let cor: "Vermelho" | "Azul" | "Verde";

cor = "Vermelho"; // válido
cor = "Azul"; // válido
cor = "Roxo"; // erro: 'amarelo' não é um valor permitido
```

### Funções:
Devemos especificar os tipos dos parâmetros e do retorno.
Exemplo:
```javascript
function soma(a: number, b: number): number {
  return a + b;
}

console.log(soma(5, 3)); // saída: 8
```
### Funções com Parâmetros Opcionais:
Parâmetros opcionais podem ser adicionados com *?*.
Exemplo:
```javascript
function saudacao(nome: string, sobrenome?: string): string {
  if (sobrenome) {
    return `Olá, ${nome} ${sobrenome}!`;
  }
  return `Olá, ${nome}!`;
}

console.log(saudacao("Beatriz"));          // Olá, Beatriz!
console.log(saudacao("Beatriz", "Silva")); // Olá, Beatriz Silva!
```

### Interfaces:
São usadas para definir a forma de um objeto, descrevendo as propriedades, métodos e seus tipos.
Exemplo:
```javascript
interface Planta {
  id: number;
  nome: string;
  estadoCrescimento: string;
  regar(): void;
}

const plantaMilho: Planta = {
  id: 1,
  nome: "Milho",
  estadoCrescimento: "Semente",
  regar() {
    console.log(`${this.nome} foi regado! 💧`);
  },
};

plantaMilho.regar();
```

### Narrowing em TypeScript
É o processo de refinar ou reduzir o tipo de uma variável a partir de checagem de tipo.
Exemplo: 
```javascript
function mostrarValor(valor: string | number) {
  if (typeof valor === "string") {
    console.log(valor.toUpperCase()); // só funciona em string
  } else {
    console.log(valor.toFixed(2));    // Só funciona em number
  }
}
mostrarValor("jogo"); // JOGO
mostrarValor(3.1415); // 3.14
```

### Generics:
Permitem criar componentes reutilizáveis, tipados e flexíveis sem perder a verificação de tipo.
Exemplo:
```javascript
function primeiroElemento<T>(lista: T[]): T {
  return lista[0];
}

const numero = primeiroElemento([10, 20, 30]);     // number
const texto = primeiroElemento(["maçã", "banana"]); // string

console.log(numero.toFixed(2)); // 10.00
console.log(texto.toUpperCase())
```

### Classes
Funcionam semelhante às classes em Java. Porém, com a vantagem de tipagem estática.
Exemplo:
```javascript
class Planta {
  nome: string;
  valor: number;

  constructor(nome: string, valor: number) {
    this.nome = nome;
    this.valor = valor;
  }

  descrever(): void {
    console.log(`${this.nome} vale ${this.valor} moedas.`);
  }
}

const tomate = new Planta("Tomate", 50);
tomate.descrever();
```

### Herança:
 Permite que uma classe adquira as propriedades e métodos de outra (reutilização de código e facilidade de manutenção).
 Exemplo:
```javascript
class PlantaFrutifera extends Planta {
  fruta;
  constructor(nome: string, valor: number, public fruta: string) {
    super(nome, valor); // chama o construtor da superclasse
    this.fruta = fruta;
  }

  produzirFruta(): void {
    console.log(`${this.nome} produziu a fruta: ${this.fruta}!`);
  }
}

const morango = new PlantaFrutifera("Morango", 50, "Fruta de Morango");
morango.regar();   
morango.produzirFruta();   
morango.colher(); 
```

### Decorators
São funções especiais que permitem adicionar comportamentos a classes, métodos, propriedades ou parâmetros de forma declarativa.
Exemplo:
```javascript
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

```
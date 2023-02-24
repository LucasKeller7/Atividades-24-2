// let carro = {
//     portas: 4,
//     vendido: true,
//     valor: 239000.00,
//     marca: 'BMW',
//     acessorios: ['ar condicionado', 'tv', 'freio a disco', 'nitro']
// }
// console.log(carro.marca)

// 1

let cachorro = {
    raca: 'caramelo',
    latidosPorMinuto: 5,
    consegueRolar: true
}

// 2

let pessoa = {
    nome: 'Lucas',
    
    getNome: function() {
        console.log('Olá, ' + this.nome);
    },
    setNome(nome){
        this.nome = nome
    }
}
pessoa.getNome()

// 3

let pessoa1 = {
    nome: prompt('Informe o primeiro nome: '),
    idade: parseInt(prompt('Informe a primeira idade: '))
}

let pessoa2 = {
    nome: prompt('Informe o segundo nome: '),
    idade: parseInt(prompt('Informe a segunda idade: '))
}

if (pessoa1.idade > pessoa2.idade) {
    console.log('A pessoa mais velha é ' + 'a Maria')
} else if (pessoa1.idade == pessoa2.idade){
    console.log('As duas pessoas têm a mesma idade')
} else {
    console.log('A pessoa mais velha é ' + 'o João')
}

// 4

let func1 = {
    nome: prompt('Informe o primeiro nome: '),
    salario: parseInt(prompt('Informe o primeiro salário: '))
}

let func2 = {
    nome: prompt('Informe o segundo nome: '),
    salario: parseInt(prompt('Informe o segundo salário: '))
}

media = ((func1.salario + func2. salario) / 2)
console.log(media)

// 5


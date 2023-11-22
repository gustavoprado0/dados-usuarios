let nome = prompt(("Qual é o seu nome ?"))
let idade = Number(prompt('Qual a sua idade ?'))
let peso = Number(prompt('Quantos kg você pesa ?'))
var profissão = prompt("Qual é a sua profissão ?")


console.log( " O nome do usúario é " + nome + " ele tem " + idade + " anos " + " ele pesa " + peso + "kg" + " e a profissão dele é " + profissão)


if(idade > 18){
    console.log("Esta liberado tomar umas geladas!")
}else{
    console.log("Sem geladas para você!")
}


//DESCOBRINDO IDADE FRACIONADA

let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365


console.log("Sua idade em meses é:" + meses)
console.log("Sua idade em semanas é:" + semanas)
console.log("Sua idade em dias é:" + dias)

//DESCOBRINDO IMC

let altura = true
let imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log("Magreza")
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Normal")
} else if (imc >= 25 && imc <= 30) {
    console.log("Sobrepeso")
} else {
    console.log("Obesidade")
}

//DESCOBRINDO ANOS DE NASCIMENTO

let anoAtual = 2023
let anoNasc = anoAtual - idade

console.log("Você nasceu no ano de " + anoNasc)

//EXIBINDO ANOS E IDADES

let anoVivido = anoNasc
let idadeAtual = 0

for (let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++) {
    console.log(anoVivido + " - " + idadeAtual + " anos de idade")
    idadeAtual++
}


//LOOP DOWHILE
let continuar = prompt("Deseja inserir os dados novamente ? (s/n)")
do {
    //INSERIR LÓGICA ANTERIOR
}while (continuar == "s")



//CRIANDO VARIÁVEIS/LOOP´

let confirmar = "n"
if (continuar != "s") {
    let nome = prompt("Digite seu nome")
    let idade = parseInt(prompt("Digite sua idade"))
    let salarioAtual = parseFloat(prompt("Digite seu salario atual"))
    console.log("nome: " + nome + ", idade: " + idade + ", salario atual:  " + salarioAtual)
     let confirmar = prompt("As informações estão corretas ? (s/n)")
     console.log(confirmar)
    





//FAZENDO PREVISÃO DO SALÁRIO

let aumento = 0.015
console.log("Previsão salarial para os próximos 10 anos:")

for (let ano = 1; ano <= 10; ano++) {
    salarioAtual += salarioAtual * aumento
    aumento *= 2

    console.log((2023 + ano) + " = R$ " + salarioAtual * aumento)
}
}
var idade = 70
console.log(`Você tem ${idade} anos!`)

if (idade <16) {

    console.log(`Você não pode votar!`)

}else if (idade < 18 || idade > 65) {

    console.log('Seu voto é opcional!')

}else if (idade >= 18 && idade <= 90) {

    console.log('Seu voto é obrigatório!')

}else if (idade > 90) {

    console.log('Você é um Hailander, cuidado!')

}
    
    

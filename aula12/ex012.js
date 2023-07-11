var agora = new Date()
var hora = agora.getHours()



if (hora >= 6 && hora <=12) {
    console.log(`Bom dia! A hora exata é ${hora} da manhã.`)
}else if (hora >12 && hora <=18){
    console.log(`Boa tarde! A hora exata é ${hora} da tarde.`)
}else if (hora > 18 && hora < 24 || hora < 6) {
    console.log (`Boa noite! A hora exata é ${hora} da noite.`)
}


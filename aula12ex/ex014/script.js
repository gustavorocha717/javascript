function hora(){

    var agora = new Date()
    var hora = agora.getHours()
    
    var p = document.querySelector('#idp')
    var img = document.querySelector('#img')



    if (hora >= 6 && hora <12) {
        idp.innerHTML = (`Bom dia! A hora exata é ${hora} da manhã.`)
        img.src = 'imagens/manhã.jpg'
        body.style.background = '#74a956'
        body.style.color = 'black'
        main.style.background = 'white'
        main.style.shadow = 'black'
        a.style.color = 'black'


    }else if (hora >12 && hora <=18){
        idp.innerHTML =(`Boa tarde! A hora exata é ${hora} da tarde.`)
        img.src = 'imagens/tarde.jpg'
        body.style.background = '#c7630e'
        idp.style.color = 'black'
        main.style.background = 'white'
        main.style.shadow = 'black'
        


    }else if (hora > 18 && hora < 24 || hora < 6) {
        idp.innerHTML = (`Boa noite! A hora exata é ${hora} da noite.`)
        img.src = 'imagens/noite.jpg'
    }


}
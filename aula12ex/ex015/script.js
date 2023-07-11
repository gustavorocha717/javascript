function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('#res')


    if (fano.value.length == 0 || fano.value > ano) {
        window.alert ('[ERRO] Verifique os dados fornecidos!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement ('img')
        img.setAttribute ('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 18) {
                //criança
                img.setAttribute('src', 'imagens/M18.png')
            }else if (idade < 30) {
                //jovem
                img.setAttribute('src', 'imagens/M18-29.png')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/M30-59.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/M60.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 18) {
                //criança
                img.setAttribute('src', 'imagens/F18.png')
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src','imagens/F18-29.png')
            }else if (idade < 60) {
                //adulta
                img.setAttribute('src', 'imagens/F30-59.png')
            }else{
                //idosa
                img.setAttribute('src', 'imagens/F60.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é um(a) ${gênero} de ${idade} anos!`
        res.appendChild(img)
        img.style.borderRadius = '50%'
        img.style.paddingTop = '10px'
        
    }

}
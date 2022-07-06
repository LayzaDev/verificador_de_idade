function calcular() {
  var data = new Date() // data atual
  var ano = data.getFullYear() // ano atual
  var fano = document.getElementById('txtano') // formulário de ano
  var res = document.querySelector('div#res')

  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('sex') // formulário de sex
    var idade = ano - Number(fano.value) // ano atual - ano de nasc. do cliente
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
      if (idade >= 0 && idade <= 10) {
        gênero = 'Criança'
        img.setAttribute('src', '../img/foto_baby_m.png')
        document.body.style.background = '#91c981'
      } else if (idade < 15) {
        gênero = 'Pré-adolescente'
        img.setAttribute('src', '../img/foto_pre_adolesc_m.png')
        document.body.style.background = '#e9c565'
      } else if (idade <= 24) {
        gênero = 'Jovem'
        img.setAttribute('src', '../img/foto_jovem_m.png')
        document.body.style.background = '#c99d6f'
      } else if (idade <= 60) {
        gênero = 'Homem'
        img.setAttribute('src', '../img/foto_adulto_m.png')
        document.body.style.background = '#2f4038'
      } else {
        gênero = 'Idoso'
        img.setAttribute('src', '../img/foto_idoso_m.png')
        document.body.style.background = '#b6b9c1'
      }
    } else if (fsex[1].checked) {
      if (idade >= 0 && idade <= 10) {
        gênero = 'Criança'
        img.setAttribute('src', '../img/foto_baby_f.png')
        document.body.style.background = '#e3c2b5'
      } else if (idade < 15) {
        gênero = 'Pré-adolescente'
        img.setAttribute('src', '../img/foto_pre_adolesc_f.png')
        document.body.style.background = '#d4c3b1'
      } else if (idade <= 24) {
        gênero = 'Jovem'
        img.setAttribute('src', '../img/foto_jovem_f.png')
        document.body.style.background = '#accbd1'
      } else if (idade <= 60) {
        gênero = 'Mulher'
        img.setAttribute('src', '../img/foto_adulto_f.png')
        document.body.style.background = '#eea684'
      } else {
        gênero = 'Idosa'
        img.setAttribute('src', '../img/foto_idoso_f.png')
        document.body.style.background = '#523132'
      }
    }

    res.innerHTML = `<p>${gênero} de ${idade} anos.</p>`
    res.style.textAlign = 'center'
    res.appendChild(img)
  }
}

function contar() {
    let msg = document.getElementById ("mensagem")
    let imagem = document.getElementById ("foto")
    let data = new Date()
    let horas =  data.getHours()
    msg.innerHTML = (` o horario atual e de <strong>${horas} horas</strong> `)
    if (horas >=0 && horas < 12) {
        imagem.src = "fotos/amanhacer.jpg"
        document.body.style.background = '#FFA500'
     } else if (horas >=12 && horas <18) {
      imagem.src= "fotos/tarde.jpg"
      document.body.style.background ='#FF8C42'
    } else {
        imagem.src="fotos/anoite.jpg"
        document.body.style.background = '#2C3E50'

    }

    

    }

        
    
  

    

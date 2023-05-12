function enviar(){
var data=new Date()
var ano=data.getFullYear()
var fano= document.getElementById('txtano')
var res= document.querySelector('div#res')

if (fano.value.lenght == 0 || Number(fano.value) > ano){
    window.alert('[ERRO]verifique os dados adicionado!!')
} else {
    var fsex=document.getElementsByName('sex')
    var idade=ano-Number(fano.value)
    var genero=''
    var img= document.createElement('img')
    img.setAttribute('id','foto')
}

if(fsex[0].checked){
    genero="homem"
}if (idade >=0 && idade <10){
//foto bebe homem
img.setAttribute('src','bebe-m.png')
}else if (idade<=21){
//foto jovem homem
img.setAttribute('src','jovem-m.png')
} else if(idade<50){
//foto adulto homem
img.setAttribute('src','adulto-m.png')
}else {
//foto idoso homem
img.setAttribute('src','idosa-m.png')
} if(fsex[1].checked){
    genero="mulher"
} if (idade >=0 && idade <10){
    //foto bebe mulher
    img.setAttribute('src','bebe-h.png')
    }else if (idade<=21){
    //foto jovem mulher
    img.setAttribute('src','jovem-h.png')
    } else if(idade<50){
    //foto adulto mulher
    img.setAttribute('src','adulto-h.png')
    }else {
    //foto idoso mulher
    img.setAttribute('src','idoso-h.png')
}


res.style.textAlign='center'
res.innerHTML=`detectamos ${genero} com ${idade} anos`
res.appendChild(img)
}

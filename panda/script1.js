function verificar() {
	var data=new Date()
	var ano= data.getFullYear()
	var fano=document.getElementById(`txtano`)
	var res= document.querySelector(`div#res`)
	if(fano.value.length == 0||Number(fano.value) > ano){
		window.alert(`[Erro] Verifique os dados novamente!`)
	}else {
	
		var fsex=document.getElementsByName(`radsex`)
		var idade= ano-Number(fano.value)
		var gênero=``
		var img=document.createElement(`img`)
		img.setAttribute(`id`, `foto`)
		if(fsex[0].checked){
			gênero= `um panda filhote`
			if(idade>=0 && idade <10){
				img.setAttribute(`src`, `panda1.jpg`)
			}else if( idade <21){
				img.setAttribute(`src`, `panda2.jfif`)
			}else if( idade <50){
				img.setAttribute(`src`, `panda3.jpg`)
			}else{
				img.setAttribute(`src`, `panda4.jpg`)
			} 
			

		}else if (fsex[1].checked){
			gênero=`uma panda filhote`
			if(idade>=0 && idade <10){
				img.setAttribute(`src`, `panda1.jpg`)
			}else if( idade <21){
				img.setAttribute(`src`, `panda2.jfif`)
			}else if( idade <50){
				img.setAttribute(`src`, `panda3.jpg`)
			}else{
				img.setAttribute(`src`, `panda4.jpg`)
			} 
		}

		
		res.innerHTML=`Detectamos ${gênero} com ${idade} anos`
		res.appendChild(img)


	}


}

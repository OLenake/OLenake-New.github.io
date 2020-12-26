/*!
 * Onkgopotse Lenake - Portfolio Website v1.0.0 (https://onkgopotselenake.me/)
 * Copyright © 2020 Onkgopotse Lenake
 * Licensed under MIT (https://github.com/OLenake/OLenake.github.io/blob/master/LICENSE)
 */
console.log('olenake.js is working')

let theme = localStorage.getItem('theme')

if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i=0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function(){
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = 'assets/css/themes/ol-theme-light.css'
	}

	if(mode == 'dark-blue'){
		document.getElementById('theme-style').href = 'assets/css/themes/ol-theme-dark-blue.css'
	}

	if(mode == 'dark-green'){
		document.getElementById('theme-style').href = 'assets/css/themes/ol-theme-dark-green.css'
	}

	if(mode == 'deep-purple'){
		document.getElementById('theme-style').href = 'assets/css/themes/ol-theme-deep-purple.css'
	}

	localStorage.setItem('theme', mode)
}

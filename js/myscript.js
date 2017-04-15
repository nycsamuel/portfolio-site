$(document).ready(() => {


	console.log('loaded')
	const navBtn  = $('div.nav-btn')
	const menu = $('div.menu')

	navBtn.on('click', (event) => {
		console.log('clicked nav')
		navBtn.toggleClass('clicked')
		menu.toggleClass('show-menu')
	})
	
})
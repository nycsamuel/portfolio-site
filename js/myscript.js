$(document).ready(() => {


	console.log('loaded')
	const navBtn   = $('div.nav-btn')
	const dropdown = $('div.dropdown-container')
	const sideDrawer = $('div.side-drawer')

	navBtn.on('click', (event) => {
		console.log('clicked nav')
		navBtn.toggleClass('clicked')
		// dropdown.toggleClass('show')
		sideDrawer.toggleClass('drawer-active')
	})
	
	// enable all tooltips
	$('[data-toggle="tooltip"]').tooltip()

	$('#scrolling').on('click', (event) => {
		$('html,body').animate({ scrollTop: $("#div").offset().top }, 'slow')
	})

	
})
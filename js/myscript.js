$(document).ready(() => {


	console.log('loaded')
	const navBtn     = $('div.nav-btn')
	const dropdown   = $('div.dropdown-container')
	const sideDrawer = $('div.side-drawer')
	const main       = $('div.main')

	navBtn.on('click', (event) => {
		console.log('clicked nav')
		navBtn.toggleClass('clicked')
		// dropdown.toggleClass('show')
		sideDrawer.toggleClass('drawer-active')
		if (sideDrawer.hasClass('drawer-active')) { 
			main.css('margin-left', '30%' ) 
		} else {
			main.css('margin-left', '0' )
		}

	})
	
	// enable all tooltips
	$('[data-toggle="tooltip"]').tooltip()

	$('#scrolling').on('click', (event) => {
		$('html,body').animate({ scrollTop: $("#div").offset().top }, 'slow')
	})

	
})
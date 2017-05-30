$(document).ready(() => {
	console.log('hi :)');	

	$('.nav-tabs li').on('click', function(event) {
    // nav tabs
    // console.log($(this).text())
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    
    // descriptions containers
    // $('div.active').hide('slow');
    $('div.active').fadeOut('slow');
    $('div.active').removeClass('active');
    $(`div#${$(this).text().toLowerCase()}`).fadeIn('slow').addClass('active');
  })
  
})
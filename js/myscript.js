$(document).ready(() => {
	console.log('hey');	

	$('.nav-tabs li').on('click', function(event) {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  })

})
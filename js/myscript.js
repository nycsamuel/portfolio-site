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
  });
  
  // let intervalId = setInterval(function() {
  //   let name = $('span.name');
  //   for (let i = 0; i < name.length; i++) {
  //     let r = Math.round(Math.random()*255);
  //     let g = Math.round(Math.random()*255);
  //     let b = Math.round(Math.random()*255);
  //     $(name[i]).css('color', `rgb(${r}, ${g}, ${b})`);
  //   }  
  // }, 1000);  
  // let intervalId = setInterval(function() {
  //   let r = Math.round(Math.random()*255);
  //   let g = Math.round(Math.random()*255);
  //   let b = Math.round(Math.random()*255);
  //   $('#main > h1').css('background-color', `rgb(${r}, ${g}, ${b})`);
  // }, 1000);
})
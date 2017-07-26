$(document).ready(() => {
	console.log('hi :)');	
  

  // fix chrome for android's viewport height when address bar disappears
  $(window).on('resize', function(event) {
    $('footer').css({
      'left': '0',
      'right': '0',
      'bottom': '0',
    });
  });

  // Typed.js
  Typed.new('.myname', {
    strings: ['SAMUEL NA'],
    typeSpeed: 100, // typing speed
    backDelay: 750, // pause before backspacing
    loop: false, // loop on or off (true or false)
    loopCount: false, // number of loops, false = infinite
    callback: function() {} // call function after typing is done
  });
  Typed.new('.description', {
    strings: ['Full Stack Developer', 'Problem Solver', 'Always Hungry To Learn'],
    typeSpeed: 100, // typing speed
    startDelay: 1500, // time before typing starts (ms)
    backDelay: 2000, // pause before backspacing
    loop: true, // loop on or off (true or false)
    loopCount: null, // number of loops, false = infinite
    //callback: function(){ } // call function after typing is done
  });

  $('.nav-tabs li').on('click', function(event) {
    // nav tabs
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    
    // descriptions containers
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
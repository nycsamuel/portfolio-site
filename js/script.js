// DOM loaded
$(document).ready(() => {
  console.log('js connected!');

  const aboutmeBtn = $('#about');
  const projectBtn = $('#list-projects');

  aboutmeBtn.on('click', () => {
    console.log('about me clicked');
    $(this).css('border-bottom', '2px solid black');
  });

}); // doc ready

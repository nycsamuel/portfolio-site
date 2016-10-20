$(document).ready(() => {
  console.log('script loaded');

  // get height of screen, using let because screen height can change
  // can i add an event listener so it knows when the height changes?
  let screenHeight = $(window).height();
  const first = $('#first').css('height', screenHeight);;
  const second = $('#second').css('height', screenHeight);;
  const third = $('#third').css('height', screenHeight);;
  // first.css('height', screenHeight);
  // second.css('height', screenHeight);
  // third.css('height', screenHeight);
  third.fadeOut();

  /* this doesn't work with fat arrow function! */

  const firstWaypoint = $('#first').waypoint(direction => {
    console.log('first point => ' + direction);
  });
  const secondWaypoint = $('#second').waypoint(direction => {
    console.log('second point => ' + direction);
  }, { offset: '25%'});
  const thirdWaypoint = $('#third').waypoint(direction => {
    console.log('third point => ' + direction);
    third.fadeIn();
  }, { offset: '20%'});



}) // ready

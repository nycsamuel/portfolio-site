$(document).ready(() => {
  console.log('script loaded');

  /* this doesn't work with fat arrow function! */

  const firstWaypoint = $('#first').waypoint(direction => {
    console.log('first point => ' + direction);
  });
  const secondWaypoint = $('#second').waypoint(direction => {
    console.log('second poingt => ' + direction);
  }, { offset: '25%'});
  const thirdWaypoint = $('#third').waypoint(direction => {
    console.log('third poingt => ' + direction);
  }, { offset: '25%'});



}) // ready

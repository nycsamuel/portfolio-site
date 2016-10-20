$(document).ready(() => {
  console.log('script loaded');

  const waypoint = new Waypoint({
    element: document.getElementById('basic-waypoint'),
    handler: () => {
      notify('Basic waypoint triggered')
    },
  });

  

})

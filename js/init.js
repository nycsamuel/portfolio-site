(function($){
  $(function(){

    $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 240
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
      }
    );
    $('.slider').slider({full_width: false});
    $('.collapsible').collapsible();
    $(".dropdown-button").dropdown();

    const navAbout       = $('#navlink-navAbout');
    const navAboutMob    = $('#navlink-navAbout-mob');
    const navProjects    = $('#navlink-navProjects');
    const navProjectsMob = $('#navlink-navProjects-mob');

    navAbout.on('click', () => {
      console.log('clicked navAbout');
      // const about = document.getElementById('about');
      // about.scrollIntoView();
      window.scrollTo(0,0);
    });
    navAboutMob.on('click', () => {
      console.log('clicked navAbout');
      // const about = document.getElementById('about');
      // about.scrollIntoView();
      window.scrollTo(0,0);
    });

    navProjects.on('click', () => {
      console.log('clicked navProjects');
      const projects = document.getElementById('projects');
      projects.scrollIntoView();
    });
    navProjectsMob.on('click', () => {
      console.log('clicked navProjects');
      const projects = document.getElementById('projects');
      projects.scrollIntoView();
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space

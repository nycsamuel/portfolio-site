(function($){
  $(function(){

    $('.button-collapse').sideNav();

    const navAbout    = $('#navlink-navAbout');
    const navProjects = $('#navlink-navProjects');

    navAbout.on('click', () => {
      console.log('clicked navAbout');
      const about = document.getElementById('about');
      about.scrollIntoView();

    });
    navProjects.on('click', () => {
      console.log('clicked navProjects');
      const projects = document.getElementById('projects');
      projects.scrollIntoView();
    });

  }); // end of document ready
})(jQuery); // end of jQuery name space
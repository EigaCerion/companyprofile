
//  side nav bar 
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);
//   // Or with jQuery
//   $(document).ready(function(){
//     $('.sidenav').sidenav();
//   });

// akhir side nav bar


// Slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider,{
    indicators : false,
    height : 350,
    transition : 600,
    interval : 3000

});

// Akhir Slider

// client
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);
// akhir client


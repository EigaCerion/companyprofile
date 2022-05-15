
//  side nav bar 
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);
//   // Or with jQuery
//   $(document).ready(function(){
//     $('.sidenav').sidenav();
//   });

// Akhir Side Nav Bar


// Slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider,{
    indicators : false,
    height : 350,
    transition : 600,
    interval : 3000

});

// Akhir Slider

// Client
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);
// Akhir Client

// Portofolio
const materialBox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialBox);
// Akhir Portofolio

// input field
const selectForm = document.querySelectorAll('Select');
M.FormSelect.init(selectForm);
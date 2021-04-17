///////////////////////////////
///TOOGLE BURGER

const toogle = document.querySelector('.toggle');
const nav =document.querySelector('.list');
const back = document.querySelector('.background');
const btn = document.querySelector('.btn');
const head = document.querySelector('.header__nav');




toogle.addEventListener('click', (e) =>{
    
   
    nav.classList.toggle('active');
    back.classList.toggle('active');
    btn.classList.toggle('active');
    toogle.classList.toggle('active');

    
    

})

$( '.list li a' ).on("click", function(){
    $('.toggle').click();
  });

//////////////////////////////////////////////////////
///// client slide

// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items: 1,
//         loop: true,
//         autoWidth:true,
//         center: true,
//         autoplay: true,
//         autoplayTimeout: 4000,
//         slideTransition: 'linear',
//         autoplaySpeed: 4000,
//         autoplayHoverPause: false,
//         dots: false

       
        

        
// });



$(document).ready(function() {
 
    $("#owl-tesmony").owlCarousel({
   
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        center: true,
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false,
        autoplay: true
   
    });
   
  });




  //////////////////////////////////
  ///AOS 
  AOS.init();

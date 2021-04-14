///////////////////////////////
///TOOGLE BURGER

const toogle = document.querySelector('.toggle');
const nav =document.querySelector('.list');
const back = document.querySelector('.background');
const btn = document.querySelector('.btn');




toogle.addEventListener('click', (e) =>{
    
   
    nav.classList.toggle('active');
    back.classList.toggle('active');
    btn.classList.toggle('active');
    toogle.classList.toggle('active');
    

})

//////////////////////////////////////////////////////
///// client slide

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 8,
        loop: true,
        autoWidth:true,
        autoplay: true,
        autoplayTimeout: 3000,
        slideTransition: 'linear',
        autoplaySpeed: 3000,
        autoplayHoverPause: false,
        

        
});

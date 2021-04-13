///////////////////////////////
///TOOGLE BURGER

const toogle = document.querySelector('.toggle');
const nav =document.querySelector('.list');
const back = document.querySelector('.background');
const btn = document.querySelector('.btn')



toogle.addEventListener('click', (e) =>{

   
    nav.classList.toggle('active');
    back.classList.toggle('active');
    btn.classList.toggle('active');
    toogle.classList.toggle('active');

})

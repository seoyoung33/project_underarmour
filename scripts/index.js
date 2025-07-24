/* swiper */
/* 메인 */
let slideMain = new Swiper('.ad',{
    autoplay:{delay:5000},
    loop:true,
    direction:'horizontal',
})
/* 상품 */
let slideProduct = new Swiper('.product_swiper',{
    slidesPerView:5,
    spaceBetween:45,
    loop:true,
    navigation:{
        nextEl:'.swiper-wrapper~.swiper-button-next',
        prevEl:'.swiper-wrapper~.swiper-button-prev',
    },
})

/* 이벤트 */
const gnbA = document.querySelectorAll('nav .gnb_wrap > li > a');
const lnb = document.querySelector('.lnb_depth1');
const bottom = document.querySelector('.gnb')
console.log(gnbA);
for(let i=0; i<8; i++){
    //console.log('123')
    gnbA[i].addEventListener('mouseover',()=>{
        gnbA[i].style.color='#BBFA6E'
    })
    gnbA[i].addEventListener('mouseout',()=>{
        gnbA[i].style.color='#fff'
    })
}
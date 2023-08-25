var nav1 = $(".header");
var nav2 = document.querySelector(".container-fluid");
nav1.on("mouseleave",function(){
    nav1.css("backgroundColor","black"),nav2.style.background= "black" ;
    setTimeout(() => {nav1.css("backgroundColor","white"),nav2.style.background= "white"
        
    }, 1000);
    
})

var swiper = new Swiper(".team-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});









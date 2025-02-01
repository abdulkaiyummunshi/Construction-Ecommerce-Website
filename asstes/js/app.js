let menuBtn = document.querySelector(".menu_btn");
let menuBar = document.querySelector(".off_canvas");
let crossBtn = document.querySelector(".cross_btn");

menuBtn.addEventListener("click", function(){
    menuBar.classList.add("active_offcanvas");
    // alert("Assalamu alaikum")
});

crossBtn.addEventListener("click", function(){
    menuBar.classList.remove("active_offcanvas");
})


// ----------SEARCH START---------------
let searchBtn = document.querySelector(".search");
let searchBar = document.querySelector("#search_bar")
let searchCross = document.querySelector(".search_cross");
let menuSearch = document.querySelector(".menu_search");

searchBtn.addEventListener("click", function(){
    searchBar.classList.add("active_search");
});

menuSearch.addEventListener("click", function(){
    searchBar.classList.add("active_search")
})
searchCross.addEventListener("click", function(){
    searchBar.classList.remove("active_search");
});




// ----------SEARCH END---------------

// -----------PORTFOLIO START---------
let firstImage = document.querySelector(".hover_img");
let firstImage2 = document.querySelector(".hover_img2");
let firstImage3 = document.querySelector(".hover_img3");
let hoverHere = document.querySelector(".card_one");
let hoverHere2 = document.querySelector(".card_2");
let hoverHere3 = document.querySelector(".card_3");

hoverHere.addEventListener("mouseover", function(){
    firstImage.src = "./asstes/images/portfolio/Vector2.png"
});
hoverHere.addEventListener("mouseout", function(){
    firstImage.src = "./asstes/images/portfolio/Vector.png"
});

hoverHere2.addEventListener("mouseover", function(){
    firstImage2.src = "./asstes/images/portfolio/Vector2.png"
});
hoverHere2.addEventListener("mouseout", function(){
    firstImage2.src = "./asstes/images/portfolio/Vector.png"
});

hoverHere3.addEventListener("mouseover", function(){
    firstImage3.src = "./asstes/images/portfolio/Vector2.png"
});
hoverHere3.addEventListener("mouseout", function(){
    firstImage3.src = "./asstes/images/portfolio/Vector.png"
});
// -----------PORTFOLIO END---------

// ---------------------WHY CHOOSE US START------------
// let showOne = document.querySelector(".show");
// let hideOne = document.querySelector(".hide");
// let mainBody = document.querySelector(".child_para");
// let mainHeight = document.querySelector(".one");

// hideOne.addEventListener("click", function () {
//     show.classList.add("kioum");
// });
// showOne.addEventListener("click", function () {
//     show.classList.remove("active_show");

// });




let hideButtons = document.querySelectorAll(".hide");
let showButtons = document.querySelectorAll(".show");


hideButtons.forEach((hideButton) => {
    hideButton.addEventListener("click", function () {
        let parent = hideButton.closest(".one");
        let mainBody = parent.querySelector(".child_para");
        let showButton = parent.querySelector(".show");

        showButton.classList.add("active_show");
        mainBody.classList.add("body_active");
        parent.classList.add("new_height");
        hideButton.classList.add("active_hide")
    });
});

showButtons.forEach((showButton) => {
    showButton.addEventListener("click", function () {
        let parent = showButton.closest(".one");
        let mainBody = parent.querySelector(".child_para");
        let hideButton = parent.querySelector(".hide");

        showButton.classList.remove("active_show");
        mainBody.classList.remove("body_active");
        parent.classList.remove("new_height");
        hideButton.classList.remove("active_hide")
    });
});

// ---------------------WHY CHOOSE US END------------




// JQUERY START 

// ------GREAT TEAM--------

$(function () {

$('.parent').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: '10px',
    prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
    nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1, 
                slidesToScroll: 1,
                // dots: true,
            }
        },
        {
            breakpoint: 872,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false, 
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false, 
            }
        }
    ]
});


$('.blog_and_news').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
    nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1, 
                slidesToScroll: 1,
                // dots: true,
            }
        },
        
    ]
});


    $('.banner_img_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false,
    dotsClass:"banner_slider_dots",
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1, 
                slidesToScroll: 1,
                // dots: true,
            }
        },
        
    ]
});
    




    // $('.tklove').slick({
    //     dots: true,
    //     arrows: true,
    //     dotsClass: 'container docts-active',
    //     autoplay: true,
    //     autoplaySpeed: 1000,
    //     prevArrow: `<span class="left-arrow"><i class="fa-solid fa-arrow-left"></i></span>`,
    //     nextArrow: `<span class="right-arrow"><i class="fa-solid fa-arrow-right"></i></span>`,
    // });

});

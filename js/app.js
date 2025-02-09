$(document).ready(function () {
    // Off-Canvas Menu
    $(".menu_btn").on("click", function () {
        $(".off_canvas").addClass("active_offcanvas");
    });

    $(".cross_btn").on("click", function () {
        $(".off_canvas").removeClass("active_offcanvas");
    });

    // Search Bar
    $(".search").on("click", function () {
        $("#search_bar").addClass("active_search");
    });

    $(".menu_search").on("click", function () {
        $("#search_bar").addClass("active_search");
    });

    $(".search_cross").on("click", function () {
        $("#search_bar").removeClass("active_search");
    });
});




// ----------SEARCH END---------------

// -----------PORTFOLIO START---------


$(document).ready(function () {
    $(".card_one").hover(
        function () { $(".hover_img").attr("src", "./images/portfolio/Vector2.png"); },
        function () { $(".hover_img").attr("src", "./images/portfolio/Vector.png"); }
    );

    $(".card_2").hover(
        function () { $(".hover_img2").attr("src", "./images/portfolio/Vector2.png"); },
        function () { $(".hover_img2").attr("src", "./images/portfolio/Vector.png"); }
    );

    $(".card_3").hover(
        function () { $(".hover_img3").attr("src", "./images/portfolio/Vector2.png"); },
        function () { $(".hover_img3").attr("src", "./images/portfolio/Vector.png"); }
    );
});

// -----------PORTFOLIO END---------








// ---------------------WHY CHOOSE US START------------
$(document).ready(function () {
    $(".hide").on("click", function () {
        let parent = $(this).closest(".one");
        parent.find(".show").addClass("active_show");
        parent.find(".child_para").addClass("body_active");
        parent.addClass("new_height");
        $(this).addClass("active_hide");
    });

    $(".show").on("click", function () {
        let parent = $(this).closest(".one");
        parent.find(".hide").removeClass("active_hide");
        parent.find(".child_para").removeClass("body_active");
        parent.removeClass("new_height");
        $(this).removeClass("active_show");
    });
});

// ---------------------WHY CHOOSE US END------------




// JQUERY START 

// ------GREAT TEAM--------

$(function () {

    $('.team_slider').slick({
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

$(document).ready(function(){
    $('.main-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        draggable: true,
        prevArrow: "<div class='control prev'><img src='img/prev.png'></div>",
        nextArrow: "<div class='control next'><img src='img/next.png'></div>",
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.teplitsa-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        draggable: true,
        prevArrow: "<div class='control prev'><img src='img/prev.png'></div>",
        nextArrow: "<div class='control next'><img src='img/next.png'></div>"
    });

    $('.teplitsa-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.teplitsa-slider',
        focusOnSelect: true
    });
});
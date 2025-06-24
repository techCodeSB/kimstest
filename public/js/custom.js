/* ==== Sticky Navbar ==== */

// let navHeight = $("header").height() - 50;
// $(window).bind('scroll', function () {
//     if ($(window).scrollTop() > navHeight) {
//         $('#header-sticky').addClass('sticky-nav');
//     } else {
//         $('#header-sticky').removeClass('sticky-nav');
//     }
// });

let headerSticky = document.getElementById('header-sticky');

if (window) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) { // Fixed threshold for stickiness
            headerSticky?.classList.add('sticky-nav', 'animated', 'fadeInDown');
        } else {
            headerSticky?.classList.remove('sticky-nav', 'animated', 'fadeInDown');
        }
    });
}



/* ==== Nav Toggle ==== */

$('.menu-button').click(function () {
    $('.mobileOverlay').toggleClass('toggle');
    $('.mobile_primary').toggleClass('active');
    $('.menu-button').toggleClass('toggle');
    $('body').toggleClass('hiddenClass');
});



/* ==== Mobile Menu M ==== */

var FX = function (a, b) {
    b(".mobile_primary .menu-item-has-children").append('<span class="sub-menu--button"></span>'),
        b(".sub-menu--button").each(function () {
            b(this).click(function () {
                b(this).toggleClass("open"),
                    b(this).prev().slideToggle();
            });
        });
}(FX || {}, jQuery);

$('.mobileOverlay').click(function () {
    $('.mobileOverlay').toggleClass('toggle');
    $('.mobile_primary').toggleClass('active');
    $('.menu-button').toggleClass('toggle');
    // $('body').removeClass('hiddenClass');
});

$('.menuClose').click(function () {
    $('.mobileOverlay').toggleClass('toggle');
    $('.mobile_primary').toggleClass('active');
    $('.menuClose').toggleClass('toggle');
    $('.menu-button').toggleClass('toggle');
    // $('body').removeClass('hiddenClass');
});

// scroll to top

let btn = $('#scrolltoButton');
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('active');
    } else {
        btn.removeClass('active');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

// home-banner-slider
window.initHomeBannerCarousel = function () {
    $('.homepage-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

}



// exellence-slider

// $('.exellence').owlCarousel({
//     margin:10,
//     navText: ["<img src='img/left-arrow.svg'>", "<img src='img/slider-right-arrow.svg'>"],
//     dots:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1,
//             loop:false,
//             center: true,
//             nav:false
//         },
//         1000:{
//             items:4,
//             loop:true,
//             nav:true
//         }
//     }
// })

window.initExellenceCarousel = function () {
    $('.exellence').owlCarousel({
        loop: false,
        margin: 10,
        autoplay: false,
        nav: true,
        items: 4,
        dots: false,
        slideTransition: 'linear',
        autoplaySpeed: 10000,
        navText: ["<img src='/img/left-arrow.svg'>", "<img src='/img/slider-right-arrow.svg'>"],
        responsive: {
            0: {
                items: 1.2,
                margin: 15,
                nav: false,
            },
            480: {
                items: 1.5,
                margin: 15,
                nav: false,
            },
            768: {
                items: 1.5,
                margin: 15,
                nav: false,
            },
            992: {
                items: 4,
                margin: 15,
            },
        },
    });
};

// expert slider
window.initExpertCarousel = function () {
    $('.expert').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        navText: ["<img src='/img/left-arrow.svg'>", "<img src='/img/slider-right-arrow.svg'>"],
        dots: false,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4
            }
        }
    })
}


// wall frame
window.initWallFrameCarousel = function () {
    $('.wall-frame').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        navText: ["<img src='/img/left-arrow.svg'>", "<img src='/img/slider-right-arrow.svg'>"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
}


// testimonial
window.initTestimonialCarousel = function () {
    $('.testimonial').owlCarousel({
        loop: true,
        center: true,
        margin: 15,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1.3,
                center: true,
                margin: 10
            },
            600: {
                items: 1.3,
                nav: false,
                margin: 10
            },
            1000: {
                items: 1.3,
                nav: false
            }
        }
    })
}


// blog
window.initBlogCarousel = function () {
    $('.blog').owlCarousel({
        loop: true,
        margin: 15,
        nav: false,
        navText: ["<img src='/img/left-arrow.svg'>", "<img src='/img/slider-right-arrow.svg'>"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
}


// hospital detils
window.hospitalDetails = function () {
    $('.hospital-details-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        navText: ["<img src='/img/left-arrow.svg'>", "<img src='/img/slider-right-arrow.svg'>"],
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false
            },
            600: {
                items: 1,
                dots: true,
                nav: false
            },
            1000: {
                items: 1
            }
        }
    })
}


// hospital page
window.hospitalCarousel = function () {
    $('.hospital-slider').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        navText: ["<img src='/img/left-arrow.svg'>", "<img src='/img/slider-right-arrow.svg'>"],
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 1,
                nav: false
            },
            1000: {
                items: 3
            }
        }
    })
}


$(document).ready(function () {
    // Open the first accordion item by default
    $('.accordian-footer').first().parent().addClass("drop-down");

    $('.accordian-footer').on('click', function (e) {
        e.preventDefault();

        // Remove "drop-down" class from all other items
        $('.accordian-footer').parent('.expanded').removeClass("drop-down");

        // Add "drop-down" class to the clicked item's parent
        $(this).parent('.expanded').toggleClass("drop-down");
    });
});


$(document).ready(function () {
    $('.speciality-page-search').select2();
});

$(document).ready(function () {
    $('.diseases-page-search').select2();
});

$(document).ready(function () {
    $('.treatments-page-search').select2();
});

// AOS.init({
//     offset: 100,
//     delay: 100,
//     duration: 1000,
//     easing: 'ease',
//     once: false,
//     mirror: true,
// });

// journal page
window.journalCarousel = function () {
    $('.journal-slider').owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        navText: ["<img src='img/left-arrow.svg'>", "<img src='img/slider-right-arrow.svg'>"],
        dots: false,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 5
            }
        }
    })
}


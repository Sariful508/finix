// smooth scroll

var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true
});

// ======= magnific popup =======

$('.video-play').magnificPopup({
    type: 'iframe'
});
// img poup
$('.img').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    },
    zoom: {
        enabled: true,

        duration: 300,
        easing: 'ease-in-out',

        opener: function(openerElement) {

            return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
    }
});

// ======= counter up =======

$('.counting').counterUp({
    delay: 10,
    time: 5000
});

// ======= uikit =======

// UIkit.util.on('#mahabur', 'scrolled', function() {
//     alert('almost done!.');
// });

// ======= mixit up for filtering =======

// var mixer = mixitup('.container');

// ======= wow / animate =======
new WOW().init();


// ======= owl carousel =======

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    autoplay: true,
    loop: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})


// ======= slick slider =======

// $('.brand-slider').slick({
//     dots: true,
//     arrows: true,
//     infinite: true,
//     autoplaySpeed: 2000,
//     autoplay: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [{
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 2
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// });


// ======= AOS for animate, fade scroll to show slide =======

// AOS.init({
//     duration: 1000,
//     offset: 300,
// });


// ======= type js =======

var typed = new Typed('.typed', {
    strings: ["business loan", "student loan", "personal loan", "education loan", "house loan", "payday loan"],
    typeSpeed: 60,
    backSpeed: 60,
    startDelay: 1000,
    backDelay: 1000,
    loop: true,
    cursorChar: ''
});
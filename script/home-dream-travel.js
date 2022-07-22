$(document).ready(function () { //document should be ready before exexuting the query
    console.log("12");
    //slideup
    $('#done').click(function () {
        if ($(".slide-up").first().is(":hidden")) {
            $(".slide-up").show("slow");
        } else {
            $(".slide-up").slideUp();
        }

    })
    //slidedown
    $('#done1').click(function () {
        if ($(".slide-down").first().is(":hidden")) {
            $(".slide-down").slideDown("slow");
        } else {
            $(".slide-down").hide();
        }

    })
    $("#done2").click(function () {
        $(".slide-toggle").slideToggle("slow");
    });

    $('#animate').click(function () {
        $('#work').animate({
            width: "90%",
            opacity: 0.4,
            marginLeft: "0.6in",
            borderWidth: "10px",
        }, 1500)
    })

    $('#animate-p').click(function () {
        $('#pAnimate').animate({
            width: "70%",
            marginLeft: "6px",
            fontSize: "3em",
            borderWidth: "10px",
        }, 1500)
    })

    // $("#start-animation").click(function () {
    //     $("#div-start-animation").animate({
    //         height: 'toggle'
    //     });
    // });

    $("#destination1").click(function () {
        $("#img1").animate({
            height: "toggle"
        });
        console.log("togl: ", $(this));
        // $("ul").toggle();
        $("#close-open1").children('.fas').toggleClass('fa-chevron-down fa-chevron-up');
    });

    $("#destination2").click(function () {
        $("#img2").animate({
            height: "toggle"
        });

        // $("ul").toggle();
        $("#close-open2").children('.fas').toggleClass('fa-chevron-down fa-chevron-up');
    });

    $("#destination3").click(function () {
        $("#img3").animate({
            height: "toggle"
        });

        // $("ul").toggle();
        $("#close-open3").children('.fas').toggleClass('fa-chevron-down fa-chevron-up');
    });

    $("#destination4").click(function () {
        $("#img4").animate({
            height: "toggle"
        });

        // $("ul").toggle();
        $("#close-open4").children('.fas').toggleClass('fa-chevron-down fa-chevron-up');
    });


    $("#destination5").click(function () {
        $("#img5").animate({
            height: "toggle"
        });

        // $("ul").toggle();
        $("#close-open5").children('.fas').toggleClass('fa-chevron-down fa-chevron-up');
    });


    $("#destination6").click(function () {
        $("#img6").animate({
            height: "toggle"
        });

        // $("ul").toggle();
        $("#close-open6").children('.fas').toggleClass('fa-chevron-down fa-chevron-up');
    });

    $('.fader').hover(function () {
        $('.white-color').find(".yellow-color").fadeToggle();
    });

    $("#slideshow > div:gt(0)").hide();

    setInterval(function () {
        $('#slideshow > div:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('#slideshow');
    }, 3000);

});

$(function () {
    console.log("w4: ", $('.bxslider'));
    $('.bxslider').bxSlider({
        mode: 'fade',
        auto: true,

        pager: true,
        pause: 2000
    });

    // AOS.init();

    var train = function () {
        $(".train").delay(500).animate({
            'left': '100%'
        }, 60000, 'linear', function () {
            $(this).css({
                'left': '-10px'
            });
            train();
        });

        $(".bus").delay(2000).animate({
            'right': '120%'
        }, 9000, 'linear', function () {
            $(this).css({
                'right': '-50px'
            });
            train();
        });

        $(".flight").delay(3000).animate({
            'left': '120%'
        }, 60000, 'linear', function () {
            $(this).css({
                'left': '-50px'
            });
            train();
        });

        $(".cruise").delay(1000).animate({
            'left': '120%'
        }, 60000, 'linear', function () {
            $(this).css({
                'left': '-100px'
            });
            train();
        });
    }
    train();



    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000
    });

    console.log("2: ");


    // $(".mobile-bars").click(function () {
    //     console.log('werewe');
    // });
});

function hamburgerMobile() {
    var height_var = window.innerHeight;
    console.log('werewe', height_var);

    $(".show-only-mobile").css({
        display: "flex",
        height: "100vh"
    });

    $(".hide-show-class-div").css({
        display: 'none'
    })
}

function clickCloseButton() {
    $(".show-only-mobile").css({
        display: "none"
    })

    $(".hide-show-class-div").css({
        display: 'block'
    })
}
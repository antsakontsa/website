// Button which appear to the right corner of the screen in about,
// and work pages

// When certain PointerEvent, button appear / disappear
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });

    // Animation when button cliked and page goes back up
    $('#scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});

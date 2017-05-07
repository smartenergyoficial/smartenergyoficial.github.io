//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top >= $(window).height()) {
        $(".navbar-fixed-top").addClass("show-nav");
    } else {
        $(".navbar-fixed-top").removeClass("show-nav");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top-60
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

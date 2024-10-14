require(['jquery', 'slick'], function($) {
    $(document).ready(function() {
        $('.center').slick({
            dots: true,
            centerMode: true,
            infinite: true,
            centerPadding: '0px',
            speed: 100,
            variableWidth: false,
        });
    });
});

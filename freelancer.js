// Freelancer Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){ 
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });    

    // Reload Youtube Videos after closing modal
    $(".portfolio-modal").on('hidden.bs.modal', function (e) {
        $(".portfolio-modal #iframe-realmdefense").attr("src", $(".portfolio-modal #iframe-realmdefense").attr("src"));
        $(".portfolio-modal #iframe-draftwars").attr("src", $(".portfolio-modal #iframe-draftwars").attr("src"));
        $(".portfolio-modal #iframe-clashofmagic").attr("src", $(".portfolio-modal #iframe-clashofmagic").attr("src"));
        $(".portfolio-modal #iframe-spellcasters").attr("src", $(".portfolio-modal #iframe-spellcasters").attr("src"));
        $(".portfolio-modal #iframe-tornadotower").attr("src", $(".portfolio-modal #iframe-tornadotower").attr("src"));
        $(".portfolio-modal #iframe-pebblelake").attr("src", $(".portfolio-modal #iframe-pebblelake").attr("src"));
        $(".portfolio-modal #iframe-retainrecollect").attr("src", $(".portfolio-modal #iframe-retainrecollect").attr("src")); 
    });

})(jQuery); // End of use strict

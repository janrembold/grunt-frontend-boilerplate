(function($){
    'use strict';

    $(document).ready(function(){
        console.log('document ready');

        // enable fastclick
        FastClick.attach(document.body);

        // offcanvas dummy click events
        $('.offcanvas__show-left-nav').on('click', function(e){
            e.preventDefault();
            $(this).closest('.offcanvas').toggleClass('offcanvas--show-left');
        });

        $('.offcanvas__show-right-nav').on('click', function(e){
            e.preventDefault();
            $(this).closest('.offcanvas').toggleClass('offcanvas--show-right');
        });

        $('.offcanvas__exit').on('click', function(){
            $(this).closest('.offcanvas').removeClass('offcanvas--show-left offcanvas--show-right');
        });
    });

})(jQuery);

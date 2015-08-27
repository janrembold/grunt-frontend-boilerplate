(function($){
    'use strict';

    $(document).ready(function(){
        // enable fastclick
        FastClick.attach(document.body);

        // offcanvas dummy click events
        $('[data-offcanvas-show]').on('click', function(e){
            e.preventDefault();
            $(this).closest('.offcanvas').toggleClass('offcanvas--show-'+$(this).data('offcanvas-show'));
        });

        $('.offcanvas__exit').on('click', function(){
            $(this).closest('.offcanvas').removeClass('offcanvas--show-left offcanvas--show-right');
            $('[data-offcanvas-show]').removeClass('is-active');
        });

        // hamburger toggle
        $('.hamburger').on('click', function(){
            $(this).toggleClass('is-active');
        });
    });

})(jQuery);

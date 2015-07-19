(function($){
    'use strict';

    $(document).ready(function(){
        console.log('document ready');

        if(Modernizr.touch) {
            console.log('is touch');
        }
    });

})(jQuery);

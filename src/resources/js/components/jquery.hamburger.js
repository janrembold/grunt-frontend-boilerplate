(function ( $, window, document, undefined ) {
    'use strict';

    // Create the defaults once
    var pluginName = 'hamburger',
        defaults = {
            propertyName: 'value'
        };

    // The actual plugin constructor
    function Plugin ( element, options ) {
        this.element = element;
        this.settings = $.extend( {}, defaults, options );
        this.init();
    }

    // Avoid Plugin.prototype conflicts
    $.extend(Plugin.prototype, {
        init: function () {
            console.log('xD');
        },
        yourOtherFunction: function () {
            // some logic
        }
    });

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[ pluginName ] = function ( options ) {
        return this.each(function() {
            if ( !$.data( this, 'plugin_' + pluginName ) ) {
                $.data( this, 'plugin_' + pluginName, new Plugin( this, options ) );
            }
        });
    };

})( jQuery, window, document );
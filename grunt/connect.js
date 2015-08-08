module.exports = {
    dev: {
        options: {
            hostname: '0.0.0.0',
            port: 9001,
            open: true,
            livereload: true,
            middleware: function(connect) {
                'use strict';
                return [
                    connect.static('dev'),
                    connect.static('src')
                ];
            }
        }
    }
};
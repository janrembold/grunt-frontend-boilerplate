module.exports = {
    compile: {
        options: {
            namespace: '<%= config.handlebarsNamespace %>',
            processName: function(filePath) {
                'use strict';
                return filePath.replace('<%= config.handlebars %>/', '').replace('.hbs', '').replace('/', '.');
            }
        },
        files: {
            '<%= config.dev %>/resources/js/handlebars-templates.js': '<%= config.handlebars %>/**/*.hbs'
        }
    }
};
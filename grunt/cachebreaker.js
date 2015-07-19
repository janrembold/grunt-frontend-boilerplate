module.exports = {
    js_default: {
        options: {
            replacement: 'md5',
            match: ['scripts.min.js'],
            src: {
                path: '<%= config.dist %>/resources/js/scripts.min.js'
            }
        },
        files: {
            src: ['<%= config.dist %>/*.html']
        }
    },
    css_default: {
        options: {
            replacement: 'md5',
            match: ['styles.min.css'],
            src: {
                path: '<%= config.dist %>/resources/css/styles.min.css'
            }
        },
        files: {
            src: ['<%= config.dist %>/*.html']
        }
    }
};
module.exports = {
    dist: {
        'devFile' : 'src/resources/js/vendor/modernizr.js',
        'outputFile' : 'dist/resources/js/vendor/modernizr.js',
        'uglify' : true,
        'parseFiles' : false,
        'files' : {
            'src': [
                'dev/resources/js/**/*.js',
                'dev/resources/css/**/*.css'
            ]
        }
    }
};
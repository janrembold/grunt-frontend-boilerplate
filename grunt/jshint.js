module.exports = {
    options: {
        jshintrc: true,
        reporter: require('jshint-stylish')
    },
    gruntfile: ['Gruntfile.js', '<%= config.grunt %>/*.js'],
    js: [
        '<%= config.src %>/resources/js/**/*.js',
        '!<%= config.src %>/resources/js/vendor/modernizr.js'
    ]
};
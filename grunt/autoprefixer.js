module.exports = {
    options: {
        browsers: ['last 2 versions', 'ie 9', '> 5%']
    },
    dist: {
        expand: true,
        flatten: true,
        src: '<%= config.dev %>/resources/css/*.css',
        dest: '<%= config.dev %>/resources/css/'
    }
};
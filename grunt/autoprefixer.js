module.exports = {
    options: {
        browsers: ['last 2 versions', 'ie 8', 'ie 9', '> 5%']
    },
    dist: {
        expand: true,
        flatten: true,
        src: './dev/resources/css/*.css',
        dest: './dev/resources/css/'
    }
};
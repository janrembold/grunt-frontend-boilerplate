module.exports = {
    option: {},
    all: {
        expand: true,
        cwd: '<%= config.dev %>',
        ext: '.html',
        src: ['*.html'],
        dest: '<%= config.dev %>'
    }
};
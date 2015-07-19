module.exports = {
    options: {
        sourceMap: true
    },
    server: {
        files: {
            '<%= config.dev %>/resources/css/main.css': [
                '<%= config.src %>/resources/sass/*.scss',
                '!<%= config.src %>/resources/sass/_*.scss'
            ]
        }
    }
};
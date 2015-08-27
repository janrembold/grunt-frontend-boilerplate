module.exports = {
    options: {
        assetsDirs: [
            '<%= config.prod %>/_assets/'
        ]
    },
    html: '<%= config.prod %>/*.html',
    css:  '<%= config.prod %>/resources/css/*.css'
};
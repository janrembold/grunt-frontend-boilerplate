module.exports = {
    options: {
        assetsDirs: [
            '<%= config.prod %>'
        ]
    },
    html: '<%= config.prod %>/*.html',
    css:  '<%= config.prod %>/resources/css/*.css'
};
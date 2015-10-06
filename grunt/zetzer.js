module.exports = {
    server: {
        options: {
            env: {
                test: 'Zetzer'
            },
            partials: '<%= config.src %>/_zetzer/partials',
            templates: '<%= config.src %>/_zetzer/templates',
            dot_template_settings: {
                varname: 'it',
                strip: false,
                append: true,
                selfcontained: false
            }
        },
        files: [
            {
                expand: true,
                cwd: '<%= config.src %>/site-zetzer/',
                src: '*.html',
                dest: '<%= config.dev %>',
                flatten: false
            }
        ]
    }
};
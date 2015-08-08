module.exports = {
    options: {
        assets: '<%= config.src %>/_assets',
        helpers: ['handlebars-helpers', 'src/resources/js/handlebars-helper-inc.js'],
        partials: ['<%= config.src %>/_assemble/partials/**/*.hbs'],
        layout: 'default.hbs',
        layoutdir: '<%= config.src %>/_assemble/layouts/',
        data: ['<%= config.src %>/_assemble/data/*.{json,yml}'],
        includes: ['<%= config.src %>/_assemble/includes/']
    },
    site: {
        files: [{
            cwd: '<%= config.src %>/',
            dest: '<%= config.dev %>/',
            src: ['*.hbs'],
            expand: true
        }]
    }
};
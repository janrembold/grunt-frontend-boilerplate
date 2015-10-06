module.exports = {
    options: {
        assets:    '<%= config.src %>/_assets',
        helpers:   ['handlebars-helpers', 'src/resources/js/handlebars-helper-inc.js'],
        partials:  ['<%= config.src %>/_assemble/partials/**/*.hbs'],
        layoutdir: '<%= config.src %>/_assemble/layouts/',
        layout:    'offcanvas.hbs',
        data:      ['<%= config.src %>/_assemble/data/*.{json,yml}'],
        includes:  ['<%= config.src %>/_assemble/includes/']
    },
    site: {
        files: [{
            cwd: '<%= config.src %>/site/',
            dest: '<%= config.dev %>/',
            src: ['*.hbs'],
            expand: true
        }]
    },
    useminPrepare: {
        files: [{
            cwd: '<%= config.src %>/resources/',
            dest: '<%= config.dev %>/resources/',
            src: ['*.hbs'],
            expand: true
        }]
    }
};
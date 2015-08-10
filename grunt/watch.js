module.exports = {
    gruntfile: {
        files: ['Gruntfile.js', '<%= config.grunt %>/*.js'],
        tasks: ['jshint:gruntfile'],
        options: {
            reload: true
        }
    },
    js: {
        files: ['<%= config.src %>/resources/js/**/*.js'],
        tasks: ['jshint:js', 'copy:js'],
        options: {
            livereload: true
        }
    },
    img: {
        files: ['<%= config.src %>/resources/img/**'],
        tasks: ['copy:img'],
        options: {
            livereload: true
        }
    },
    fonts: {
        files: ['<%= config.src %>/resources/fonts/**'],
        tasks: ['copy:fonts'],
        options: {
            livereload: true
        }
    },
    //assets: {
    //    files: ['<%= config.src %>/_assets/**'],
    //    tasks: ['copy:assets'],
    //    options: {
    //        livereload: true
    //    }
    //},
    bower: {
        files: ['<%= config.src %>/resources/bower/**'],
        tasks: ['copy:bower'],
        options: {
            livereload: true
        }
    },
    //zetzer: {
    //    files: [
    //        '<%= config.src %>/site/*.html',
    //        '<%= config.src %>/resources/_useminPrepare.html',
    //        '<%= config.src %>/_zetzer/**/*.html'
    //    ],
    //    tasks: ['zetzer'],
    //    options: {
    //        livereload: true
    //    }
    //},
    assemble: {
        files: [
            '<%= config.src %>/site/*.hbs',
            '<%= config.src %>/resources/_useminPrepare.hbs',
            '<%= config.src %>/_assemble/**/*.hbs'
        ],
        tasks: ['assemble', 'prettify'],
        options: {
            livereload: true
        }
    },
    sass: {
        files: ['<%= config.src %>/resources/sass/**/*.scss'],
        tasks: ['sass', 'autoprefixer'],
        options: {
            livereload: true
        }
    },
    handlebars: {
        files: ['<%= config.src %>/_handlebars/**/*.hbs'],
        tasks: ['handlebars:compile'],
        options: {
            livereload: true
        }
    }
};
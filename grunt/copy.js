module.exports = {
    dev: {
        files: [
            {
                cwd: '<%= config.src %>/',
                dest: '<%= config.dev %>/',
                src: [
                    'resources/js/**',
                    'resources/img/**',
                    'resources/fonts/**',
                    '_assets/**'
                ],
                expand: true
            }
        ]
    },
    bower: {
        files: [
            {
                cwd: '<%= config.src %>/',
                dest: '<%= config.dev %>/',
                src: ['resources/bower/**'],
                expand: true
            }
        ]
    },
    dist: {
        files: [
            {
                cwd: '<%= config.dev %>/',
                dest: '<%= config.prod %>/',
                src: [
                    '*.html',
                    '!_useminPrepare.html',
                    'resources/img/**',
                    'resources/fonts/**',
                    '_assets/**'
                ],
                expand: true
            }
        ]
    },
    js: {
        files: [
            {
                cwd: '<%= config.src %>/',
                dest: '<%= config.dev %>/',
                src: ['resources/js/**'],
                expand: true
            }
        ]
    },
    fonts: {
        files: [
            {
                cwd: '<%= config.src %>/',
                dest: '<%= config.dev %>/',
                src: ['resources/fonts/**'],
                expand: true
            }
        ]
    }
};
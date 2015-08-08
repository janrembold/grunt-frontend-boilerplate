/*
* + zetzer
* + jshint
* + usemin
* + sass
* + csslint
* + connect
* + copy
* + clean
* + time
* + watch
* + bower
* + handlebars
* + dist
* + autoprefixer
* + cssmin
* + watch prüfen
* + custom modernizr
* + better configuration
* + use newer
* + use concurrent
* + copy resources in watch task
* + grunt-cache-breaker
* grunt-rev
* imagemin
* htmlmin
* rsync
* grunt-spritesmith
* file documentation/indexr
* */

module.exports = function(grunt) {
    'use strict';

    // measures the time each task takes
    require('time-grunt')(grunt);

    // load all grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // load grunt configuration
    require('load-grunt-config')(grunt, {
        data: {
            pkg: grunt.file.readJSON('package.json'),
            config: {
                // source folder
                src:   './src',
                // development folder - all sources and compiled files go here (nothing minified)
                dev:   './dev',
                // distribution folder - all minified and optimized sources go here
                prod:  './dist',
                // temp folder for useminPrepare
                tmp:  './.tmp',
                // grunt configuration folder
                grunt: './grunt',
                // bower folder
                bower: './src/resources/bower',
                // handlebars folder
                handlebars: './src/_handlebars',
                // handlebars namespace - call precompiled template /general/layout.hbs with HBS['general.layout']
                handlebarsNamespace: 'HBS'
            }
        }
    });
};

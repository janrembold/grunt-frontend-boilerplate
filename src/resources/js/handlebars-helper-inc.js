/**
 * Handlebars Include Helper
 * Copyright (c) 2015 Jan Rembold
 * Licensed under the MIT License (MIT).
 *
 * TODO
 * - Extend context with local parameters
 * - Add partial caching -> compile only once
 */

module.exports.register = function (Handlebars, options, params)  {
    'use strict';

    options = options || {};

    var fs       = require('fs');
    var path     = require('path');
    var includes = options.includes || [''];
    var templateCache = {};

    var extend = function(out) {
        out = out || {};

        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i]) {
                for (var key in arguments[i]) {
                    if (arguments[i].hasOwnProperty(key)) {
                        out[key] = arguments[i][key];
                    }
                }
            }
        }

        return out;
    };

    var getCached = function(id, content) {
        if(typeof(templateCache[id]) === 'undefined') {
            templateCache[id] = Handlebars.compile(content);
        }

        return templateCache[id];
    };

    Handlebars.registerHelper('inc', function (file, opts)  {
        // read template file from include path
        for (var i=0; i<includes.length; i++) {
            try {
                var templatePath = path.join(includes[i], file);
                var content = fs.readFileSync(templatePath, 'utf8');
                var template = getCached(templatePath, content);

                // extend context
                var context = extend({}, this, params.grunt.config.data, opts.hash);
                context = params.grunt.config.process(context);

                return new Handlebars.SafeString( template(context) );
            } catch (e) {}
        }

        return '';
    });
};
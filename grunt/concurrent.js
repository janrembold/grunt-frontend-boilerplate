module.exports = {
    options: {
        logConcurrentOutput: false
    },
    compiles: {
        tasks: ['sass', 'handlebars']
    },
    validations: {
        tasks: ['jshint'/*, 'csslint'*/]
    }
};
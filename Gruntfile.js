module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        jshint: {
            allFiles: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        jscs: {
            src: "src/**/*.js"
        },
        uglify: {
            options: {
                mangle: {toplevel: false}, //prevent changes to variable and function names
                squeeze: {dead_code: false},
                codegen: {quote_keys: true}
            },
            compositeCanvas: {
                files: {
                    'compositeCanvas.min.js': ['src/compositeCanvas.js']
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs-checker');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('default', ['jshint', 'jscs', 'uglify']);
};

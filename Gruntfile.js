module.exports = function (grunt) {

  // load multiple grunt tasks using globbing patterns
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // Load grunt plugins
  //grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-nodemon');
  //grunt.loadNpmTasks('grunt-concurrent');

  grunt.initConfig({

    watch: {
      css: {
        files: ['public/css/**/*.css'],
        tasks: []
      },

      js: {
        files: ['public/js/**/*.js'],
        tasks: []
      }
    },

    nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },

      tasks: ['nodemon', 'watch']
    }

  });

  grunt.registerTask('default', ['concurrent']);
};
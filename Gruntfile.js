'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    banner: '/*! \n* <%= pkg.title || pkg.name %> - v<%= pkg.version %>' +
            '\n* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %> ' +
            '\n* <%= pkg.homepage ? pkg.homepage : "" %> ' +
            '\n*/ \n\n',

    paths: {
      game: "client/game/",
      vendor: "client/vendor/",
      distJS: "client/dist/js/",
      dist: "client/dist/"
    },

    clean: {
      before: {
        src: [
          "<%= paths.distJS %>*",
          "!<%= paths.dist %>.gitignore"
        ],
      }
    },

    watch: {
      all: {
        files: ["<%= paths.game %>**/*"],
        tasks: ['watcher']
      }
    },

    builder: {
      web: {
        src: "<%= paths.game %>index.js",
        dest: "<%= paths.distJS %>game.js"
      }
    },

    concat: {
      vendorWeb: {
        src: [ 
            '<%= paths.vendor %>jquery.min.js'
          , '<%= paths.vendor %>rAFPolyfill.js'
          , '<%= paths.vendor %>underscore.min.js'
          , '<%= paths.vendor %>**/*.js'
        ],
        dest: '<%= paths.distJS %>vendor.js'
      },
      game: {
        options: {
          stripBanners: {
            line: true
          },
          banner: '<%= banner %>',
        },
        files: {
          '<%= paths.distJS %>game.js': [ '<%= paths.distJS %>game.js' ]
        }
      }
    },

    uglify: {
      all: {
        options: {
          stripBanners: {
            line: true
          },
          banner: '<%= banner %>',
        },
        files: {
          '<%= paths.distJS %>game.js': [ '<%= paths.distJS %>game.js' ]
        }
      }
    },

    jshint: {
      all: {
        files: {
          src: [
            "<%= paths.game %>**/*.js"
          ]
        },
        options: {
            bitwise: true
          , curly: true
          , eqeqeq: true
          , forin: true
          , immed: true
          , latedef: true
          , newcap: true
          , noempty: true
          , nonew: true
          , quotmark: false
          , undef: true
          , unused: true
          , laxcomma: true

          , globals: {
              window: true
            , document: true
            , require: true
            , module: true
            , $: true
            , jQuery: true
            , _: true
            , Howl: true
            , Howler: true
            , console: true
            , moment: true
            , oaky: true
            , mumps: true
          }
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  
  require("./builder.grunt.js")(grunt);

  grunt.registerTask("build", [
    "clean:before",
    "jshint",
    "builder:web:local",
    "concat:vendorWeb",
    "concat:game"
  ]);

  grunt.registerTask("prod", [
    "clean:before",
    "jshint",
    "builder:web:local",
    "concat:vendorWeb",
    "concat:game",
    "uglify:all"
  ]);

  grunt.registerTask("watcher", [ "build" ] );

  grunt.registerTask("default", "build");
  
  grunt.registerTask("w", ["watcher", "watch:all"]);

  grunt.registerTask("dist", ["build", "uglify"]);

};
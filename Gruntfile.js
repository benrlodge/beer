module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: { style: 'expanded' },
        files: {
          'public/stylesheets/main.css': 'public/sass/main.scss'
        }
      }
    },
    concat: {
      options: { separator: ';',},
      vendor: {
        src: [
          'components/jquery/dist/jquery.js',
          'components/handlebars/handlebars.js',
          'components/underscore/underscore.js',
          'components/backbone/backbone.js',
          'components/backbone.localStorage/backbone.localStorage.js',
          'components/raphael/raphael-min.js',
          'components/justgage/justgage.js'

        ],
        dest: 'public/javascripts/build/vendor.js'
      },
      css: {
        src: [
          'components/bootstrap/dist/css/bootstrap.css'
        ],
        dest: 'public/stylesheets/vendor.css'
      }
    },
    coffee: {
        glob_to_multiple: {
          expand: true,
          flatten: false,
          cwd: 'public/coffee',
          src: ['**/*.coffee'],
          dest: 'public/javascripts/prebuild/',
          ext: '.js'
        }
    },
    browserify: {
      dist: {
        files: {
          'public/javascripts/build/app.js' : 
          [
            'public/javascripts/prebuild/collections/**/*.js',
            'public/javascripts/prebuild/controllers/**/*.js',
            'public/javascripts/prebuild/models/**/*.js',
            'public/javascripts/prebuild/views/**/*.js',
            'public/javascripts/prebuild/router.js',
            'public/javascripts/prebuild/app.js'
          ]
        },
      }
  },

  // handlebarsify: {
  //   compile: {
  //     options: {
  //       wrapped: false,
  //       compilerOptions: {
  //         knownHelpersOnly: false
  //       }
  //     },
  //     files: {
  //       "public/javascripts/prebuild/templates/home.js": "public/templates/home.hbs"
  //     }
  //   }
  // },

  watch: {
      options: {
        livereload: true,
      },
      coffee: {
        files: ['public/coffee/**/*.coffee'], tasks: 'coffee'
      },
      browserify: {
        files: ['public/javascripts/prebuild/**/*.js'], tasks: 'browserify'
      },
      sass: {
        files: ['public/sass/**/*.scss'], tasks: 'sass'
      }
      // hbs: {
      //   files: ['public/templates/**/*.hbs'], tasks: 'handlebarsify'
      // }
    }
  });
  

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-handlebarsify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['sass','concat','coffee','browserify']);

};
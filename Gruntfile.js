module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    handlebars: {
	    all: {
	        files: {
	            "js/templates.js": ["templates/**/*.hbs"]
	        }
	    }
	},
	bower: {
		install: {

		}
	},
	uglify: {
		target: {
	  		files:[{
					expand: true,
			  		src: 'js/*.js',
			  		dest: 'js/dist',
			  		ext: '.min.js'
		    }]
		}
  	},
  	concat: {
  		options: {
      		separator: ';\n',
    	},
	    models: {
	      	src: ['js/models/**/*.js'],
	      	dest: 'js/models.js'
	    },
	    collections: {
	      	src: ['js/collections/**/*.js'],
	      	dest: 'js/collections.js'
	    },
	    views: {
	      	src: ['js/views/**/*.js'],
	      	dest: 'js/views.js'
	    },
  	}
  });

  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('init', ['bower', 'handlebars', 'concat', 'uglify']);
  grunt.registerTask('default', ['handlebars', 'concat', 'uglify:myjs']);

};

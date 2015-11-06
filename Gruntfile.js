module.exports = function(grunt) {

    // CONFIGURATION 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		
		concat: {
			options: {
				separator: ";/******Next Script*****/"
			},
            vendor: {
				src: 'dist/js/vendor/*.js', // All JS in the vendor folder
				dest: 'dist/js/vendor.min.js',
			},
			custom: {
				src: 'src/js/*.js',  // All custom JS
				dest: 'dist/js/main.js',
			}
        },
		
		uglify: {
			build: {
				src: 'dist/js/main.js',
				dest: 'dist/js/main.min.js'
			}
		},
		
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'dist/css/main.css': 'src/scss/main.scss'
				}
			} 
		},
		
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'src/images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'dist/resources/images/'
				}]
			}
		},
		
		watch: {
			scripts: {
				files: ['src/js/*.js', 'src/scss/*.scss'],
				tasks: ['concat', 'uglify', 'sass'],
				options: {
					spawn: false,
				},
			} 
		}

    });

    // NPM PACKAGES
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');

    // GRUNT TASKS
    grunt.registerTask('default', ['concat', 'uglify', 'sass', 'imagemin', 'watch']);

};
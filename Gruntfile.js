module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            js: {
				src: [
					'dist/js/vendor/*.js', // All JS in the vendor folder
					'src/js/*.js'  // All custom JS
				],
				dest: 'dist/js/main.js',
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
		}

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'sass']);

};
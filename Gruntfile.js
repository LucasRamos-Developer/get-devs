module.exports = function(grunt) {
	grunt.initConfig({
		copy: {
			public: {
				expand: true,
				cwd: 'dev',
				src: '**',
				dest: 'dist'
			}
		},
		clean: {
			dist: {
				src: 'dist'
			}
		},
		useminPrepare: {
			html: 'dist/**/*.html'
		},
		usemin: {
			html: 'dist/**/*.html'
		},
		imagemin: {
			public: {
				expand: true,
				cwd: 'dist/images',
				src: '**/*.{png,jpg,gif}',
				dest: 'dist/images',
			}
		},
		rev: {
			options: {
			  	encoding: 'utf8',
			  	algorithm: 'md5',
			  	length: 8
			},
			imagens: {
				src: ['dist/imagems/**/*.{png,jpg,gif}']
			},
			minificados: {
				src: ['dist/js/**/*.min.js', 'dist/js/**/*.min.css']
			}
		},
		react: {
			compilar: {
				expand: true,
				cwd: 'dev/jsx',
				src: ['**/*.jsx'],
				dest: 'dev/js',
				ext: '.js'
			}
		},
		jshint: {
			js: {
				src: ['dev/js/**/*.js']
			}
		},
		watch: {
			js: {
				options: {
					event: [ 'changed']
				},
				files: 'dev/js/**/*.js',
				tasks: ['jshint:js']
			},
			react: {
				options: {
					event: ['added', 'changed']
				},
				files: 'dev/jsx/**/*.less',
				tasks: ['react:compilar']
			}
		},
		browserSync: {
			public: {
				bsFiles: {
					watchTask: true,
					src: ['dev/**/*']
				},
				options: {
					server: {
						baseDir: 'dev'
					}
				}
			}
		}
	});

	//Registra Task personalizadas para serem usadas no grunt
	grunt.registerTask('server', ['watch', 'browserSync']); // Executa o serviço de sicronia e monitoramento
	grunt.registerTask('dist', ['clean', 'copy']); //apaga e copia a pasta dist
	grunt.registerTask('minifica', ['useminPrepare', 'concat', 'uglify', 'cssmin', 'rev', 'usemin']);

	grunt.registerTask('default', ['dist', 'minifica', 'imagemin']); //sobrescreve o comando default do grunt para realizar a task dist


	// Carrega os plugins/task do Grunt 
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-usemin');
	grunt.loadNpmTasks('grunt-rev');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-react');
}
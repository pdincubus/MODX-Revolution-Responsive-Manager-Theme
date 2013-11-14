/*global module:false*/
module.exports = function(grunt) {

/*----------------------------------------------------
*      Project config
*----------------------------------------------------*/
    grunt.initConfig({
/*----------------------------------------------------
*      Metadata
*----------------------------------------------------*/
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

/*----------------------------------------------------
*      Tasks
*----------------------------------------------------*/

        /*----------------------------------------------------
        *      Concatenate
        *----------------------------------------------------*/
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },

            styles: {
                src: ['src/<%= pkg.version %>/css/style.min.css','src/<%= pkg.version %>/css/font-awesome.min.css'],
                dest: 'dist/<%= pkg.version %>/css/style.min.css'
            },

            main: {
                src: ['src/<%= pkg.version %>/js/lib/jquery-1.10.2.min.js',
                'src/<%= pkg.version %>/js/lib/selectivizr-min.js',
                'src/<%= pkg.version %>/js/lib/plugins.js',
                'src/<%= pkg.version %>/js/main.js'],
                dest: 'src/<%= pkg.version %>/js/script.js'
            },

            head: {
                src: ['src/<%= pkg.version %>/js/lib/modernizr-2.6.2.min.js'],
                dest: 'src/<%= pkg.version %>/js/head.js'
            }
        },

        /*----------------------------------------------------
        *      uglify javascripts
        *----------------------------------------------------*/

        uglify: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },

            main: {
                src: '<%= concat.main.dest %>',
                dest: 'dist/<%= pkg.version %>/js/main.min.js'
            },

            head: {
                src: '<%= concat.head.dest %>',
                dest: 'dist/<%= pkg.version %>/js/head.min.js'
            }
        },

        /*----------------------------------------------------
        *      Minify CSS files
        *----------------------------------------------------*/

        cssmin: {
            options: {
                stripBanners: true
            },

            dist: {
                src: 'src/<%= pkg.version %>/css/style.css',
                dest: 'src/<%= pkg.version %>/css/style.min.css'
            }
        },

        /*----------------------------------------------------
        *      Compile LESS files
        *----------------------------------------------------*/

        less: {
            options: {
                stripBanners: true
            },

            dist: {
                src: 'src/<%= pkg.version %>/less/style.less',
                dest: 'src/<%= pkg.version %>/css/style.css'
            }
        },

        /*----------------------------------------------------
        *      Lint LESS files
        *----------------------------------------------------*/

        lesslint: {
            options: {
                imports: ['src/<%= pkg.version %>/less/**/*.less']
            },

            src: ['src/<%= pkg.version %>/less/style.less'],
        },

        /*----------------------------------------------------
        *      CSS Lint options for LESS Lint
        *----------------------------------------------------*/

        csslint: {
            options: {
                'unique-headings': false,
                'universal-selector': false,
                'unqualified-attributes': false,
                'outline-none': false,
                'compatible-vendor-prefixes': false,
                'important': false,
                'adjoining-classes': false,
                'qualified-headings': false,
                'ids': false,
                'star-property-hack': false,
                'box-sizing': false,
                'box-model': false
            }
        },

        /*----------------------------------------------------
        *      Minify HTML
        *----------------------------------------------------*/

        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeRedundantAttributes: true
                },

                files: {
                    'dist/<%= pkg.version %>/index.html': 'src/<%= pkg.version %>/index.html'
                }
            }
        },

        /*----------------------------------------------------
        *      Copy required files
        *----------------------------------------------------*/

        copy: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/<%= pkg.version %>/',
                    src: ['img/*', 'fonts/*'],
                    dest: 'dist/<%= pkg.version %>/'
                }]
            }
        },

        /*----------------------------------------------------
        *      Watch task.
        *----------------------------------------------------*/

        watch: {
            less: {
                files: ['src/<%= pkg.version %>/less/style.less',
                'src/<%= pkg.version %>/less/media/media-large-desktop.less',
                'src/<%= pkg.version %>/less/media/media-hi-dpi.less',
                'src/<%= pkg.version %>/less/media/media-mobile.less',
                'src/<%= pkg.version %>/less/media/media-small-desktop.less',
                'src/<%= pkg.version %>/less/media/media-tablet.less'],
                tasks: ['compile','lint','minifycss','combine']
            },

            js: {
                files: ['src/<%= pkg.version %>/js/main.js', 'src/<%= pkg.version %>/js/lib/plugins.js'],
                tasks: ['combine','uglifyjs']
            },

            html: {
                files: ['src/<%= pkg.version %>/index.html'],
                tasks: ['minifyhtml']
            },

            img: {
                files: ['src/<%= pkg.version %>/img/*','src/<%= pkg.version %>/fonts/*'],
                tasks: ['files']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-lesslint');

    // Default task.
    grunt.registerTask('files', ['copy']);
    grunt.registerTask('compile', ['less']);
    grunt.registerTask('lint', ['lesslint']);
    grunt.registerTask('minifycss', ['cssmin']);
    grunt.registerTask('combine', ['concat']);
    grunt.registerTask('minifyhtml', ['htmlmin']);
    grunt.registerTask('uglifyjs', ['uglify']);
    grunt.registerTask('default', ['files','compile','lint','minifycss','minifyhtml','combine','uglifyjs','watch']);
};

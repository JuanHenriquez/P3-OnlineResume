(function(){

    'use strict';

    // Requires.
    var gulp = require('gulp'),
        gulpSass = require('gulp-sass'),
        rename = require('gulp-rename'),
        uglify = require('gulp-uglify'),
        cleanCSS = require('gulp-clean-css');

    /*
    * TASKS
    */


    /* Compile Sass Files. */
    gulp.task('compileSass', function(){
        return gulp.src('dist/css/*.scss')
            .pipe(gulpSass().on('error', gulpSass.logError))
            .pipe(gulp.dest('./dist/css'));
    });

    /* Minify Css Files */
    gulp.task('minifyCss', ['compileSass'] ,function(){
        return gulp.src('dist/css/style.css')
            .pipe(cleanCSS({debug: true}, function(details){
                console.log("The file " + details.name + "(" +  details.stats.originalSize + "kb)" + " has been compresed to " + details.stats.minifiedSize + "kb");
            }))
            .pipe(rename('style.min.css'))
            .pipe(gulp.dest('./dist/css'));
    });

    /* Minify Js Files  */
    gulp.task('minifyJs', function(){
        return gulp.src('dist/js/resumeBuilder.js')
            .pipe(uglify())
            .pipe(rename('resumeBuilder.min.js'))
            .pipe(gulp.dest('./dist/js'))
    });

    /* Add vendor files to dist */
    gulp.task('update-files', function(){

        /* Add Roboto font and Material Icons */
        gulp.src('bower_components/Materialize/font/**')
            .pipe(gulp.dest('./dist/font/'));

        /* Add materialize.css */
        gulp.src('bower_components/Materialize/sass/materialize.scss')
            .pipe(gulpSass().on('error', gulpSass.logError))
            .pipe(cleanCSS({debug: true}, function(details){
                console.log("The file " + details.name + "(" +  details.stats.originalSize + "kb)" + " has been compresed to " + details.stats.minifiedSize + "kb");
            }))
            .pipe(rename('materialize.min.css'))
            .pipe(gulp.dest('./dist/css'));

        /* Add materialize.js */
        gulp.src('bower_components/Materialize/dist/js/materialize.min.js')
            .pipe(gulp.dest('./dist/js'));

        /* Add jquery */
        gulp.src('bower_components/jquery/dist/jquery.min.js')
            .pipe(gulp.dest('./dist/js'));

        /* Add Shuffle.js */
        gulp.src('bower_components/shufflejs/dist/jquery.shuffle.min.js')
            .pipe(gulp.dest('./dist/js'));

        /* Add Modernizr.js */
        gulp.src('bower_components/modernizr/modernizr.js')
            .pipe(uglify())
            .pipe(rename('modernizr.min.js'))
            .pipe(gulp.dest('./dist/js'));
    });



    gulp.task('watch', function(){
        gulp.watch('dist/css/*.scss', ['compileSass', 'minifyCss']);
        gulp.watch('dist/js/resumeBuilder.js', ['minifyJs']);
    });


})();

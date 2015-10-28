'use strict';
import gulp        from 'gulp';
import browserify  from 'browserify';
import babelify    from 'babelify';
import riotify     from 'riotify';
import source      from 'vinyl-source-stream';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import jade        from 'gulp-jade';
import compass     from 'gulp-compass';

const paths = {
  js:       ['src/js/**/*.js', 'src/js/**/*.jade'],
  jade:     'src/jade/**/*.jade',
  sass:     'src/sass/**/*.scss',
  resource: 'resources/**/*',
  sass_dir: 'src/sass/',
  css_dir:  'dist/css/',
  js_dir:   'dist/js/',
  dist_dir: 'dist/'
};

// Server Settings
gulp.task('server', () => {
  browserSync({
    server: {
      baseDir: paths.dist_dir
    }
  });
});

// Compass
gulp.task('compass', () => {
  return gulp.src(paths.sass)
      .pipe(compass({
        config_file: 'config.rb',
        comments: false,
        css: paths.css_dir,
        sass: paths.sass_dir
      }));
});

// Browserify
// ES6 + Riot.js
gulp.task('browserify', () => {
  return browserify('src/js/app.js') // write your application root file name.
    .transform(babelify)
    .transform(riotify, {
      compact: true,
      template: 'jade',
      type: 'es6',
      ext: 'jade'
    })
    .bundle()
    .pipe(source('app.js')) // write output file name.
    .pipe(gulp.dest(paths.js_dir));
});

// Jade
gulp.task('jade', () => {
  return gulp.src(paths.jade)
    .pipe(jade())
    .pipe(gulp.dest(paths.dist_dir));
});

// Copy Resources
gulp.task('copy', () => {
  return gulp.src(paths.resource)
    .pipe(gulp.dest(paths.dist_dir));
});

// Watch Jade Files
gulp.task('jade-reload', ['jade'], () => {
  browserSync.reload();
});

// Watch Riot Files
gulp.task('riot-reload', ['browserify'], () => {
  browserSync.reload();
});

// Watch Sass Files
gulp.task('sass-reload', ['compass'], () => {
  browserSync.reload();
});

// Default Task
gulp.task('default', () => {
  runSequence(['browserify', 'compass', 'jade', 'copy'], 'server');
  gulp.watch(paths.jade, ['jade-reload']);
  gulp.watch(paths.js, ['riot-reload']);
  gulp.watch(paths.sass, ['sass-reload']);
});
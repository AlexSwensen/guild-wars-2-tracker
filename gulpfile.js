var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var inject = require('gulp-inject');

var paths = {
  sass: ['./scss/**/*.scss'],
  css:  ['./www/assets/css/'],
  img:  ['./www/assets/img/*']
};

gulp.task('default', ['sass', 'inject']);

// (mostly) default Ionic gulp tasks. Modified to work with the changed project structure.

gulp.task('sass', function (done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/assets/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('./www/assets/css/'))
    .on('end', done);
});

gulp.task('watch', function () {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function () {
  return bower.commands.install()
    .on('log', function (data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function (done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

// Begin custom gulp tasks

gulp.task('inject', function () {
  var target = gulp.src('./www/index.html');
  var sources = gulp.src('./www/app/**/*.js', {read: false});
  return target.pipe(inject(sources, {relative: true}))
    .pipe(gulp.dest('./www'));
});

gulp.task('image-min', function (done) {
  return gulp.src('images/**.*')
    .pipe(imagemin({
      progressive:       true,
      optimizationLevel: 3,
      svgoPlugins:       [{removeViewBox: false}],
      use:               [pngquant()]
    }))
    .pipe(gulp.dest('www/assets/img'));
});

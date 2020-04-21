let gulp          = require('gulp');
let browserSync   = require('browser-sync').create();
let $             = require('gulp-load-plugins')();
let autoprefixer  = require('autoprefixer');
let template = require('gulp-template-html');

let sassPaths = [
  'node_modules/foundation-sites/scss',
  'node_modules/motion-ui/src'
];

function sass() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
      .on('error', $.sass.logError))
    .pipe($.postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream());
};

function serve() {
  browserSync.init({
    server: "./dist/"
  });

  gulp.watch("scss/*.scss", sass);
  gulp.watch("*.html").on('change', browserSync.reload);
}

function html(){
	    return gulp.src('content/*.html')
      .pipe(template('templates/template.html'))
      .pipe(gulp.dest('dist'));
}

gulp.task('sass', sass);
gulp.task('html', html);
gulp.task('serve', gulp.series('sass', 'html', serve));
gulp.task('default', gulp.series('sass', 'html'));

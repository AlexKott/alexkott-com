const gulp = require('gulp');

const browserify = require('browserify');
const babelify = require('babelify');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');

const eslint = require('gulp-eslint');

const less = require('gulp-less');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({ remove: false, browsers: ['>5%'] });

const livereload = require('gulp-livereload');
/********************/

gulp.task('default', ['browserify', 'lint', 'less']);

gulp.task('w', ['browserify', 'lint', 'less'], () => {
    livereload.listen();
    gulp.watch('src/js/**/**/*.js', ['browserify', 'lint']);
    gulp.watch('src/less/**/*.less', ['less']);
    gulp.watch('src/hbs/**/*.hbs', ['livereload']);
});

gulp.task('browserify', () => {
    return browserify('src/js/index.js', { debug: true })
        .transform(babelify, { presets: ['es2015'] })
        .bundle()
        .pipe(source('script.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./dist'))
        .pipe(livereload());
});

gulp.task('lint', () => {
    return gulp.src('src/js/**/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('less', () => {
    return gulp.src('src/less/main.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(livereload());
});

gulp.task('livereload', () => {
    return gulp.src('')
        .pipe(livereload());
})

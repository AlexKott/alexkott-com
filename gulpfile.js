const gulp = require('gulp');

const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gulpIf = require('gulp-if');

const browserify = require('browserify');
const babelify = require('babelify');
const eslint = require('gulp-eslint');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

const less = require('gulp-less');
const cssNano = require('gulp-cssnano');

const livereload = require('gulp-livereload');
/********************/

const isProduction = process.env.NODE_ENV === 'production';

gulp.task('default', ['copy', 'browserify', 'lint', 'less']);

gulp.task('w', ['copy', 'browserify', 'lint', 'less'], () => {
    livereload.listen();
    gulp.watch('src/js/**/**/*.js', ['browserify', 'lint']);
    gulp.watch('src/less/**/*.less', ['less']);
    gulp.watch('src/hbs/**/*.hbs', ['livereload']);
});

gulp.task('browserify', () => {
    return browserify('src/js/index.js', { debug: !isProduction })
        .transform(babelify, { presets: ['es2015'] })
        .bundle()
        .pipe(source('script.js'))
        .pipe(buffer())
        .pipe(gulpIf(!isProduction, sourcemaps.init({ loadMaps: !isProduction })))
        .pipe(gulpIf(isProduction, uglify()))
        .pipe(gulpIf(!isProduction, sourcemaps.write('./')))
        .pipe(gulp.dest('./dist'))
        .pipe(gulpIf(!isProduction, livereload()));
});

gulp.task('lint', () => {
    return gulp.src('src/js/**/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('less', () => {
    return gulp.src('src/less/style.less')
        .pipe(less())
        .pipe(gulpIf(isProduction, cssNano({
            autoprefixer: { remove: false, browsers: ['>5%'] },
            discardComments: { removeAll: true }
        })))
        .pipe(gulp.dest('./dist'))
        .pipe(livereload());
});

gulp.task('copy', () => {
    return gulp.src('assets/**/*')
        .pipe(gulp.dest('./dist'));
});

gulp.task('livereload', () => {
    return gulp.src('')
        .pipe(livereload());
})

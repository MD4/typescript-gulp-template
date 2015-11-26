var gulp = require('gulp');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var typedoc = require('gulp-typedoc');
var mocha = require('gulp-mocha');
var ts = require('gulp-typescript');
var tsd = require('gulp-tsd');
var clean = require('gulp-clean');

var runSequence = require('run-sequence');

var browserify = require('browserify');
var tsify = require('tsify');

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var name = 'template';

gulp.task('build', function () {
    var bundler = browserify({
        basedir: '.',
        "declaration": true,
        "module": "amd",
        "target": "es5",
        "noImplicitAny": true
    })
        .add('src/' + name + '.ts')
        .plugin(tsify);

    return bundler
        .bundle()
        .pipe(source(name + '.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('build:test', function () {
    return gulp.src('test/**/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            "module": "umd",
            "target": "es5"
        }))
        .pipe(gulp.dest('test'));
});

gulp.task('typedoc', function () {
    return gulp
        .src(['src/**/*.ts'])
        .pipe(typedoc({
            module: 'commonjs',
            target: 'es5',
            out: './doc',
            name: name
        }));
});


gulp.task('mocha', function () {
    return gulp.src('test/**/*.js', {read: false})
        .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('tsd', function (callback) {
    tsd(
        {
            command: 'reinstall',
            config: './tsd.json'
        },
        callback
    );
});

gulp.task('clean', function () {
    return gulp.src([
            'dist',
            'test/**/*.js',
            'doc'
        ], {read: false})
        .pipe(clean());
});

gulp.task('clean:all', function () {
    return gulp.src([
            'dist',
            'test/**/*.js',
            'doc',
            'node_modules',
            'typings'
        ], {read: false})
        .pipe(clean());
});

gulp.task('default', function () {
    return gulp.watch('src/**/*.ts', ['build']);
});


gulp.task('install', function (callback) {
    runSequence(
        'tsd',
        callback
    );
});

gulp.task('dist', function (callback) {
    runSequence(
        'clean', 'test', 'typedoc', 'build',
        callback
    );
});

gulp.task('test', function (callback) {
    runSequence(
        'build:test', 'mocha',
        callback
    );
});
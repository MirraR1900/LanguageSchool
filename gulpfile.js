var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var del = require('del');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

function scssCon(done) {
    return gulp.src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream());
    done();
}

function syncBr(done) {
    browserSync.init({
       server: {
           baseDir: "app"
       },
       port: 3000 
    });
    done();
}

function browserReload(done) {
    browserSync.reload();
    done();
}

function clean(done) {
    return del.sync('dist');
    done();
}

function img(done) {
    return gulp.src('app/images/**/*')
    .pipe(imagemin({
        interlaced: true,
        progressive: true, 
        svgoPlugins: [{removeViewBox: false}],
        une: [pngquant]
    }))
    .pipe(gulp.dest('dist/images'));
    done();
} 

function watchFiles() {
    gulp.watch('app/scss/**/*.scss', scssCon);
    gulp.watch('app/**/*.html', browserReload);
    gulp.watch('app/**/*.js', browserReload);
}

function build(done) {
    gulp.src('app/css/*.css')
    .pipe(gulp.dest('dist/css'));
    gulp.src('app/js/*.js')
    .pipe(gulp.dest('dist/js'));
    gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
    gulp.src('app/html/*.html')
    .pipe(gulp.dest('dist/html'));
    done();
}

gulp.task('default', gulp.parallel(syncBr, watchFiles, clean, build, img));
gulp.task(syncBr);
gulp.task(clean);
const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');

const tsProjerct = ts.createProject('tsconfig.json');

gulp.task('script', ['static'], () => {
    const tsResult = tsProjerct.src()
        .pipe(tsProjerct());

       return tsResult.js
            .pipe(gulp.dest('dist'));
    });

gulp.task('static' , ['clean'] ,() => {

    return gulp
        .src(['src/**/*.json'])
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {

    return gulp
        .src('dist')
        .pipe(clean());
});

gulp.task('build', ['script'])

gulp.task('watch', ['build'], () => {
    return gulp.watch(['src/**/*.ts', 'src/**/*.json'], ['build']);
})

gulp.task('default', ['watch']);
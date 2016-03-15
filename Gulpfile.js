var gulp = require('gulp');
var htmlReplace = require('gulp-html-replace');

gulp.task('html', function () {
    return gulp.src(['index.html'])
        .pipe(htmlReplace({
            js: 'app.js'
        }))
	.pipe(gulp.dest('dist'));
});
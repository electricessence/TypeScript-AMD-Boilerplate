var gulp = require('gulp');
var shell = require('gulp-shell');
var typescript = require('gulp-tsc');


gulp.task('bower-install', shell.task([
    'bower install'
]));

gulp.task('typescript', function () {
    return gulp.src('source/**/*.ts')
      .pipe(typescript({ target: 'es5', module: 'amd', sourcemap: true }))
      .pipe(gulp.dest('./build'));
});

gulp.task('copy-native-js-source', function() {
    gulp.src('source/**/*.js')
      .pipe(gulp.dest('./build'));
});

gulp.task('compile', ['bower-install'], function() {
    gulp.run('typescript');
    gulp.run('copy-native-js-source')
});


gulp.task('default', ['compile'], function() {
    console.log("All done");
});
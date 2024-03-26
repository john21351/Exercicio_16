const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');


function MudaCss () {
    return gulp.src('./sass/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./DIST/css'));

} 
function Minijs () {
    return gulp.src('./js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('./DIST/js'))
}

function ReduzImg () {
    return gulp.src('./imagens/*')
    .pipe(imagemin())
        .pipe(gulp.dest('./DIST/img'))
}

/*exports.sass = MudaCss;
exports.uglify = Minijs;
exports.imagemin = ReduzImg;*/

exports.Agoravai = gulp.series(MudaCss, Minijs, ReduzImg);
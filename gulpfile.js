const { src, dest, series, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function build() {
    return src('src/Sass/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['src/app/**/*.jsx'] }))
    .pipe(dest('src/app/css'))
}

function watchSass() {
    watch(['src/Sass/*.scss', 'src/app/**/*.jsx'], build)
}

exports.default = series(build, watchSass)


'use strict';

/* Require */
const autoprefixer = require('autoprefixer');
const gulp = require('gulp');
const gulpPostCss = require('gulp-postcss');
const plumber = require('gulp-plumber');
const postcssDiscardDuplicates = require('postcss-discard-duplicates');
const postcssDiscardEmpty = require('postcss-discard-empty');
const postcssRoundSubpixels = require('postcss-round-subpixels');
const sass = require('gulp-sass');
const sassLint = require('gulp-sass-lint');
const sourceMaps = require('gulp-sourcemaps');

/* Configs */
const supportedBrowsers = 'last 3 versions';
const scssMain = ['src/scss/main.scss'];
const scssSources = ['src/scss/**/*.scss'];

/* Tasks */
gulp.task('scss-prod', function () {
  return gulp.src(scssMain)
    .pipe(plumber())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed',
    }))
    .pipe(gulpPostCss([
      autoprefixer({
        browsers: supportedBrowsers,
      }),
      postcssDiscardDuplicates,
      postcssDiscardEmpty,
      postcssRoundSubpixels,
    ]))
    .pipe(plumber.stop())
    .pipe(gulp.dest('public/css'));
});
gulp.task('scss-dev', function () {
  return gulp.src(scssSources)
    .pipe(plumber())
    .pipe(sourceMaps.init())
    .pipe(sassLint({
      config: '.sass-lint.yml',
    }))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compact',
    }))
    .pipe(gulpPostCss([
      autoprefixer({
        browsers: supportedBrowsers,
      }),
      postcssRoundSubpixels,
    ]))
    .pipe(sourceMaps.write())
    .pipe(plumber.stop())
    .pipe(gulp.dest('public/css'));
});
gulp.task('watch-scss', function () {
  gulp.watch(scssMain, ['scss-dev']);
  gulp.watch(scssSources, ['scss-dev']);
});
gulp.task('default', ['watch-scss']);

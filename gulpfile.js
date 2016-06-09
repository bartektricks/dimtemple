/**
 * @license Copyright (c) 2015-present, Absolvent.pl
 * For licensing, see LICENSE
 */

'use strict';

const autoprefixer = require('autoprefixer');
const browsersync = require('browser-sync');
const fs = require('fs');
const gulp = require('gulp');
const gulpPostCss = require('gulp-postcss');
const plumber = require('gulp-plumber');
const postcssDiscardDuplicates = require('postcss-discard-duplicates');
const postcssDiscardEmpty = require('postcss-discard-empty');
const postcssFlexbugsFixes = require('postcss-flexbugs-fixes');
const postcssFocus = require('postcss-focus');
const postcssRoundSubpixels = require('postcss-round-subpixels');
const postcssVmin = require('postcss-vmin');
const sass = require('gulp-sass');
const supportedBrowsers = 'last 3 versions';
const reload = browsersync.reload;

gulp.task('scss', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass({
      errLogToConsole: true,
      outputStyle: 'compressed'
    }))
    .pipe(gulpPostCss([
      autoprefixer({
        browsers: supportedBrowsers
      }),
      postcssDiscardDuplicates,
      postcssDiscardEmpty,
      postcssRoundSubpixels,
      postcssFlexbugsFixes,
      postcssFocus,
      postcssVmin
    ]))
    .pipe(plumber.stop())
    .pipe(gulp.dest('./css'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('watch', function () {
  gulp.watch('./scss/**/*.scss', ['scss']);
  gulp.watch([
    './index.html'
  ], ['scss']);
});

gulp.task("serve", ["watch"], function () {
  browsersync({
    "server": "./"
  });

  gulp.watch("./css/*.css").on("change", reload);
  gulp.watch("./*.html").on("change", reload);
});

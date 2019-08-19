const gulp = require('gulp');
const scripts = require('./build/scripts');
const images = require('./build/images');
const sync = require('./build/browsersync');

[scripts, images, sync].forEach(task => {
  task(gulp);
});

gulp.task('build', ['scripts', 'images', 'jekyll-build']);

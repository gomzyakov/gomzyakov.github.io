const gulp = require('gulp');
const images = require('./build/images');
const sync = require('./build/browsersync');

[images, sync].forEach(task => {
  task(gulp);
});

gulp.task('build', ['images', 'jekyll-build']);

import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import autoprefixer from 'autoprefixer';
// https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md
import browserify from 'browserify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import stylus  from 'gulp-stylus';
import rupture from 'rupture';
import prefixer from 'autoprefixer-stylus';
import koutoSwiss from 'kouto-swiss';

const $ = loadPlugins();
const bs = browserSync.create();

let b = browserify({
  entries: ['./app/scripts/app.js'],
  debug: true
}, watchify.args);

// only watch for changes in development mode
if (process.env.GULP_ENV !== 'production') {
  b = watchify(b);
}

function bundle() {
  return b.bundle()
    .on('error', (msg) => {
      delete msg.stream;
      $.util.log(msg);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('.tmp/scripts'))
    .pipe(bs.stream({once: true}));
}

gulp.task('scripts', bundle);
b.on('update', bundle);

gulp.task('lint', () => {
  return gulp.src([{
    'app/scripts/**/*.js',
    'test/**/*.js'
  }])
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});

gulp.task('styles', () => {
  return gulp.src('app/styl/app.styl')
    .pipe($.plumber())
    .pipe(stylus({
      use:[koutoSwiss(), jeet(), rupture(), prefixer()],
      compress: true
    }))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(bs.stream());
});

gulp.task('connect:dev', ['scripts', 'views', 'styles'], (done) => {
  bs.init({
    notify: false,
    port: 9000,
    open: false,
    server: {
      // the order is important, this way files in .tmp
      // will get precedence in case of a name clash
      baseDir: ['.tmp', 'app']
    }
  }, done);
});

gulp.task('watch:dev', ['connect:dev'], () => {
  gulp.watch([
<% if (includeAngular) { -%>
    'app/index.html',
<% } -%>
    'app/images/**/*'
  ]).on('change', bs.reload);

  gulp.watch('app/styles/**/*.scss', ['styles']);
});

gulp.task('serve:dev', ['connect:dev', 'watch:dev']);
/* eslint-disable indent */
/* eslint-disable no-undef */
const gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  browserSync = require("browser-sync").create();

// compile scss to css

function generateCSS() {
  // where my scss files are generated
  return (
    gulp
      .src("./style/**/*.scss")
      //   pass file through sass compiler
      .pipe(sass().on("error", sass.logError))
      //   where do i save compiled sass
      .pipe(gulp.dest("./css"))
      //   for stream changes for all browsers
      .pipe(browserSync.stream())
  );
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./style/**/*.scss", generateCSS);
  // .on is on change
  gulp.watch("*.html").on("change", browserSync.reload);
  gulp.watch("./scripts/*.js").on("change", browserSync.reload);
}

exports.generateCSS = generateCSS;
exports.watch = watch;

// // gulp-eslint
// // gulp-awspublish
// // gulp-nodemon
// // gulp-live-server

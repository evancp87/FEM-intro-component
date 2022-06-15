const gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  concat = require("gulp-concat"),
  jshint = require("gulp-jshint"),
  autoprefixer = require("gulp-autoprefixer");

gulp.task("styles", function () {
  return gulp
    .src("styles/*.scss")
    .pipe(
      sass({
        "sourcemap=none": true,
      })
    )
    .pipe(concat("style.css"))
    .pipe(
      autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9", "opera 12.1")
    )
    .pipe(gulp.dest("styles/"));
});

gulp.task("jshint", function () {
  return gulp.src("scripts/*js").pipe(jshint());
});

gulp.task("jshint", function () {
  return gulp.src("scripts/*js").pipe(jshint());
});

gulp.task("watch", function () {
  gulp.watch("styles/*.scss", gulp.series("styles"));
  gulp.watch("scripts/*.js", gulp.series("jshint"));
});

gulp.task("default", ["styles", "jshint", "watch"]);

// gulp-eslint
// gulp-awspublish
// gulp-nodemon
// gulp-live-server

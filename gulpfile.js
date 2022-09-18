/* eslint-disable indent */
/* eslint-disable no-undef */

const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const cssnano = require("cssnano");
const postcss = require("gulp-postcss");

function html() {
  return src("*.html", { sourcemaps: true }).pipe(
    dest("dist", { sourcemaps: "." })
  );
}

// compile scss to css

function generateCSS() {
  // where my scss files are generated
  return (
    src("./style/**/*.scss", { sourcemaps: true })
      //   pass file through sass compiler
      .pipe(sass().on("error", sass.logError))
      .pipe(postcss([cssnano()]))
      //   where do i save compiled sass
      .pipe(dest("dist", { sourcemaps: "." }))
      //   for stream changes for all browsers
      .pipe(browserSync.stream())
  );
}

function generateJS() {
  return src("./scripts/*.js", { sourcemaps: true }).pipe(
    dest("dist", { sourcemaps: "." })
  );
}

function generateImages() {
  return src("./images/*.{png,gif,jpg,svg}").pipe(dest("dist/images"), {
    sourcemaps: ".",
  });
}

function browserSyncServe(cb) {
  browserSync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

function browserSyncReload(cb) {
  browserSync.reload();
  cb();
}

function watchTask() {
  watch("*.html").on("change", browserSyncReload);
  watch(
    ["./scripts/*.js", "./style/**/*.scss"],
    series(generateCSS, generateJS, browserSyncReload)
  );
}

exports.build = series(
  series(generateCSS, generateJS, html, function copyAssets() {
    return src(["*.html", "./images/**/*"], { base: "/" }).pipe(dest("dist"));
  })
);

exports.default = series(
  generateCSS,
  generateJS,
  html,
  browserSyncServe,
  browserSyncReload,
  watchTask,
  generateImages
);

// const gulp = require("gulp"),
//   sass = require("gulp-sass")(require("sass")),
//   browserSync = require("browser-sync").create();

// // compile scss to css

// function generateCSS() {
//   // where my scss files are generated
//   return (
//     gulp
//       .src("./style/**/*.scss")
//       //   pass file through sass compiler
//       .pipe(sass().on("error", sass.logError))
//       //   where do i save compiled sass
//       .pipe(gulp.dest("./css"))
//       //   for stream changes for all browsers
//       .pipe(browserSync.stream())
//   );
// }

// function watch() {
//   browserSync.init({
//     server: {
//       baseDir: "./",
//     },
//   });
//   gulp.watch("./style/**/*.scss", generateCSS);
//   // .on is on change
//   gulp.watch("*.html").on("change", browserSync.reload);
//   gulp.watch("./scripts/*.js").on("change", browserSync.reload);
// }

// exports.generateCSS = generateCSS;
// exports.watch = watch;

// // gulp-eslint
// // gulp-awspublish
// // gulp-nodemon
// // gulp-live-server

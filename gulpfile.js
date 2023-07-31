const { src, dest, watch, parallel } = require("gulp");
// CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

// IMG
const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");

function css(done) {
  src("src/scss/**/*.scss") // Identificar archivo SCSS a compilar
    .pipe(plumber())
    .pipe(sass({ outputStyle: "compressed" })) // Compilarlo
    .pipe(dest("build/css/app.css")); // Almacenarlo en el disco duro

  done();
}

function imageminTask(done) {
  const options = {
    optimizationLevel: 3,
  };
  src("src/img/**/*.{png,jpg}")
    .pipe(cache(imagemin(options)))
    .pipe(dest("build/img"));

  done();
}

function webpversion(done) {
  const options = {
    quality: 50,
  };
  src("src/img/**/*.{png,jpg}").pipe(webp(options)).pipe(dest("build/img"));

  done();
}

function javascript(done) {
  src("src/JS/**/*.js").pipe(dest("build/js"));

  done();
}

function dev(done) {
  watch("src/scss/**/*.scss", css); // Observar cambios en todos los archivos .scss
  watch("src/js/**/*.js", javascript);

  done();
}

exports.css = css;
exports.js = javascript;
exports.imageminTask = imageminTask;
exports.webpversion = webpversion;
exports.dev = parallel(imageminTask, webpversion, javascript, dev);

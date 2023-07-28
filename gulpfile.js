const { src, dest } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css() {
  return src("src/scss/app.scss") // Identificar archivo CSS
    .pipe(sass()) // Compilarlo
    .pipe(dest("build/css/app.css")); // Almacenarlo en el disco duro
}

const { watch } = require("gulp");

function dev() {
  watch("src/scss/**/*.scss", css); // Observar cambios en todos los archivos .scss
}

exports.css = css;
exports.dev = dev;

const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

function css(done) {
  src("src/scss/**/*.scss") // Identificar archivo SCSS a compilar
    .pipe(plumber())
    .pipe(sass({ outputStyle: "compressed" })) // Compilarlo
    .pipe(dest("build/css/app.css")); // Almacenarlo en el disco duro

  done();
}
function dev(done) {
  watch("src/scss/**/*.scss", css); // Observar cambios en todos los archivos .scss

  done();
}

exports.css = css;
exports.dev = dev;

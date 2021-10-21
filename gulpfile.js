// Run gulp by running cmd: "gulp"
// Make sure gulp-cli is installed globally

const { src, dest, watch, series } = require("gulp");
const terser = require("gulp-terser");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const autoprefixer = require("autoprefixer");
const browsersync = require("browser-sync").create();

// Sass Task
function scssTask() {
	return src("app/scss/styles.scss", { sourcemaps: true })
		.pipe(sass())
		.pipe(postcss([cssnano(), autoprefixer()]))
		.pipe(dest("dist", { sourcemaps: "." }));
}

// Javascript Task
function jsTask() {
	return src("app/js/script.js", { sourcemaps: true })
		.pipe(terser())
		.pipe(dest("dist", { sourcemaps: "." }));
}

// Browsersync Tasks
function browsersyncServe(cb) {
	browsersync.init({
		server: {
			baseDir: ".",
		},
	});
	cb();
}

function browsersyncReload(cb) {
	browsersync.reload();
	cb();
}

// Watch Task
function watchTask() {
	watch("*.html", browsersyncReload);
	watch(
		["app/scss/**/*.scss", "app/js/**/*.js"],
		series(scssTask, jsTask, browsersyncReload)
	);
}

// Default Gulp Task
exports.default = series(scssTask, jsTask, browsersyncServe, watchTask);

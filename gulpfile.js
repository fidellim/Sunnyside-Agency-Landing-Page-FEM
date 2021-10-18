// Run gulp by running cmd: "gulp"
// Make sure gulp-cli is installed globally

const { src, dest, watch, series } = require("gulp");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();

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
	watch(["app/js/**/*.js"], series(jsTask, browsersyncReload));
}

// Default Gulp Task
exports.default = series(jsTask, browsersyncServe, watchTask);

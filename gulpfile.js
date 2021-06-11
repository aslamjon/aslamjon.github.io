// const { src, dest, watch} = require('gulp');
// const minifyJs = require('gulp-uplify');
// const sourceMaps = require('gulp-sourcemaps');
// const concat = require('gulp-concat');

// const jsFiles = ['./js/main.js', './js/project.js']
// const bundleJs = () => {
//     return src('./js/**/*.js') // all files
//     // return src(jsFiles) // specific files
//     .pipe(sourceMaps.init())
//     .pipe(minifyJs())
//     .pipe(concat('bundle.js')) // for single file
//     .pipe(sourceMaps.write())
//     .pipe(dest('./minify/js/')); // minify folder
// }
// const devWatch = () => {
//     watch('./js/**/*.js', bundleJs);
// }
// // for css
// const minifyCss = require('gulp-clean-css');
// const cssFiles = ['./css/styel.css', './bootstrap.js']
// const bundleCss = () => {
//     // return src(cssFiles) // specific files
//     return src('./css/**/*.css')
//     .pipe(sourceMaps.init())
//     .pipe(minifyCss())
//     .pipe(concat('bundle.css')) // for single file
//     .pipe(sourceMaps.write())
//     .pipe(dest('./minify/css/'));
// }

// const devWatchCss = () => {
//     watch('./css/**/*.css', bundleCss);
// }

// // for sass
// const compileSass = require('gulp-sass');

// compileSass.compiler = require('node-sass');

// const bundleSass = () => {
//     return src('./scss/**/*.scss')
//     .pipe(sourceMaps.init())
//     .pipe(compileSass().on('error', compileSass.logError))
//     .pipe(minifyCss())
//     .pipe(sourceMaps.write())
//     .pipe(concat('bundle.css')) // single file
//     .pipe(dest('./minify/css/'))
// }
// const devWatchSass = () => {
//     watch('./scss/**/*.scss', bundleSass)
// }
// exports.bundleJs = bundleJs; // run (gulp bundleJs)
// exports.devWatch = devWatch; // run and watch (gulp devWatch)
// exports.bundleCss = bundleCss; // run  (gulp bundleCss)
// exports.devWatchCss = devWatchCss // run and watch (gulp devWatchCss)

// exports.bundleSass = bundleSass; // run (gulp bundleSass)
// exports.devWatchSass = devWatchSass; // run and watch (gulp devWatchSass)

///////////////////////////////////////////////
const gulp = require('gulp');
// const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const { src, series, parallel, dest, watch } = require('gulp');

const jsPath = 'js/**/*.js';
const cssPath = 'css/**/*.css';
// Paths
var paths = {
	root: {
		html: 'index.html',
		htmlMin: 'index.min.html',
	},
	public: {
		www: 'public',
	},
	src: {
		root: 'public/src',
		html: 'public/src/*.html',
		htmlMin: 'public/src/index.min.html',
		css: 'public/src/css/*.css',
		js: 'public/src/js/*.js',
		// vendors: 'public/src/vendors/**/*.*',
		// imgs: 'public/src/img/**/*.+(png|jpg|gif|svg)',
		imgs: 'public/src/img/**/*.{jpg,png}',
		scss: 'public/src/scss/**/*.scss',
	},
	dist: {
		root: 'public/assets',
        html: './',
		css: 'public/assets/css',
		js: 'public/assets/js',
		imgs: 'public/assets/imgs',
		// imgs: 'public/dist/imgs',
		// vendors: 'public/dist/vendors',
	},
};
function copyHtml() {
    return src('src/*.html').pipe(gulp.dest('dist'));
}

function imgTask() {
    return src(paths.src.imgs)
	.pipe(imagemin([
		imagemin.mozjpeg({ quality:80, progressive: true}),
		imagemin.optipng({ optimizationLevel: 2}),
	]))
	.pipe(gulp.dest(paths.dist.imgs));
}




// Compress (JPEG, PNG, GIF, SVG, JPG)
// gulp.task('imgs', () => {
// 	return gulp
// 		.src(paths.src.imgs)
// 		.pipe(
// 			imagemin([
// 				imagemin.gifsicle({
// 					interlaced: true,
// 				}),
// 				imagemin.mozjpeg({
// 					quality: 75,
// 					progressive: true,
// 				}),
// 				imagemin.optipng({
// 					optimizationLevel: 5,
// 				}),
// 				imagemin.svgo({
// 					plugins: [
// 						{
// 							removeViewBox: true,
// 						},
// 						{
// 							cleanupIDs: false,
// 						},
// 					],
// 				}),
// 			]),
// 		)
// 		.pipe(gulp.dest(paths.dist.imgs));
// });
// ############# Js #############
function js() {
    return src(paths.src.js)
        // .pipe(sourcemaps.init())
        // .pipe(concat('all.js'))
        .pipe(terser()) // minify
        // .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.dist.js));
}
function watchJs() {
	watch(paths.src.js, js)
}
// ############# Css #############
function css() {
    return src(paths.src.css)
        // .pipe(sourcemaps.init())
        .pipe(concat('styleAllWithoutSass.css'))  // single file
        .pipe(postcss([autoprefixer(), cssnano()]))
        // .pipe(sourcemaps.write('.'))
        .pipe(dest(paths.dist.css));
}
// ############# for sass #############
const compileSass = require('gulp-sass');
compileSass.compiler = require('node-sass');

const sass = () => {
    return src(paths.src.scss)
    // .pipe(sourcemaps.init())
    .pipe(compileSass().on('error', compileSass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    // .pipe(sourcemaps.write())
    .pipe(concat('sass.css')) // single file
    .pipe(dest(paths.dist.css))
}
const watchSass = () => {
    watch(paths.src.scss, sass)
}
// ############# html #############
const htmlmin = require('gulp-htmlmin');
const fs = require('fs');
// const unlink = require('unlink');
// import { unlink } from 'fs';
function remove() {
	let file = 'index.html'

	try {
		fs.unlinkSync(file);
		console.log('successfully deleted ' + file);
	} catch (err) {
		// handle the error
	}
	// unlink(file, (err) => {
	// 	if (err) throw err;
	// 	console.log('successfully deleted ' + file);
	//   });
}
function rename() {
	fs.readdir(process.cwd(), function (err, files) {
	if (err) {
		console.log(err);
		return;
	}
	console.log(files);
	});

	fs.rename(paths.root.htmlMin, 'index.html', function(err) {
		if ( err ) console.log('ERROR: ' + err);
	});
	console.log('successfully renamed index.min.html to index.html');
}

function html() {
	console.log('Hello Aslamjon');
	return src(paths.src.htmlMin)
    .pipe(htmlmin({collapseWhitespace: true}))
	.pipe(concat('index.html'))
    .pipe(dest(paths.dist.html))
    // .pipe(gulp.dest('index.min'))
}
gulp.task('html1', () => {
	console.log('hello everyone');
    // return src(paths.src.html).pipe(dest(paths.public.www));
});

function watchHtml() {
	// watch(paths.src.html, ['html']); // html command
	watch(paths.src.html, html);
}
// ############# Watch JS HTML SASS #############
function watchJsHtmlSass() {
    watch([paths.src.js, paths.src.html, paths.src.scss], { interval: 1000}, parallel(js, html, sass));
}

exports.html = series(html, rename);
exports.watchHtml = watchHtml
exports.css = css;
exports.js = js;
exports.watchJs = watchJs;
exports.imgTask = imgTask;
exports.sass = sass; // run (gulp Sass)
exports.watchSass = watchSass; // run and watch (gulp devWatchSass)

exports.default = series(parallel(js, css, html, sass), watchJsHtmlSass);


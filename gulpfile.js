var del = require('del');
var gulp = require('gulp');
var rename = require('gulp-rename');
var ts = require('gulp-typescript');
var merge = require('merge2');
var uglify = require('gulp-uglify');
var pump = require('pump');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');

var tsProject = ts.createProject('tsconfig.json');

gulp.task('clean', function () {
    return del([
        'dist/',
        'index.js', 'index.js.map', 'index.d.ts',
        'src/**/*.js', 'src/**/*.js.map', 'src/**/*.d.ts',
        'spec/**/*.js', 'spec/**/*.js.map', 'spec/**/*.d.ts'
    ]);
});

gulp.task('compile', function () {
  var tsResult = tsProject
    .src()
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('.'));
});

gulp.task('compileAndWatch', ['compile'], function() {
    gulp.watch('./**/*.ts', ['compile']);
});

    var tsResult = gulp.src('src/*.ts') 
gulp.task('compileBundle', ["clean"], function () {
        .pipe(ts({
            declaration: true,
            module: "amd",
            outFile: "./dist/lakmus.js",
            target: "es5"
        }));

    return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done. 
        tsResult.dts.pipe(gulp.dest('./')),
        tsResult.js.pipe(gulp.dest('./'))
    ]);
});

gulp.task('build', ["compileBundle"], function (cb) {
    pump([
        gulp.src('./dist/lakmus.js'),
        rename({ suffix: '.min' }),
        uglify(),
        gulp.dest('./dist')
    ],
    cb
  );
});

// var tsProject = ts.createProject({
//     declaration: true,
//     noExternalResolve: true
// });

// // compile
// // compileAndWatch
// // build
// // buildAndUglify
 
// gulp.task('compile', function() {
//     var tsProject = ts.createProject('tsconfig.json');

//     var tsResult = tsProject.src()
//         .pipe(ts(tsProject));

//     return tsResult.js.pipe(gulp.dest("./"));

//     // var tsProject = ts.createProject("tsconfig.json");

//     // var tsResult = tsProject.src()
//     //     .pipe(ts(tsProject));
 
//     // return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done. 
//     //     tsResult.dts.pipe(gulp.dest('release/definitions')),
//     //     tsResult.js.pipe(gulp.dest('release/js'))
//     // ]);
// });
 
// gulp.task('watch', ['scripts'], function() {
//     gulp.watch('lib/*.ts', ['scripts']);
// });










// var tsProject = ts.createProject('tsconfig.json', );



// gulp.task('compileAndWatch', function () {
//     return gulp.src(['**/*.ts', '!node_modules/**'])
//         .pipe(ts({
//             declaration: true,
//             module: "commonjs",
//             outFile: "./dist/lakmus.js",
//             sourceMap: true,
//             target: "es5"
//         }))
//         .pipe(gulp.dest('./'));
// });


// gulp.task('compileAndWatch', function() {
//     return tsProject.src() 
//         .pipe(ts(tsProject))
//         .pipe(gulp.dest('./'));
// });



// gulp.task('build', function() {
//     var tsResult = tsProject.src() // instead of gulp.src(...) 
//         .pipe(ts(tsProject));

//     return tsResult.js.pipe(gulp.dest('release'));
// });

// gulp.task('buildWatch', ["build"], function() {
//     var tsResult = tsProject.src() // instead of gulp.src(...) 
//         .pipe(ts(tsProject));

//     return tsResult.js.pipe(gulp.dest('release'));
// });

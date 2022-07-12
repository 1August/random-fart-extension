const
    gulp = require('gulp'), 
    concat = require('gulp-concat'), 
    uglify = require('gulp-uglify'),
    postcss = require('gulp-postcss'), 
    autoprefixer = require('autoprefixer'), 
    cssnano = require('cssnano'), 
    gulpif = require('gulp-if'), 
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    browserSync = require('browser-sync');


const isPROD = process.env.NODE_ENV === 'production';

const jsFiles = [
    './src/scripts/*.js'
]

const
    devDir = './dev/',
    prodDir = './prod/'
;

const jsonFiles = [
    './*.json'
]

// Run browserSync
serveFiles = () => {
    return browserSync.init({
            server: {
                baseDir: gulpif(!isPROD, devDir, prodDir)
            },
            port: 1989
        });
}

browserSyncReload = (done) => {
    browserSync.reload();
    done();
}

jsTasks = () => {
    return gulp
        .src(jsFiles)
                .pipe(gulpif(!isPROD, sourcemaps.init()))
                .pipe(babel({
                    presets: ['@babel/env']
                }))
                .pipe(gulpif(isPROD, uglify()))
                .pipe(gulpif(!isPROD, sourcemaps.write('.')))
                .pipe(
                    gulpif(!isPROD, gulp.dest(devDir + '/scripts/'), gulp.dest(prodDir + '/scripts/'))
                )
}

cssTasks = () => {
    const postcssPlugins = [
        autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }),
    ];
    if (isPROD) postcssPlugins.push(cssnano());
    return gulp
            .src('./src/main.css')
            .pipe(postcss(postcssPlugins))
            .pipe(
                gulpif(!isPROD, gulp.dest(devDir), gulp.dest(prodDir))
            );
}

htmlTasks = () => {
    return gulp
    .src('./src/*.html')
    .pipe(
        gulpif(isPROD, htmlmin({
            collapseWhitespace: true,
            removeComments: true,
        }))
    )
    .pipe(
        gulpif(!isPROD, gulp.dest(devDir), gulp.dest(prodDir))
    );
}

soundFilesTasks = () => {
    return gulp
    .src('./src/sounds/**/*')
    .pipe(
        gulpif(!isPROD, gulp.dest(devDir + '/sounds/'), gulp.dest(prodDir + '/sounds/'))
    );
}

jsonFilesTasks = () => {
    return gulp
    .src('./src/*.json')
    .pipe(
        gulpif(!isPROD, gulp.dest(devDir), gulp.dest(prodDir))
    );
}

imagesTasks = () => {
    return gulp.src('./src/images/**/*')
                .pipe(
                    gulpif(isPROD, imagemin({verbose: true}))
                    )
                .pipe(
                    gulpif(!isPROD, gulp.dest(devDir + '/images/'), gulp.dest(prodDir + '/images/'))
                );
}

delDir = () => {
    return del([
        gulpif(!isPROD, devDir + 'images/', prodDir)
    ]).then(paths => {
        console.log('✔ Old site folder was deleted 🗑  ->', paths);
    });
}
gulp.task('del', delDir);

logShit = () => {
    console.log('💩 shit');
}

watchFiles = () => {
    gulp.watch('./src/*.html', htmlTasks);
    gulp.watch('./src/*.css', cssTasks);
    gulp.watch('./src/scripts/**/*', jsTasks);
    gulp.watch('./src/images/**/*', imagesTasks);
    gulp.watch('./src/sounds/**/*', soundFilesTasks);
    gulp.watch('./src/*.json', jsonFilesTasks)
    gulp.watch(
        gulpif(!isPROD, devDir + '**/*', prodDir + '**/*'),
        browserSyncReload); 
}

gulp.task('serve', serveFiles);
gulp.task('js', jsTasks);
gulp.task('css', cssTasks);
gulp.task('html', htmlTasks);
gulp.task('images', imagesTasks);
gulp.task('sounds', soundFilesTasks);
gulp.task('jsonFiles', jsonFilesTasks);

gulp.task('watch', gulp.series(
    delDir,
    gulp.parallel('html', 'css', 'js', 'images', 'sounds', 'jsonFiles'),
    gulp.parallel(watchFiles, 'serve')
    )
);

gulp.task('default', gulp.parallel('watch'));

gulp.task('build', gulp.parallel(
    'html', 'css', 'js', 'images', 'sounds', 'jsonFiles'
    )
);
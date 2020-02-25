"use strict"
const gulp = require("gulp");
const sass = require("gulp-sass");
const rname = require("gulp-rename");
const uglify = require("gulp-uglify");
// const image = require("gulp-imagemin");
const clear = require("gulp-clean");
const pipeline = require("readable-stream").pipeline;

// 使用scss
gulp.task("sass", () => {
    return gulp.src("./miniprogram/**/*.scss", { base: "" })
               .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
               .pipe(rname({
                   extname: ".wxss"
               }))
               .pipe(gulp.dest("miniprogram"))
});

gulp.task('watch',function(){
    gulp.watch("./miniprogram/**/*.scss",  gulp.parallel("sass"))
});

// 使用js代码混淆, 去除console等操作
gulp.task('uglify', () => {
    return pipeline(
          gulp.src('./miniprogram/**/*.js'),
          uglify({
              compress: {
                drop_console: true,  // 过滤 console
                drop_debugger: true  // 过滤 debugger
              }
          }),
          gulp.dest('miniprogram')
    );
});

// 清理模板
gulp.task("clear", () => {
    return gulp.src("./dist")
                .pipe(clear())
})


// 打包文件到dist文件夹
gulp.task("build", () => {
    return gulp.src(["./miniprogram/**/*.js", "./miniprogram/**/*.wxml", 
                     "./miniprogram/**/*.wxss", "./miniprogram/**/*.json", 
                    "./miniprogram/images/**",
                     ])
            .pipe(gulp.dest("dist"))
})


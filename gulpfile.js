// 安装依赖
var gulp = require('gulp'),
browserSync = require('browser-sync');

// 设置任务---架设静态服务器
gulp.task('browser-sync', function () {
browserSync.init({
    files:['**'],
    server:{
        baseDir:'./',  // 设置服务器的根目录
        index:'index.html' // 指定默认打开的文件
    },
    port:3400  // 指定访问服务器的端口号
});
});
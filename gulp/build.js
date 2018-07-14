var path = require('path');
var gulpUtil = require('gulp-util');
var ora = require('ora');
var webpack = require('webpack');
var webpackConfig = require('../webpack/webpack.prod.conf');
var webpackConfigH5 = require('../examples-webpack/webpack.prod.conf');
var repoInfo = require(path.resolve(process.cwd(), 'repo-info.json')) || {};
var prepubBaseUri = '//awp-assets.sankuai.com/';
var publishBaseUri = '//awp-assets.meituan.net/';

function webpackExec(callback) {
    var spinner = ora('building for production...');
    spinner.start();
    webpack(webpackConfigH5, function (err, stats) {
        spinner.stop();
        if (err) {
            throw new gulpUtil.PluginError(webpack, err);
        }
        gulpUtil.log('[webpack]', stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }));
        // callback();
    });
    webpack(webpackConfig, function (err, stats) {
        spinner.stop();
        if (err) {
            throw new gulpUtil.PluginError(webpack, err);
        }
        gulpUtil.log('[webpack]', stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }));
        callback();
    });
}


module.exports = function (gulp) {
    // var repoUri = repoInfo.group + '/' + repoInfo.name + '/' + repoInfo.version + '/';
    var repoUri = repoInfo.group + '/' + repoInfo.name + '/';

    gulp.task('webpack:publish', function (callback) {
        webpackConfig.output.publicPath = publishBaseUri + repoUri;
        webpackConfigH5.output.publicPath = publishBaseUri + repoUri;
        webpackExec(callback);
    });

    gulp.task('webpack:prepub', function (callback) {
        webpackConfig.output.publicPath = prepubBaseUri + repoUri;
        webpackConfigH5.output.publicPath = prepubBaseUri + repoUri;
        webpackExec(callback);
    });


    gulp.task('build', ['hfe-del', 'eslint', 'webpack:publish'], function () {
        gulp.run(['hfe-combo']);
    });

    gulp.task('build:prepub', ['hfe-del', 'eslint', 'webpack:prepub'], function () {
        gulp.run(['hfe-combo:prepub']);
    });
};

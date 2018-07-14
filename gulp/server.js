var shell = require('gulp-shell');

module.exports = function (gulp) {
    gulp.task('server', shell.task(['npm run dev']));
};

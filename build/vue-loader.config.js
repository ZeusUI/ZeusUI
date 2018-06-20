module.exports = {
  preserveWhitespace: false,
  postcss: [
    require('autoprefixer')({
      browsers: ['Android >= 2.3', 'iOS >= 4']
    })
  ]
};

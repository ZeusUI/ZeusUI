module.exports = {
  preserveWhitespace: true,
  postcss: [
    require('postcss-px2rem')({remUnit: 50}),
    require('autoprefixer')({
      browsers: ['Android >= 2.3', 'iOS >= 4']
    })
  ]
};

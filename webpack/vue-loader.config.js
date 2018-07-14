module.exports = {
  postcss: [
    require('autoprefixer')({
      browsers: ['Android >= 2.3', 'iOS >= 4']
    })
  ]
};

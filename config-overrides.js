/* config-overrides.js */

module.exports = {
  webpack: function(config, env) {
    //do stuff with the webpack config...
    config.output = {
      ...config.output,
      filename: 'static/js/cra-lazy-test.js',
      libraryTarget: 'system',
    }
    delete config.optimization
    config.externals = [
      'react',
      'react-dom',
      /^rxjs\/?.*$/,
    ]
    return config;

  }
}
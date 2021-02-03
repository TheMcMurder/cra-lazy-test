/* config-overrides.js */
const SystemJSPublicPathWebpackPlugin = require("systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin");

module.exports = {
  webpack: function(config, env) {
    //do stuff with the webpack config...
    config.output = {
      ...config.output,
      filename: 'static/js/cra-lazy-test.js',
      libraryTarget: 'system',
    }
    config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'HtmlWebpackPlugin' && plugin.constructor.name !== '_MiniCssExtractPlugin')
    // config.plugins.push(
    //   new SystemJSPublicPathWebpackPlugin({
    //     systemjsModuleName: "cra-lazy-test"
    //   })
    // )
    delete config.optimization
    config.externals = [
      'react',
      'react-dom',
      /^rxjs\/?.*$/,
    ]
    console.log('config', config)
    return config;

  },
  devServer(configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.disableHostCheck = true
      config.headers = config.headers || {}
      config.headers['Access-Control-Allow-Origin'] = '*'
      return config
    }
  }
}
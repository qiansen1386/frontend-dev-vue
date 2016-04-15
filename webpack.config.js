var path = require('path')

var loaders = [
  {
    'test': /\.js?$/,
    'exclude': /node_modules/,
    'loader': 'babel!eslint',
    'query': {
      'presets': [
        'es2015',
        'stage-2'
      ],
      'plugins': ['html']
    }
  },
  {
    'test': /\.vue?$/,
    'loader': 'vue!eslint'
  }
]

module.exports = {
  devtool: 'eval-source-map',
  entry: path.resolve('./src/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[chunkhash].bundle.js'
  },
  module: {
    loaders: loaders
  },
  vue: {
    sass: 'style!css!sass?indentedSyntax',
    scss: 'style!css!sass'
  }
}

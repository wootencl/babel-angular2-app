var path = require('path');

var babelOptions = {
  optional: ['es7.decorators'],
  plugins: [
    './transformers/disable-define',
    'angular2-type-annotation',
    './transformers/angular2-type-assertion',
    'angular2-at-annotation'
  ]
};

module.exports = {
  entry: './src/app.es6',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js'
  },
  resolve: {
    alias: {
      // TODO: Use angular2 bundle.js.
      'angular2': 'angular2/es6/dev',
      'rtts_assert': 'rtts_assert/es6'
    },
    extensions: ['', '.webpack.js', '.web.js', '.js', '.es6']
  },
  module: {
    loaders: [
      {
        test: /\.es6$/,
        loader: 'babel?' + JSON.stringify(babelOptions)
      }
    ]
  }
};
var webpack = require('webpack')

module.exports = {
  entry: './index.js',


    output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: 'public'
  },
  resolve: {
    alias: {
     // 'react-router': path.join(__dirname, '..', 'modules'),
      'react': 'anujs',
      'react-dom': 'anujs',
       // 'react-tap-event-plugin': 'anujs/lib/injectTapEventPlugin',
       // 'react-dom/lib/ReactBrowserEventEmitter': 'anujs/lib/ReactBrowserEventEmitter',
    }
  },
    plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}

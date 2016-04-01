module.exports = {
  entry: './app/main.js',
  output: {
    path: './public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    inline: true,
    port: 3333,
    contentBase: 'public'
  }
}

var ExtractTextPlugin = require('extract-text-webpack-plugin');
/* PostCSS Plugins */
var autoprefixer = require('autoprefixer');
var postCssSimpleVars = require('postcss-simple-vars');
var cssVariables = require('./app/shared/css-variables.js');
var cssLoaderConfig = "css-loader?modules&importLoaders=1&localIdentName=[local]__[hash:base64:5]!postcss-loader";
var cssLoader = ExtractTextPlugin.extract("style-loader", cssLoaderConfig);


module.exports = {
  entry: './app/main.js',
  output: {
    path: './public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: cssLoader
      },
      {
        test: /\.scss$/,
        loader: "style-loader!css-loader"
      }
    ],

    preLoaders: [
      {
        test: /\/jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: ['node_modules', 'src']
  },
  plugins: [
    new ExtractTextPlugin( "bundle.css" )
  ],
  postcss: function postcss() {
    return [
      postCssSimpleVars({variables: cssVariables}),
      autoprefixer({ brwosers: ["last 2 versions"] })
    ];
  },
  devServer: {
    inline: true,
    port: 3333,
    contentBase: 'public'
  }
}

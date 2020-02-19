var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
  entry : './src/index.js',
  output : {
    path : path.resolve(__dirname , 'dist'),
    filename: 'index.bundle.js'
  },
  module : {
    rules : [
      {test : /\.(js)$/, use: [
        'babel-loader'
      ]},
      {test: /\.s[ac]ss$/i, use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ]}
    ]
  },
  plugins : [
    new HtmlWebpackPlugin ({
        template : 'src/index.html'
    })
  ]
}
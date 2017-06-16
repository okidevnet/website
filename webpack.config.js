var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports =
[
{
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './docs/js')
  },
  devServer: {
    contentBase: 'docs'
  },
// it might be activated later
//  devtool : 'eval-source-map'
},
{
  entry: './src/sass/index.scss',
  output: {
    path: path.resolve(__dirname, './docs/css'),
    filename: 'style.css'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: "style-loader",
            use: ["css-loader", "sass-loader?outputStyle=expanded"]
          }
        )
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ]
}
]

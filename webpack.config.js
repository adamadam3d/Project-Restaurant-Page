//webpack configfile
const path = require('path');
// install command htmlwebpack?

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
       {
         test: /\.(png|svg|jpg|jpeg|gif)$/i,
         type: 'asset/resource',
       },
      ],
    },
    entry: {index:'./src/index.js',home:'./src/home.js',menu:'./src/menu.js',contact:'./src/contact.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    devtool: 'inline-source-map',
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Development',
        template: './src/index.html'
        
      }),
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
  };

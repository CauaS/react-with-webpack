const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    mode: 'development', // mode of development
    entry: './app.js', // entry file
    output: {
        path: path.resolve(__dirname, 'dist'), //path to output the build file
        filename: 'bundle.js' //name of build file
    },
    module: {
        rules: [
           { 
              test: /\.js$/, // apply to all JS files
              exclude: /node_modules/, // exclude all files found on node_modules
              use: {
                loader: 'babel-loader', // use this loader
              }
            }
        ]
    },
    plugins:[
      new HtmlWebpackPlugin({
        template: "public/index.html" // create a template
      })
    ],
    devServer: {
      host: 'localhost', // where to run
      historyApiFallback: true,
      port: 3000, //given port to exec. app
      open: true,  // open new tab
    }
}
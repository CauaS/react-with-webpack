const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    mode: 'development', // mode of development
    devtool: 'inline-source-map',
    entry: './src/app.tsx', // entry file
    module: {
        rules: [
           { 
              test: /\.js$/, // apply to all JS files
              exclude: /node_modules/, // exclude all files found on node_modules
              use: {
                loader: 'babel-loader', // use this loader
              }
            },
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/
            }
        ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'dist'), //path to output the build file
        filename: 'bundle.js' //name of build file
    },
    plugins:[
      new HtmlWebpackPlugin({
        template: "public/index.html" // create a template
      }),
      new BundleAnalyzerPlugin({
        analyserMode: 'disabled',
        generateStatsFile: true,
        statsOption: {
          source: false
        }
      })
    ],
    devServer: {
      host: 'localhost', // where to run
      historyApiFallback: true,
      port: 3000, //given port to exec. app
      open: true,  // open new tab
    },
   
}
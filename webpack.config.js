const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const BrotliPlugin = require("brotli-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');

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
      new BrotliPlugin({
        asset: '[path].br[query]',
        test: /\.(js|css|html|svg|ts|tsx)$/,
        threshold: 1024,  // Define the minumum size of the file (em bytes) to apply compression Brotli
        minRatio: 0.8, // Define relation of minumum compression to save compressed file
        compressionOptions: {
          level: 11
        },
        deleteOriginalAssets: false
      })
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
          terserOptions: {
            format:{
              comments: false // Prevents building with comments
            }
          },
          extractComments: false // Whether comments shall be extracted to a separate file
        }),
      ]
    },
    devServer: {
      host: 'localhost', // where to run
      historyApiFallback: true,
      port: 3000, //given port to exec. app
      open: true,  // open new tab
    }
}
const path = require('path');
const esLintPlugin = require('eslint-webpack-plugin');
const options = {};


module.exports = {
    mode : 'development',
    entry: './src/index.js',
    output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins : [new esLintPlugin(options)]
};


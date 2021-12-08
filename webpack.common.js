const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  module: {
    rules: [
      // {
      //     test: /\.js$/,
      //     exclude: /(node_modules)/,
      //     use: {
      //         loader: 'babel-loader',
      //         options: {
      //         presets: ['@babel/preset-env']
      //         }
      //     }
      // },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.(png|svg|jpg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'assets',
            esModule: false,
          },
        },
      },
    ],
  },
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');
const promptSync = require('prompt-sync')();

let token;

// check if API key exists
if (fs.existsSync('.token')) {
  token = fs.readFileSync('.token', 'utf8').trim();
}

// prompt for API key
if (!token) {
  console.log([
    '\n*** Missing API key ***\n',
    'This application leverages Yelp\'s open API and requires a valid API key to function.\n', 
    'For more info visit https://www.yelp.com/developers/documentation/v3\n',
  ].join(''));
  token = promptSync.hide('Please provide valid Yelp API key: ');
  fs.writeFileSync('.token', token);
}

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 9000,
    proxy: {
      '/api': {
        target: 'https://api.yelp.com',
        secure: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        },
        headers: {
          'Authorization': 'Bearer ' + token,
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { useBuiltIns: "entry" }],
              ['@babel/preset-react']
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};

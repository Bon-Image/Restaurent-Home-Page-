// This configuration tells Webpack to start bundling the application from ./src/index.js and output the bundled file as 
// main.js in the dist directory.

const path = require('path'); // Imports the built-in path module from Node.js
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

// Export webpack configuration object
module.exports = {

  entry: './src/index.js', 

  plugins: [

    new HtmlWebpackPlugin({

      title: 'Output Management',
      template:'./src/index.html', 
      filename:'index.html', // This field is not mandatory, by default, html-webpack-plugin will name the output HTML file
      // index.html. You only need to specify the filename field if you want to name the output HTML file something different.

    }),

],

  output: {

    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),

  },


  module: {

    rules: [

      {

        test: /\.css$/i,

        use: ['style-loader', 'css-loader'],

      },

    ],

  },

};

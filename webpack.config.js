const path = require('path');

module.exports = {
  entry: {
			App: "./app/assets/scripts/modules/App.js",
			Vendor: "./app/assets/scripts/modules/Vendor.js"
		 },
  output: {
    path: path.resolve(__dirname, 'app/temp/scripts'),
    filename: '[name].js'
  },
  module: {
	  loaders: [
		{
		  loader: 'babel-loader',
		  query: {
			  presets: ['es2015']
		  },
		  test: /\.js$/,
		  exclude: /node_modules/
		}
	  ]
  },
  resolve: {
	  modules: [
		path.resolve(__dirname, 'app'),
		path.resolve(__dirname, 'app/assets/scripts/modules'),
		path.resolve(__dirname, 'node_modules')
	  ]
  }
};

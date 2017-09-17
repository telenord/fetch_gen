var path = require('path');

module.exports = {
	entry: './src/js.js',
	output: {
		path: path.resolve(__dirname , 'dist'),
		filename: 'bundle.js',
		publicPath: './dist'
	},
	module: {
		rules: [ {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['react', 'stage-3', ['es2015', { 'modules': false }]],
            plugins: ['transform-function-bind']
          }
        },
		{
			test: '/\.css$/',
			use: [
			'style-loader',
			'css-loader'
			]
		}
		]
	},
};
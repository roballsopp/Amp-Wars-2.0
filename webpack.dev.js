const path = require('path');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const STATIC_FILES_DIR = path.resolve(__dirname, 'public');

module.exports = {
	// files are named according to `entry` key
	entry: {
		secure: ['./src/polyfills', './src/SecureApp/index'],
		auth: ['./src/polyfills', './src/AuthApp/index'],
	},
	mode: 'development',
	// map webpack's output back to source files when debugging in chrome https://webpack.js.org/guides/development#using-source-maps
	devtool: 'inline-source-map',
	output: {
		path: STATIC_FILES_DIR,
		publicPath: '/',
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.(js)$/,
				exclude: /(node_modules)/,
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: 'file-loader',
			},
		],
	},
	plugins: [
		// webpack essentially does a find and replace on each key listed here. API_URL cannot be accessed
		// in the app via global.API_URL, process.env.API_URL, or any way other than plain 'ol API_URL.
		// If you define something here like 'process.env.API_URL', it will only work if you access it in app
		// by explicitly writing out 'process.env.API_URL'. It won't work if you do const { API_URL } = process.env;
		new DefinePlugin({
			API_URL: JSON.stringify(process.env.API_URL),
			DI_URL: JSON.stringify(process.env.DI_URL),
			STRIPE_KEY: JSON.stringify(process.env.STRIPE_KEY),
			SENTRY_DSN: JSON.stringify(process.env.SENTRY_DSN),
			DEBUG: process.env.DEBUG,
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/SecureApp/index.html',
			filename: path.join(STATIC_FILES_DIR, 'index.html'),
			chunks: ['secure'],
		}),
		new HtmlWebpackPlugin({
			hash: true,
			template: './src/AuthApp/index.html',
			filename: path.join(STATIC_FILES_DIR, 'auth.html'),
			chunks: ['auth'],
		}),
	],
	devServer: {
		// where to get static files (index.html)
		contentBase: STATIC_FILES_DIR,
		port: 3000,
		// where to serve bundles from (main.js will be available at http://localhost:<port>/<publicPath>)
		publicPath: '/',
		historyApiFallback: {
			rewrites: [
				{ from: /^\/$/, to: '/index.html' },
				{ from: /^\/auth/, to: '/auth.html' },
			],
		},
		overlay: true,
	},
};

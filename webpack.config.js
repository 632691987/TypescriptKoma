const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    plugins: [
        new HtmlWebpackPlugin({
            title: '我的Webpack5',
        }),
    ],
    devServer: {
        static: './dist',
        port: 3000,
    },
    output: {
        filename: 'bundle-[contenthash].js',
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}
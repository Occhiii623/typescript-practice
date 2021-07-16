const path = require('path');

module.exports = {
    entry: {
        bundle: './src/index.ts'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'), // webpack-dev-serverが参照するディレクトリ
        open: true // ローカルのdev serverを立ちあげた時に勝手にブラウザを開くかの設定
    },
    module: {
        rules: [
            {
                loader: "ts-loader",
                test: /\.ts$/
            }
        ]
    }
}
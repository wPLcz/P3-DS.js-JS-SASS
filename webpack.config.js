var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: [
        "./js/in.js",
        './scss/main.scss'
    ],
    output: {
        filename: "./js/out.js"
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    // use: ['css-loader', 'sass-loader'],
                    use:[
                        {
                            loader:'css-loader',
                            options:{url:false}
                        },
                        'sass-loader'
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.css$/,
                loader: ["style-loader", "css-loader"]
            },

        ]
    },
    devServer: {
        filename: './js/out.js'
    },
    plugins: [
        new ExtractTextPlugin("./css/main.css")
    ]
};

const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

const outputPath = path.resolve(__dirname, 'public');

module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    output: {
        path: outputPath,
        filename: "main.js",
      },
    module: {
      rules: [
        {
            test: /\.ts$/,
            use: 'ts-loader',
        },
        {
            test: /\.css/,
            use: [
                "style-loader",
                {
                    loader: "css-loader",
                    options: { url: false }
                }
            ]
        }
      ],
    },
    resolve: {
      extensions: [
        '.ts', '.js',
      ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
      ],
    devServer: {
        static: {
            directory: './public'
          },
      },
  };
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path';
import webpack from 'webpack';

type Mode = 'production' | 'development';

type EnvVariabales = {
  mode: Mode,
  port: number
}

export default (env: EnvVariabales) => {
  const isDev = env.mode === 'development';

  return {
    mode: env.mode || 'development',

    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true
    },

    devtool: isDev ? 'inline-source-map' : false,

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public', 'index.html')
      }),
      !isDev && new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      })
    ],

    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ],
        },
        {
          test: /\.tsx?.$/,
          use: 'ts-loader',
          exclude: /node-modules/
        }
      ]
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },

    devServer: {
      port: env.port || 5000,
      open: true
    }

  } as webpack.Configuration;
}



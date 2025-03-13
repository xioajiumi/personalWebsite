const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const compressionWebpackPlugin = require("compression-webpack-plugin");

const path = require("path");

module.exports = {
  entry: {
    index: "/src/js/index.js",
    animation: "/src/js/animatedLines.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js", // 添加 contenthash
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(css)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          filename: "img/[name][ext]",
          publicPath: "./",
        },
      },
    ],
  },
  plugins: [
    new compressionWebpackPlugin({
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.(html|js|css|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
    new CssMinimizerPlugin(),
    new MiniCssExtractPlugin({
      filename: "./css/main.[contenthash].css", // 添加 contenthash
    }),
    new HtmlWebpackPlugin({
      template: "./src/view/index.html",
      favicon: "./src/img/favicon-16x16.webp",
      filename: "index.html",
      inject: "body",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      },
    }),
  ],
  devServer: {
    host: "localhost",
    port: "8888",
    open: true,
    watchFiles: ["./src/view/index.html"],
  },
};
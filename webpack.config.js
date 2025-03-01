const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const compressionWebpackPlugin = require("compression-webpack-plugin");

const path = require("path");
const { watchFile } = require("fs");
module.exports = {
  // 2. 配置JS入口(多入口)
  entry: {
    index:"/src/js/index.js",
    animation:"/src/js/animatedLines.js",
    // cursorFollower:"./src/js/cursorFollower.js",
  },

  output: {
    path: path.resolve(__dirname, "dist"),

    filename: "[name].js",
    clean: true, // 自动将上次打包目录资源清空
  },
  module: {
    rules: [
      //处理css
      {
        test: /\.(css)$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      // 处理CSS中的背景图片资源
      {
        test: /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/,
        type: "asset",
        //解析
        parser: {
          // 转base64的条件
          // 图片大小如果小于8kb,就会被base64处理
          // base64的优点:减少请求数量,减轻服务器压力
          // base64的缺点:图片体积会更大,文件请求速度更慢
          dataUrlCondition: {
            maxSize: 8 * 1024, // 8kb
          },
        },
        generator: {
          //与output.assetModuleFilename是相同的,这个写法引入的时候也会添加好这个路径
          // 给图片进行重命名 [hash:10]取图片的hash的前10为,[ext]取文件原来的扩展名
          filename: "img/[name][ext]",
          //打包后对资源的引入，文件命名已经有/images了
          publicPath: "./",
        },
      },
    ],
  },
  plugins: [
    //gzip压缩
    new compressionWebpackPlugin({
      // filename: "[path].gz[query]",
      filename: "[path][base].gz",
      algorithm: "gzip",
      test: /\.(html|js|css|svg)$/,
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),

    // css压缩
    new CssMinimizerPlugin(),
    // 提取css成单独文件
    new MiniCssExtractPlugin({
      // 定义输出文件名和目录
      filename: "./css/main.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/view/index.html",
      favicon: "./src/img/favicon-16x16.webp",
      filename: "index.html",
      inject: "body",
      // 通过minify属性可以压缩html文件
      minify: {
        // 移除空格
        collapseWhitespace: true,
        // 移出注释
        removeComments: true,
      },
    }),
  ],
  // 开发服务器
  devServer: {
    host: "localhost", // 启动服务器域名
    port: "8888", // 启动服务器端口号
    open: true, // 是否自动打开浏览器
    watchFiles: ["./src/view/index.html"],
  },
};

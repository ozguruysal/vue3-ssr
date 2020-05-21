const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, "../", dir);
}

const NODE_ENV = process.env.NODE_ENV || "development";
const isProd = NODE_ENV === "production";

const baseConfig = {
  mode: NODE_ENV,

  output: {
    path: resolve("dist"),
    publicPath: "/dist/",
    filename: "js/[name].[chunkhash].js",
    chunkFilename: "js/[name].[chunkhash].js",
  },

  resolve: {
    extensions: [".js", ".vue", ".json"],
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|vue)$/,
        loader: "eslint-loader",
        options: {
          failOnError: true,
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          compilerOptions: {
            preserveWhitespace: false,
          },
        },
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [resolve("src")],
      },
    ],
  },

  plugins: [
    new VueLoaderPlugin(),
    ...(isProd
      ? []
      : [
          new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
              messages: ["Your app is running here http://localhost:8080"],
            },
          }),
        ]),
  ],
};

module.exports = { baseConfig, isProd };

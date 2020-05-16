const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

function resolve(dir) {
  return path.join(__dirname, "../", dir);
}

const NODE_ENV = process.env.NODE_ENV || "development";
// const isProd = NODE_ENV === "production";

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

  plugins: [new VueLoaderPlugin()],
};

module.exports = baseConfig;

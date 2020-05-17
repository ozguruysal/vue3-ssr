const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

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
    new MiniCssExtractPlugin({
      filename: isProd ? "css/[name].[contenthash].css" : "css/[name].css",
    }),
    ...(isProd
      ? [
          new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require("cssnano"),
            cssProcessorOptions: {
              preset: ["default"],
            },
            canPrint: true,
          }),
        ]
      : []),
  ],
};

function buildCssRules() {
  const rule = {
    test: /\.css$/,
  };

  rule.oneOf = [
    {
      test: resolve("./src/App.vue"),
      use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
    },
    { use: ["css-loader", "postcss-loader"] },
  ];

  baseConfig.module.rules.push(rule);
}

buildCssRules();

module.exports = baseConfig;

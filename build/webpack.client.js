const webpack = require("webpack");
const merge = require("webpack-merge");
const { VueSSRClientPlugin } = require("./plugins/client");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const { baseConfig, isProd } = require("./webpack.base");

const clientConfig = merge(baseConfig, {
  entry: {
    app: "./src/entry-client.js",
  },

  optimization: {
    runtimeChunk: {
      // extract webpack runtime & manifest to avoid vendor chunk hash changing
      // on every build.
      name: "manifest",
    },

    splitChunks: {
      chunks: "all",
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development",
      ),
      "process.env.VUE_ENV": '"client"',
      "process.browser": true,
      "process.server": false,
    }),

    new VueSSRClientPlugin(),
  ],
});

function initCssConfig() {
  clientConfig.optimization.splitChunks.cacheGroups = {
    styles: {
      name: "styles",
      test: (m) => m.constructor.name === "CssModule",
      chunks: "all",
      enforce: true,
    },
  };

  clientConfig.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: !isProd,
          reloadAll: true,
        },
      },
      "css-loader",
      "postcss-loader",
    ],
  });

  clientConfig.plugins.push(
    new MiniCssExtractPlugin({
      filename: isProd ? "css/[name].[contenthash].css" : "css/[name].css",
    }),
  );

  if (isProd) {
    clientConfig.plugins.push(
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.css$/g,
        cssProcessor: require("cssnano"),
        cssProcessorOptions: {
          preset: ["default"],
        },
        canPrint: true,
      }),
    );
  }
}

initCssConfig();

module.exports = clientConfig;

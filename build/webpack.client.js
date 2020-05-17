const webpack = require("webpack");
const merge = require("webpack-merge");
const { VueSSRClientPlugin } = require("./plugins/client");

const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
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

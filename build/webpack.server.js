const webpack = require("webpack");
const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const { VueSSRServerPlugin } = require("./plugins/server");

const { baseConfig } = require("./webpack.base");

module.exports = merge(baseConfig, {
  entry: "./src/entry-server.js",

  output: {
    filename: "server-bundle.js",
    // This tells the server bundle to use Node-style exports
    libraryTarget: "commonjs2",
  },

  target: "node",

  devtool: "source-map",

  externals: nodeExternals({
    whitelist: [/\.css$/],
  }),

  module: {
    rules: [
      // We are just ignoring css during server build
      {
        test: /\.css$/,
        use: "null-loader",
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "development",
      ),
      "process.env.VUE_ENV": '"server"',
      "process.browser": false,
      "process.server": true,
    }),

    new VueSSRServerPlugin(),
  ],
});
